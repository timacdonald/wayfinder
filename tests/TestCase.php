<?php

namespace Tests;

use Orchestra\Testbench\Concerns\WithWorkbench;
use Orchestra\Testbench\TestCase as BaseTestCase;
use TiMacDonald\Solder\SolderServiceProvider;

class TestCase extends BaseTestCase
{
    use WithWorkbench;

    protected function setUp(): void
    {
        parent::setUp();

        $this->app->setBasePath(__DIR__.'/../workbench');
    }

    protected function getPackageProviders($app)
    {
        return [
            SolderServiceProvider::class,
        ];
    }
}
