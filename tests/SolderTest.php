<?php

namespace Tests;

class SolderTest extends TestCase
{
    public function test_it_works()
    {
        $this->artisan('solder:generate');

        $this->assertTrue(true);
    }
}
