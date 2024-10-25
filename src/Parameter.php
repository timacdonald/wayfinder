<?php

namespace TiMacDonald\Solder;

class Parameter
{
    public string $placeholder;

    public function __construct(public string $name, public bool $optional)
    {
        $this->placeholder = $optional ? "{{$name}?}" : "{{$name}}";
    }
}

