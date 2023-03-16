<?php

namespace App\Http\Requests;

class LayananRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'nama' => 'required',
            'deskripsi' => 'required',
            'harga' => 'required|integer',
        ];
    }
}
