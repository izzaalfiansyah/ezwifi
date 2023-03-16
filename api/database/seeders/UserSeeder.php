<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::create([
            'nama' => 'Muhammad Izza Alfiansyah',
            'telepon' => '081231921351',
            'email' => 'superadmin@admin.com',
            'alamat' => 'Gumukmas, Jember',
            'role' => '1',
            'username' => 'superadmin',
            'password' => Hash::make('superadmin'),
        ]);
    }
}
