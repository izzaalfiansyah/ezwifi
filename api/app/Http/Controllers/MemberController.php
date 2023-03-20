<?php

namespace App\Http\Controllers;

use App\Http\Requests\MemberRequest;
use App\Http\Resources\MemberResource;
use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function index(Request $req)
    {
        $builder = new Member;

        if ($petugas_id = $req->petugas_id) {
            $builder = $builder->where('petugas_id', $petugas_id);
        }

        if ($pelanggan_id = $req->pelanggan_id) {
            $builder = $builder->where('pelanggan_id', $pelanggan_id);
        }

        if ($layanan_id = $req->layanan_id) {
            $builder = $builder->where('layanan_id', $layanan_id);
        }

        if ($status = $req->status) {
            $builder = $builder->where('status', $status);
        }

        $items = $builder->paginate(10);

        return MemberResource::collection($items);
    }

    public function show($id)
    {
        $item = Member::find($id);

        return new MemberResource($item);
    }

    public function store(MemberRequest $req)
    {
        $data = $req->validated();

        $item = Member::create($data);

        return new MemberResource($item);
    }

    public function update(MemberRequest $req, $id)
    {
        $data = $req->validated();

        $item = Member::find($id);

        if ($item) {
            $item->update($data);
        }

        return new MemberResource($item);
    }

    public function destroy($id)
    {
        $item = Member::find($id);

        if ($item) {
            $item->delete();
        }

        return new MemberResource($item);
    }
}
