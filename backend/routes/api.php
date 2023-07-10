<?php

use App\Http\Controllers\API\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;

Route::get('/users', [UserController::class, 'index']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/users', [UserController::class, 'store']);

Route::get('/product', [ProductController::class, 'index']);
Route::post('/product', [ProductController::class, 'store']);
Route::delete('/product/{id}', [ProductController::class, 'destroy']);
Route::put('product/{id}', [ProductController::class, 'update']);

Route::get('/', function(){
    return response()->json([
        'success' => true
    ]);
});