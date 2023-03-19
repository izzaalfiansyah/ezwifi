<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('member', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('petugas_id')->unsigned();
            $table->bigInteger('pelanggan_id')->unsigned();
            $table->bigInteger('layanan_id')->unsigned();
            $table->enum('status', [0, 1])->comment('0: nonaktif, 1: aktif')->default(0);
            $table->text('keterangan')->nullable();

            $table->foreign('petugas_id')->on('user')->references('id');
            $table->foreign('pelanggan_id')->on('user')->references('id');
            $table->foreign('layanan_id')->on('layanan')->references('id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('member');
    }
};
