<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $table = 'member';

    protected $fillable = [
        'petugas_id',
        'pelanggan_id',
        'layanan_id',
        'status',
        'keterangan',
    ];
}
