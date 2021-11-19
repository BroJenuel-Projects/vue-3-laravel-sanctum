<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * This is the path to the build FrontEndApp in `public/app/index.html`
 */
Route::get('/{any}', [PageController::class, 'frontEnd'])->where('any', '^(?!index).*$')->name('FrontEndApp');
