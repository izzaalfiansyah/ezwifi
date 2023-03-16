<?php

namespace App\Http\Controllers;

use App\Http\Requests\LayananRequest;
use App\Http\Resources\LayananResource;
use App\Models\Layanan;
use Illuminate\Http\Request;

class LayananController extends Controller
{
    public function index()
    {
        $builder = new Layanan;

        $items = $builder->paginate(10);

        return LayananResource::collection($items);
    }

    public function store(LayananRequest $req)
    {
        $data = $req->validated();

        $item = Layanan::create($data);

        return new LayananResource($item);
    }

    public function update(LayananRequest $req, $id)
    {
        $item = Layanan::find($id);
        $data = $req->validated();

        if ($item) {
            $item->update($data);
        }

        return new LayananResource($item);
    }

    public function destroy($id)
    {
        $item = Layanan::find($id);

        if ($item) {
            $item->delete();
        }

        return new LayananResource($item);
    }
}
