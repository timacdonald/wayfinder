<?php

use App\Http\Controllers\OptionalController;
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

Route::post('/optional/{parameter?}', [OptionalController::class, 'optional']);
Route::post('/many-optional/{one?}/{two?}/{three?}', [OptionalController::class, 'manyOptional']);

// Route::put();
// Route::resource();
// __invoke
// domain
//
// {parameter_name}
// {parameter-name}
