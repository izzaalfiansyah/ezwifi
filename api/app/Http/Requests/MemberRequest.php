<?php

namespace App\Http\Requests;

class MemberRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'petugas_id' => 'required|integer',
            'pelanggan_id' => 'required|integer',
            'layanan_id' => 'required|integer',
            'status' => 'nullable|in:0,1',
            'keterangan' => 'nullable',
        ];
    }
}
