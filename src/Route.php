<?php

namespace TiMacDonald\Wayfinder;

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
        return "/{$this->base->uri}";
    }

    public function scheme(): ?string
    {
        if ($this->base->httpOnly()) {
            return 'http';
        }

        if ($this->base->httpsOnly()) {
            return 'https';
        }

        return null;
    }

    public function domain(): ?string
    {
        return $this->base->getDomain();
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
