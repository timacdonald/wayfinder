<?php

namespace TiMacDonald\Solder;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Routing\Route;
use Illuminate\Routing\Router;
use Illuminate\Support\Collection;
use ReflectionClass;

use function Illuminate\Filesystem\join_paths;

class GenerateCommand extends Command
{
    protected $signature = 'solder:generate';

    public function __construct(private Filesystem $files)
    {
        parent::__construct();
    }

    /**
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
        [$function, $reference] = $route->getActionName() === $route->getActionMethod()
            ? ['__invoke', "\\{$route->getActionName()}::__invoke"]
            : [$route->getActionMethod(), "\\{$route->getControllerClass()}::{$route->getActionMethod()}"];

        $methods = collect($route->methods())->map(str(...))->map->lower();
        $parameters = collect($route->parameterNames())->map(str(...));
        $reflectionClass = new ReflectionClass($route->getControllerClass());

        $this->files->append($path, <<<JAVASCRIPT
            /**
             * @see {$reference}
             * @see {$reflectionClass->getFileName()}:{$reflectionClass->getMethod($function)->getStartLine()}
             */
            export const {$function}: {
                name: {$this->formatRouteName($route)},
                href: ({$this->formatRouteParameters($parameters)}) => string,
                {$methods->map(fn ($m) => <<<TYPESCRIPT
                    {$m}: ({$this->formatRouteParameters($parameters)}) => { action: string, method: '{$this->formMethod($m)}', _method: '{$m}' },
                    TYPESCRIPT)->join(PHP_EOL.'    ')}
                definition: {
                    methods: ({$methods->map(fn ($m) => "'{$m}'")->implode(' | ')})[],
                    uri: '/{$route->uri}'
                    action: ['{$route->getControllerClass()}', '{$function}'],
                 },
            } = {
                name: {$this->formatRouteName($route)},
                href: ({$this->formatRouteParameters($parameters)}) => {$this->formatUrl($parameters, $function)},
                {$methods->map(fn ($m) => <<<TYPESCRIPT
                    {$m}: ({$this->formatRouteParameters($parameters)}) => ({
                            action: {$this->formatUrl($parameters, $function)},
                            method: '{$this->formMethod($m)}',
                            _method: '{$m}',
                        }),
                    TYPESCRIPT)->join(PHP_EOL.'    ')}
                definition: {
                    methods: [{$methods->map(fn ($m) => "'{$m}'")->join(', ')}],
                    uri: '/{$route->uri}',
                    action: ['{$route->getControllerClass()}', '{$function}'],
                },
            }


            JAVASCRIPT);
    }

    private function formatRouteName(Route $route): string
    {
        return $route->getName() === null ? 'null' : "'{$route->getName()}'";
    }

    private function formatUrl(Collection $parameters, string $function): string
    {
        if ($parameters->isEmpty()) {
            return <<<TYPESCRIPT
                {$function}.definition.uri
                TYPESCRIPT;
        }

        return <<<TYPESCRIPT
            {$function}.definition.uri.replace(
                    /{$parameters->map->wrap('(', ')')->implode(' | ')}/,
                     (_: string, {$parameters->map(fn (string $name) => "{$name}: \"{$name}\"")->implode(', ')}) => args[{$parameters->implode('??')}]
                )
            TYPESCRIPT;
    }

    private function formatRouteParameters(Collection $parameters): string
    {
        if ($parameters->isEmpty()) {
            return '';
        }

        return <<<TYPESCRIPT
            args: { {$parameters->map(fn ($p) => "{$p}: string")->implode(', ')} }
            TYPESCRIPT;
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
        return join_paths(resource_path(), 'js', 'actions');
    }

    private function formMethod(string $method): string
    {
        return in_array($method, ['get', 'head', 'options'], true) ? 'get' : 'post';
    }
}
