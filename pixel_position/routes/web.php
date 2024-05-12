<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\JobListingController;
use Illuminate\Support\Facades\Route;

Route::get('/', [JobListingController::class, "index"]);

Route::get("/register", [AuthController::class, "registerCreate"]);
Route::post("/register", [AuthController::class, "registerStore"]);

Route::get("/login", [AuthController::class, "loginCreate"])->name("login");
Route::post("/login", [AuthController::class, "loginStore"]);
Route::post("/logout", [AuthController::class, "logout"]);
