<?php

namespace TiMacDonald\Solder;

class Parameter
{
    public string $placeholder;

    public function __construct(public string $name, public bool $optional, public ?string $key)
    {
        $this->placeholder = $optional ? "{{$name}?}" : "{{$name}}";
    }
}
