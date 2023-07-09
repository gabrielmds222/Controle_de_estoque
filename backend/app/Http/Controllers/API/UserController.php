<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\StoreUpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index() {
        $users = User::paginate();

        return UserResource::collection($users);
    }

    public function store(StoreUpdateUserRequest $request){
        $data = $request->validated();
        $data['password'] = bcrypt($request->password);
        // dd($data);

        $user = User::create($data);

        return new UserResource($user);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return new UserResource($user);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }
}
