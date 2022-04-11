<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $user = User::create([
            'name' => 'Ivan Mercedes', 
            'email' => 'ivanmercede@gmail.com',
            'password' => bcrypt('123456')
        ]);

        $user->roles()->attach(Role::where('name', 'admin')->first());

        $user = User::create([
            'name' => 'User ', 
            'email' => 'me@me.com',
            'password' => bcrypt('me')
        ]);
        
        $user->roles()->attach(Role::where('name', 'user')->first());

        
    }
}
