<?php

namespace App\Http\Requests;

class TransaksiRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'member_id' => 'required|integer',
            'bulan' => 'required|integer|max:12',
            'tahun' => 'required|integer',
            'total' => 'required|integer',
            'bayar' => 'required|integer',
            'keterangan' => 'nullable',
        ];
    }
}
