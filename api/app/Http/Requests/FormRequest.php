<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest as BaseFormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Response;

class FormRequest extends BaseFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    // @override
    public function failedValidation(Validator $validator)
    {
        $response = Response::json([
            'message' => 'validasi data gagal',
            'errors' => $validator->errors(),
        ], 400);
        throw new HttpResponseException($response);
    }
}
