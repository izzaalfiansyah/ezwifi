<?php

namespace App\Http\Resources;

use App\Models\Layanan;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MemberResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'petugas_id' => $this->petugas_id,
            'petugas' => new UserResource(User::find($this->petugas_id)),
            'pelanggan_id' => $this->pelanggan_id,
            'pelanggan' => new UserResource(User::find($this->pelanggan_id)),
            'layanan_id' => $this->layanan_id,
            'layanan' => new LayananResource(Layanan::find($this->layanan_id)),
            'status' => $this->status,
            'keterangan' => $this->keterangan,
        ];
    }
}
