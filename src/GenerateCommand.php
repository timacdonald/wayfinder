<?php

namespace TiMacDonald\Solder;

use Illuminate\Console\Command;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Routing\Route;
use Illuminate\Routing\Router;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Js;
use ReflectionClass;

use function Illuminate\Filesystem\join_paths;

class GenerateCommand extends Command
{
    protected $signature = 'solder:generate {--base=}';

    public function __construct(private Filesystem $files)
    {
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
    public function handle(Router $router)
    {
        View::addNamespace('solder', __DIR__.'/../resources');
        View::addExtension('blade.ts', 'blade');

        $this->files->deleteDirectory($this->base());

        $controllers = collect($router->getRoutes())
            ->filter(fn (Route $route) => $route->getControllerClass())
            ->groupBy(fn (Route $route) => str_replace('\\', '.', $route->getControllerClass()));

        $controllers->undot()->each($this->writeBarrelFiles(...));

        $controllers->each($this->writeControllerFile(...));
    }

    private function writeControllerFile(Collection $routes, string $namespace): void
    {
        $path = join_paths($this->base(), ...explode('.', $namespace)).'.ts';

        $routes->each(fn (Route $route) => $this->writeControllerMethodExport($route, $path));
    }

    private function writeControllerMethodExport(Route $route, string $path): void
    {
        [$method, $controller] = $route->getActionName() === $route->getActionMethod()
            ? ['__invoke', "\\{$route->getActionName()}"]
            : [$route->getActionMethod(), "\\{$route->getControllerClass()}"];

        $e = json_encode(...);
        $uri = "/{$route->uri}";
        $methods = collect($route->methods())->map(str(...))->map->lower();
        $optionalParameters = collect($route->toSymfonyRoute()->getDefaults());
        $parameters = collect($route->parameterNames())->map(fn ($name) => new class($name, $optionalParameters->has($name)) implements Htmlable
        {
            public function __construct(public string $name, public bool $optional)
            {
                //
            }

            public function toHtml()
            {
                return $this->name;
            }
        });
        $verbs = collect($route->methods())->map(strtolower(...))->map(fn ($verb) => new class($verb, $this->formMethod($verb))
        {
            public function __construct(public string $actual, public string $formSafe)
            {
                //
            }
        });

        $reflectionClass = new ReflectionClass($route->getControllerClass());

        $content = View::make('solder::method', [
            'controller' => $controller,
            'method' => $method,
            'path' => $reflectionClass->getFileName(),
            'line' => $reflectionClass->getStartLine(),
            'parameters' => $parameters,
            'verbs' => $verbs,
        ]);

        file_put_contents('output.ts', $content);

        // $this->files->append($path, <<<JAVASCRIPT
        //     export const {$method}: {
        //         url: ({$this->formatRouteParameters($parameters, $optionalParameters)}) => string,
        //         {$methods->map(fn ($m) => <<<TYPESCRIPT
        //             {$m}: ({$this->formatRouteParameters($parameters, $optionalParameters)}) => { action: string, method: {$e($this->formMethod($m))}, _method: {$e($m)} },
        //             TYPESCRIPT)->join(PHP_EOL.'    ')}
        //         definition: { methods: ({$methods->map(fn ($m) => $e($m))->implode(' | ')})[], uri: {$e($uri)} },
        //     } = {
        //         url: ({$this->formatRouteParameters($parameters, $optionalParameters)}) => {$this->formatUrl($parameters, $optionalParameters, $method)},
        //         {$methods->map(fn ($m) => <<<TYPESCRIPT
        //             {$m}: ({$this->formatRouteParameters($parameters, $optionalParameters)}) => ({
        //                     action: {$this->formatUrl($parameters, $optionalParameters, $method)},
        //                     method: {$e($this->formMethod($m))},
        //                     _method: {$e($m)},
        //                 }),
        //             TYPESCRIPT)->join(PHP_EOL.'    ')}
        //         definition: {
        //             methods: [{$methods->map(fn ($m) => $e($m))->join(', ')}],
        //             uri: {$e($uri)},
        //         },
        //     }

        // //     JAVASCRIPT);
    }

    private function formatUrl(Collection $parameters, Collection $optional, string $function): string
    {
        return <<<TYPESCRIPT
            {$function}.definition.uri{$parameters->map(fn ($p) => $this->formatUrlParameter($p, $optional))->implode('')}.replace(/\/+$/, '')
            TYPESCRIPT;
    }

    private function formatUrlParameter(string $parameter, Collection $optionalParameters): string
    {
        $e = json_encode(...);

        $optional = $optionalParameters->has($parameter);

        $optionalFlag = $optional ? '?.' : '';

        $optionalToStringFlag = $optional ? '?' : '';

        return <<<TYPESCRIPT
        .replace({$e($this->formatParamterPlaceholder($parameter, $optional))}, (args{$optionalFlag}[{$e($parameter)}]{$optionalToStringFlag}.toString(){$this->formatOptionalFallback($parameter, $optional)}))
        TYPESCRIPT;
    }

    private function formatOptionalFallback(string $parameter, bool $optional): string
    {
        $e = json_encode(...);

        return $optional
            ? " ?? ''"
            : '';
    }

    private function formatParamterPlaceholder(string $parameter, bool $optional): string
    {
        return '{'.$parameter.($optional ? '?' : '').'}';
    }

    private function formatRouteParameters(Collection $parameters, Collection $optional): string
    {
        // if ($parameters->isEmpty()) {
        //     return '';
        // }

        // return <<<TYPESCRIPT
        //     args{$this->formatArgsFlag($parameters, $optional)}: { {$parameters->map(fn ($p) => $p.($optional->has((string) $p) ? '?' : '').': string|number')->implode(', ')} }
        //     TYPESCRIPT;
    }

    private function formatArgsFlag(Collection $parameters, Collection $optional): string
    {
        return $optional->has($parameters->all()) ? '?' : '';
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

    private function formMethod(string $method): string
    {
        return in_array($method, ['get', 'head', 'options'], true) ? 'get' : 'post';
    }
}
