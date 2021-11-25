<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // to make sure to seed only on local environment use tinker when adding user in production
        if (env('APP_ENV') == 'local') {
            DB::table('users')->insert([
                'name' => 'SuperAdmin',
                'email' => 'superadmin@email.com',
                'password' => Hash::make('123qweasd'),
                'remember_token' => Str::random(10),
            ]);
            User::factory(5)->create();
        }
    }
}
