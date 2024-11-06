<?php

use App\Http\Controllers\KeyController;
use App\Http\Controllers\OptionalController;
use App\Http\Controllers\ParameterNameController;
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

Route::get('/keys/{key}', [KeyController::class, 'show']);
Route::get('/keys/{key:uuid}/edit', [KeyController::class, 'edit']);

Route::get('/parameter-names/{camelCase}/camel', [ParameterNameController::class, 'camel']);
Route::get('/parameter-names/{StudlyCase}/studly', [ParameterNameController::class, 'studly']);
Route::get('/parameter-names/{snake_case}/snake', [ParameterNameController::class, 'snake']);
Route::get('/parameter-names/{SCREAMING_SNAKE_CASE}/screaming-snake', [ParameterNameController::class, 'screamingSnake']);

// Route::put();
// Route::resource();
// __invoke
// domain
