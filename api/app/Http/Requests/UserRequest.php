<?php

namespace App\Http\Requests;

use App\Rules\Base64;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class UserRequest extends FormRequest
{
    public function rules(): array
    {
        $id = request()->segment(2);

        return [
            'nama' => 'required',
            'telepon' => 'required|numeric',
            'email' => ['required', 'email', Rule::unique('user')->ignore($id)],
            'alamat' => 'required',
            'lokasi' => 'nullable',
            'role' => 'required|in:1,2,3',
            'username' => ['required', Rule::unique('user')->ignore($id)],
            'password' => ['required', Password::default()],
            'foto' => ['nullable', new Base64],
        ];
    }
}
