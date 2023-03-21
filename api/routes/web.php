<?php

use App\Http\Controllers;
use App\Http\Middleware\VerifyToken;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/login', [Controllers\UserController::class, 'login']);
Route::post('/register', [Controllers\UserController::class, 'store']);

Route::middleware(VerifyToken::class)->group(function () {
    Route::resource('/user', Controllers\UserController::class);
    Route::resource('/layanan', Controllers\LayananController::class);
    Route::resource('/member', Controllers\MemberController::class);
    Route::resource('/transaksi', Controllers\TransaksiController::class);
});
