<?php

namespace App\Http\Resources;

use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransaksiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $bulan = [
            1 => 'Januari',
            'Februari',
            'Maret',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Agustus',
            'September',
            'Oktober',
            'November',
            'Desember',
        ];

        return [
            'id' => $this->id,
            'member_id' => $this->member_id,
            'member' => new MemberResource(Member::find($this->member_id)),
            'bulan' => $this->bulan,
            'bulan_detail' => $bulan[(int) $this->bulan],
            'tahun' => (int) $this->tahun,
            'total' => (int) $this->total,
            'bayar' => (int) $this->bayar,
            'keterangan' => $this->keterangan,
        ];
    }
}
