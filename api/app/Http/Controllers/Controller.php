<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Nette\Utils\Random;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function base64Upload(string $file, string $folder, string $ext): string
    {
        @mkdir(public_path("/assets"));
        @mkdir(public_path("/assets/$folder"));

        $fileEncode = explode(';base64,', $file)[1];
        $fileName = Random::generate(20);
        $filePath = "/assets/$folder/$fileName.$ext";

        file_put_contents(public_path($filePath), base64_decode($fileEncode));

        return $filePath;
    }
}
