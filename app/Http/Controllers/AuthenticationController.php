<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    public function signIn(Request $request)
    {
        $attr = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!Auth::attempt($attr)) {
            return response()->json(['message' => "Either Email or Password is Wrong."], 401);
        }

        return response()->json([
            'access_token' => auth()->user()->createToken('API Token')->plainTextToken,
            'token_type' => 'Bearer',
            'user' => auth()->user()
        ]);
    }

    public function signOut()
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'Tokens Revoked'
        ];
    }
}
