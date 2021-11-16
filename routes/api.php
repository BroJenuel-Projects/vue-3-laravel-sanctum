<?php

use App\Http\Controllers\AuthenticationController;
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

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/me', function (Request $request) {
        return auth()->user();
    });
    //logout/signout user
    Route::post('/logout', [AuthenticationController::class, 'signOut']);
});

//login user
Route::post('/login', [AuthenticationController::class, 'signIn']);
