<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/closure', fn () => 'ok');
Route::get('/posts', [PostController::class, 'index']);
