<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/closure', fn () => 'ok');

Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/create', [PostController::class, 'create']);
Route::post('/posts', [PostController::class, 'store']);
Route::get('/posts/{post}', [PostController::class, 'show']);
Route::get('/posts/{post}/edit', [PostController::class, 'edit']);
Route::patch('/posts/{post}', [PostController::class, 'update']);
Route::delete('/posts/{post}', [PostController::class, 'destroy']);

Route::post('/optional/{parameter?}', [Controller::class, 'optional']);

// Route::put();
// Route::resource();
// __invoke
