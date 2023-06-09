<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;

class UserController extends Controller
{
    public function index(Request $req)
    {
        $builder = new User();

        if ($role = $req->role) {
            $builder = $builder->where('role', $role);
        }

        if ($search = $req->q) {
            $builder = $builder->where(function ($query) use ($search) {
                return $query->where('nama', 'LIKE', "%$search%")
                    ->orWhere('telepon', 'LIKE', "%$search%")
                    ->orWhere('alamat', 'LIKE', "%$search%");
            });
        }

        $items = $builder->paginate(10);

        return UserResource::collection($items);
    }

    public function show($id)
    {
        $item = User::findOrFail($id);

        return new UserResource($item);
    }

    public function store(UserRequest $req)
    {
        $data = $req->validated();

        if ($req->foto) {
            $data['foto'] = $this->base64Upload($req->foto, 'user', 'png');
        }

        $item = User::create($data);

        return new UserResource($item);
    }

    public function update(UserRequest $req, $id)
    {
        $item = User::findOrFail($id);

        $data = $req->validated();

        if ($req->foto) {
            @unlink(public_path($item->foto));
            $data['foto'] = $this->base64Upload($req->foto, 'user', 'png');
        } else {
            unset($data['foto']);
        }

        $item->update($data);

        return new UserResource($item);
    }

    public function destroy($id)
    {
        $item = User::findOrFail($id);

        @unlink(public_path($item->foto));
        $item->delete();

        return new UserResource($item);
    }

    public function login(AuthRequest $req)
    {
        $item = User::where('username', $req->username)->first();

        if ($item) {
            if (Hash::check($req->password, $item->password)) {
                $key = env('JWT_KEY');
                $payload = [
                    'id' => $item->id,
                    'datetime' => date('YmdHis'),
                ];

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

    public function showByToken(Request $req)
    {
        try {
            $key = env('JWT_KEY');
            $token = explode(' ', $req->header('Authorization'))[1];
            $data = JWT::decode($token, new Key($key, 'HS256'));

            $item = User::findOrFail($data->id);

            return new UserResource($item);
        } catch (\Exception $e) {
            return Response::json(['message' => 'token error'], 400);
        }
    }
}
