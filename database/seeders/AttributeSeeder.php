<?php

namespace Database\Seeders;

use App\Models\Attribute;
use Illuminate\Database\Seeder;

class AttributeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // for ($i=0; $i < 100; $i++) { 
            Attribute::create([
                'type' => 'text',
                'label' => 'Nombre',
                'name' => 'nombre',
                'type_id' => 1,
                
            ]);
            
            Attribute::create([
                'type' => 'text',
                'label' => 'Nombre nomina',
                'name' => 'nombrenomina',
                'type_id' => 2,
                
            ]);

            Attribute::create([
                'type' => 'text',
                'label' => 'Numero',
                'name' => 'numero',
                'type_id' => 2,
                
            ]);
        // }
        
    }
}
