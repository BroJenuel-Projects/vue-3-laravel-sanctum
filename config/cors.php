<?php
$isDevelopment = env('APP_ENV') == 'local';
$developmentAllowedOrigins = [ 'http://localhost:8000', 'http://localhost:3000', 'http://127.0.0.1:8000' ];
$prodAllowedOrigins = [env('APP_URL')];

return [
    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => [
        'api/*',
        '/login',
        '/logout',
        'sanctum/csrf-cookie'
    ],

    'allowed_methods' => ['*'],

    'allowed_origins' => $isDevelopment ? array_merge($developmentAllowedOrigins, $prodAllowedOrigins) : $prodAllowedOrigins,

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,

];
