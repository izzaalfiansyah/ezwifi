<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $roleDetails = [1 => 'admin', 2 => 'petugas', 3 => 'pelanggan',];

        return [
            'id' => $this->id,
            'nama' => $this->nama,
            'telepon' => $this->telepon,
            'email' => $this->email,
            'alamat' => $this->alamat,
            'lokasi' => $this->lokasi,
            'role' => $this->role,
            'role_detail' => $roleDetails[(int) $this->role],
            'foto' => asset($this->foto ?? 'assets/user/default.png'),
            'username' => $this->username,
        ];
    }
}
