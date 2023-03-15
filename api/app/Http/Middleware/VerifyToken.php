<?php

namespace App\Http\Middleware;

use Closure;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response as FacadesResponse;
use Symfony\Component\HttpFoundation\Response;

class VerifyToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        try {
            $key = env('JWT_KEY');
            $token = explode(' ', $request->header('Authorization'))[1];
            JWT::decode($token, new Key($key, 'HS256'));

            return $next($request);
        } catch (\Exception $e) {
            return FacadesResponse::json(['message' => 'Not authorized.']);
        }
    }
}
