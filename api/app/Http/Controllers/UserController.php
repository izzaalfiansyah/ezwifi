<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;

class UserController extends Controller
{
    public function index()
    {
        $builder = new User();
        $items = $builder->paginate(10);

        return UserResource::collection($items);
    }

    public function show($id)
    {
        $item = User::find($id);

        return new UserResource($item);
    }

    public function store(UserRequest $req)
    {
        $data = $req->validated();

        $item = User::create($data);

        return new UserResource($item);
    }

    public function update(UserRequest $req, $id)
    {
        $data = $req->validated();

        $item = User::find($id);

        if ($item) {
            $item->update($data);
        }

        return new UserResource($item);
    }

    public function destroy($id)
    {
        $item = User::find($id);

        if ($item) {
            $item->delete();
        }

        return new UserResource($item);
    }

    public function login(AuthRequest $req)
    {
        $item = User::where('username', $req->username)->first();

        if ($item) {
            if (Hash::check($req->password, $item->password)) {
                $key = env('JWT_KEY');
                $payload = (new UserResource($item))->toArray($req);
                $token = JWT::encode($payload, $key, 'HS256');

                return Response::json([
                    'data' => $payload,
                    'token' => $token,
                ]);
            } else {
                return Response::json(['message' => 'password salah'], 400);
            }
        } else {
            return Response::json(['message' => 'username tidak ditemukan'], 400);
        }
    }
}
