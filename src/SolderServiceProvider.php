<?php

namespace TiMacDonald\Solder;

use Illuminate\Support\ServiceProvider;

class SolderServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                GenerateCommand::class,
            ]);
        }
    }
}
