<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::Get('/', function(){
    return response()->json([
        'hello world' => true
    ]);
});
