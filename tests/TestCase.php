<?php

namespace Tests;

use Orchestra\Testbench\Concerns\WithWorkbench;
use Orchestra\Testbench\TestCase as BaseTestCase;
use TiMacDonald\Solder\SolderServiceProvider;

class TestCase extends BaseTestCase
{
    use WithWorkbench;

    protected function getPackageProviders($app)
    {
        return [
            SolderServiceProvider::class,
        ];
    }
}
