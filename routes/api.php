<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//login user
Route::post('/login', [AuthenticationController::class, 'signIn']);

// All Protected API Routes should be added inside the `asuth:sanctum`
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/me', function (Request $request) {
        return $request->user();
    });
    //logout/signout user
    Route::post('/logout', [AuthenticationController::class, 'signOut']);
    Route::resource('user', UserController::class);
});


