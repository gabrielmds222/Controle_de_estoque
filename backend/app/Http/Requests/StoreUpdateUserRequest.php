<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'min:3',
                'max:255',
            ],
            'phone' => [
                'required',
                'numeric',
                'digits_between:8,15',
            ],
            'birthdate' => [
                'required',
                'date',
                'before_or_equal:today',
            ],
            'enterprise' => [
                'required',
                'max:255',
            ],
            'cnpj' => [
                'required',
                'regex:/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/',
            ],
            'email' => [
                'required',
                'email',
                'max:255',
                'unique:users',
            ],
            'password' => [
                'required',
                'min:6',
                'max:100',
                'confirmed',
            ],
            'password_confirmation' => [
                'required',
                'min:6',
                'max:100',
            ],
        ];
    }
}
