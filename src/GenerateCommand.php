<?php

namespace TiMacDonald\Wayfinder;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Routing\Router;
use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\Collection;
use Illuminate\Support\Js;
use Illuminate\View\Factory;
use ReflectionProperty;

use function Illuminate\Filesystem\join_paths;

class GenerateCommand extends Command
{
    protected $signature = 'wayfinder:generate {--base=}';

    private ?string $forcedScheme;

    private ?string $forcedRoot;

    public function __construct(
        private Filesystem $files,
        private Router $router,
        private Factory $view,
        private UrlGenerator $url,
    ) {
        parent::__construct();
    }

    /**
     * todo opt into barrel files
     * todo detect parameter types, e.g., number vs string
     * todo filter out vendor files by default?
     * todo test out tree shaking of unused routes
     * todo __invoke should be a exported unnamed function
     * todo routes with column bindings, such as {post:uuid}
     * todo opt in/out of method and _method?
     * todo: provide @see file link and line number.
     * todo: wrap everything in JS::from ?
     * todo: handle invokable controllers mixed with other methods.
     */
    public function handle()
    {
        $this->view->addNamespace('wayfinder', __DIR__.'/../resources');
        $this->view->addExtension('blade.ts', 'blade');
        $this->forcedScheme = (new ReflectionProperty($this->url, 'forceScheme'))->getValue($this->url);
        $this->forcedRoot = (new ReflectionProperty($this->url, 'forcedRoot'))->getValue($this->url);

        $this->files->deleteDirectory($this->base());

        $controllers = collect($this->router->getRoutes())
            ->mapInto(Route::class)
            ->filter(fn (Route $route) => $route->hasController())
            ->groupBy(fn (Route $route) => $route->dotNamespace());

        $controllers->undot()->each($this->writeBarrelFiles(...));

        $controllers->each($this->writeControllerFile(...));
    }

    private function writeControllerFile(Collection $routes, string $namespace): void
    {
        $path = join_paths($this->base(), ...explode('.', $namespace)).'.ts';

        // do not add this unless any method needs it.
        if ($routes->contains(fn (Route $route) => $route->parameters()->contains(fn (Parameter $parameter) => $parameter->optional))) {
            $content = $this->view->make('wayfinder::validate-parameters')->render();

            $this->files->append($path, $content);
        }

        $routes->each(fn (Route $route) => $this->writeControllerMethodExport($route, $path));
    }

    private function writeControllerMethodExport(Route $route, string $path): void
    {
        // scheme:
        //  - route configured secure bool
        //  - check for "forceScheme"
        //  - scheme of the current request (window.location?)
        // domain:
        //  - route configured domain
        //  - forced root
        //  - root of the current request (window.location?)
        //  port:
        //  - when current request is secure and port is 443 or insecure and port is 80 then no port otherwise use the current request's port
        // no scheme
        // no domain
        // /path?query
        //
        // no scheme but domain
        //  fgro
        //

        // TODO: the port is added to the route when it does not have the correct port / scheme
        $this->files->append($path, $this->view->make('wayfinder::method', [
            'controller' => $route->controller(),
            'method' => $route->method(),
            'path' => $route->controllerPath(),
            'line' => $route->controllerMethodLineNumber(),
            'parameters' => $route->parameters(),
            'verbs' => $route->verbs(),
            'scheme' => $route->scheme() ?? $this->forcedScheme,
            'domain' => $route->domain() ?? $this->forcedRoot,
            'port' => '',
            'uri' => $route->uri(),
        ]));
    }

    private function writeBarrelFiles(array|Collection $children, string $parent): void
    {
        $children = collect($children);

        if (array_is_list($children->all())) {
            return;
        }

        $this->files->makeDirectory($directory = join_paths($this->base(), $parent), recursive: true, force: true);

        $children->each(function ($children, $child) use ($parent, $directory) {
            $this->writeBarrelExport($child, "{$directory}.ts");

            $this->writeBarrelFiles($children, join_paths($parent, $child));
        });
    }

    private function writeBarrelExport(string $child, string $path)
    {
        $base = basename($path, '.ts');

        $this->files->append($path, <<<JAVASCRIPT
            export * as {$child} from "./{$base}/{$child}"

            JAVASCRIPT);
    }

    private function base(): string
    {
        $base = $this->option('base') ?? join_paths(resource_path(), 'js');

        return join_paths($base, 'actions');
    }
}
