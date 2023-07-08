<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\StoreUpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
}
