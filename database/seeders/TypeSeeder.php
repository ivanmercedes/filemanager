<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // for ($i=0; $i < 100; $i++) { 
            Type::create([
                'name' => 'Nominas', 
            ]);

            Type::create([
                'name' => 'Transparencia', 
            ]);
        // }
        
    }
}
