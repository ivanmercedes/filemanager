<?php

namespace Database\Seeders;

use App\Models\File;
use Illuminate\Database\Seeder;

class FileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        for ($i=0; $i < 100; $i++) { 
            File::create([
                'name' => 'archivo '.$i, 
                'status' => 'activo', 
                'description' => 'lorem Ipsum dolor sit amet, consectetur adipis occurence velit.',
                'user_id' => 1,
                'medias' => [1,2,3,4],
                'order' => $i
            ]);
        }
        
    }
}
