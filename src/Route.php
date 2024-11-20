<?php

namespace TiMacdonald\Wayfinder;

use Illuminate\Routing\Route as BaseRoute;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use ReflectionClass;

class Route
{
    public function __construct(private BaseRoute $base)
    {
        //
    }

    public function hasController(): bool
    {
        return $this->base->getControllerClass() !== null;
    }

    public function dotNamespace(): string
    {
        return str_replace('\\', '.', Str::chopStart($this->controller(), '\\'));
    }

    public function hasInvokableController(): bool
    {
        return $this->base->getActionName() === $this->base->getActionMethod();
    }

    public function method(): string
    {
        return $this->hasInvokableController()
            ? '__invoke'
            : $this->base->getActionMethod();
    }

    public function controller(): string
    {
        return $this->hasInvokableController()
            ? Str::start($this->base->getActionName(), '\\')
            : Str::start($this->base->getControllerClass(), '\\');
    }

    public function parameters(): Collection
    {
        dump($this->base);
        $optionalParameters = collect($this->base->toSymfonyRoute()->getDefaults());

        return collect($this->base->parameterNames())->map(fn ($name) => new Parameter(
            $name, $optionalParameters->has($name), $this->base->bindingFieldFor($name),
        ));
    }

    public function verbs(): Collection
    {
        return collect($this->base->methods())->mapInto(Verb::class);
    }

    public function uri(): string
    {
        if ($domain = $this->base->getDomain()) {
            return "//{$domain}/{$this->base->uri}";
        }

        return "/{$this->base->uri}";
    }

    public function controllerPath(): string
    {
        // return Str::chop(new ReflectionClass($this->controller()))->getFileName();
        return (new ReflectionClass($this->controller()))->getFileName();
    }

    public function controllerMethodLineNumber(): int
    {
        return (new ReflectionClass($this->controller()))
            ->getMethod($this->method())
            ->getStartLine();
    }
}
