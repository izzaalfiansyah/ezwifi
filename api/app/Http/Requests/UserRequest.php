<?php

namespace App\Http\Requests;

use App\Rules\Base64;

class UserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'nama' => 'required',
            'telepon' => 'required|numeric',
            'email' => 'required|email',
            'alamat' => 'required',
            'username' => 'required',
            'password' => 'required',
            'foto' => ['nullable', new Base64],
        ];
    }
}
