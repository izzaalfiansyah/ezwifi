<?php

namespace App\Http\Controllers;

use App\Http\Requests\TransaksiRequest;
use App\Http\Resources\TransaksiResource;
use App\Models\Transaksi;
use Illuminate\Http\Request;

class TransaksiController extends Controller
{
    public function index(Request $req)
    {
        $builder = new Transaksi;

        if ($member_id = $req->member_id) {
            $builder = $builder->where('member_id', $member_id);
        }

        if ($bulan = $req->bulan) {
            $builder = $builder->where('bulan', $bulan);
        }

        if ($tahun = $req->tahun) {
            $builder = $builder->where('tahun', $tahun);
        }

        $items = $builder->paginate(10);

        return TransaksiResource::collection($items);
    }

    public function show($id)
    {
        $item = Transaksi::find($id);

        return new TransaksiResource($item);
    }

    public function store(TransaksiRequest $req)
    {
        $data = $req->validated();

        $item = Transaksi::create($data);

        return new TransaksiResource($item);
    }

    public function update(TransaksiRequest $req, $id)
    {
        $data = $req->validated();

        $item = Transaksi::find($id);

        if ($item) {
            $item->update($data);
        }

        return new TransaksiResource($item);
    }

    public function destroy($id)
    {
        $item = Transaksi::find($id);

        if ($item) {
            $item->delete();
        }

        return new TransaksiResource($item);
    }
}
