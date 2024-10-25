<?php

namespace TiMacDonald\Solder;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Routing\Route;
use Illuminate\Routing\Router;
use Illuminate\Support\Collection;
use Illuminate\Support\Js;
use Illuminate\View\Factory;
use ReflectionClass;

use function Illuminate\Filesystem\join_paths;

class GenerateCommand extends Command
{
    protected $signature = 'solder:generate {--base=}';

    public function __construct(
        private Filesystem $files,
        private Router $router,
        private Factory $view,
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
     */
    public function handle()
    {
        $this->view->addNamespace('solder', __DIR__.'/../resources');
        $this->view->addExtension('blade.ts', 'blade');

        $this->files->deleteDirectory($this->base());

        $controllers = collect($this->router->getRoutes())
            ->filter(fn (Route $route) => $route->getControllerClass())
            ->groupBy(fn (Route $route) => str_replace('\\', '.', $route->getControllerClass()));

        $controllers->undot()->each($this->writeBarrelFiles(...));

        $controllers->each($this->writeControllerFile(...));
    }

    private function writeControllerFile(Collection $routes, string $namespace): void
    {
        $path = join_paths($this->base(), ...explode('.', $namespace)).'.ts';

        $content = $this->view->make('solder::validate-parameters')->render();

        $this->files->append($path, $content);

        $routes->each(fn (Route $route) => $this->writeControllerMethodExport($route, $path));
    }

    private function writeControllerMethodExport(Route $route, string $path): void
    {
        [$method, $controller] = $route->getActionName() === $route->getActionMethod()
            ? ['__invoke', "\\{$route->getActionName()}"]
            : [$route->getActionMethod(), "\\{$route->getControllerClass()}"];

        $reflectionClass = new ReflectionClass($route->getControllerClass());

        $optionalParameters = collect($route->toSymfonyRoute()->getDefaults());

        $parameters = collect($route->parameterNames())->map(fn ($name) => new Parameter($name, $optionalParameters->has($name)));

        $verbs = collect($route->methods())->mapInto(Verb::class);

        $content = $this->view->make('solder::method', [
            'controller' => $controller,
            'method' => $method,
            'path' => $reflectionClass->getFileName(),
            'line' => $reflectionClass->getStartLine(),
            'parameters' => $parameters,
            'verbs' => $verbs,
            'uri' => "/{$route->uri}",
        ])->render();

        $this->files->append($path, $content);
    }

    private function writeBarrelFiles(array|Collection $children, string $parent): void
    {
        $children = collect($children);

        if (array_is_list($children->all())) {
            return;
        }

        $this->files->makeDirectory($directory = join_paths($this->base(), $parent), recursive: true);

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
