<?php

namespace App\Http\Controllers;
use App\Models\UserRole;
use Illuminate\Validation\ValidationException;

use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nome' => 'required|string',
                'telefone' => 'required|string',
                'dataNascimento' => 'nullable|date',
                'empresa' => 'required|string',
                'cnpj' => 'required|string',
                'email' => 'required|email|unique:users',
                'senha' => 'required|string|confirmed',
            ]);

            if ($validator->fails()) {
                return response()->json(["error" => $validator->errors()->toJson()], 400);
            }

            DB::beginTransaction();

            $user = User::create(array_merge(
                $validator->validated(),
                ['password' => bcrypt($request->senha)]
            ));

            UserRole::create([
                'user_id' => $user->id,
                'role_id' => $request->role,
            ]);

            DB::commit();

            $credentials = $request->only(['email', 'senha']);

            $token = auth('api')->attempt($credentials);

            return response()->json([
                'message' => 'Usuário cadastrado com sucesso',
                'user' => $user,
                'access_token' => $token
            ], 201);
        } catch (ValidationException $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}