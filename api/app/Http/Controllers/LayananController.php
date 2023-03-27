<?php

namespace App\Http\Controllers;

use App\Http\Requests\LayananRequest;
use App\Http\Resources\LayananResource;
use App\Models\Layanan;
use Illuminate\Http\Request;

class LayananController extends Controller
{
    public function index(Request $req)
    {
        $builder = new Layanan;

        if ($search = $req->search) {
            $builder = $builder->where(function ($query) use ($search) {
                return $query->where('nama', 'like', "%$search%")
                    ->orWhere('deskripsi', 'like', "%$search")
                    ->orWhere('harga', 'like', "%$search%");
            });
        }

        $items = $builder->paginate(10);

        return LayananResource::collection($items);
    }

    public function show($id)
    {
        $item = Layanan::findOrFail($id);

        return new LayananResource($item);
    }

    public function store(LayananRequest $req)
    {
        $data = $req->validated();

        $item = Layanan::create($data);

        return new LayananResource($item);
    }

    public function update(LayananRequest $req, $id)
    {
        $item = Layanan::findOrFail($id);

        $data = $req->validated();

        $item->update($data);

        return new LayananResource($item);
    }

    public function destroy($id)
    {
        $item = Layanan::findOrFail($id);

        $item->delete();

        return new LayananResource($item);
    }
}
