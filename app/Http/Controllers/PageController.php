<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function frontEnd()
    {
        $path = public_path('app/index.html');
        abort_unless(file_exists($path), 400, 'Page is not Found!');
        return file_get_contents($path);
    }
}
