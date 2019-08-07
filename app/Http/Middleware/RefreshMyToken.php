<?php

namespace App\Http\Middleware;

use Closure;
use GuzzleHttp\Client;

class RefreshMyToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (session()->exists("user_access_token")) {
            $url = config("printtoken.url_login");
            $client_id = config("printtoken.client_id");
            $client_secret = config("printtoken.client_secret");
            $http = new Client();
            $response = $http->post($url, [
                'form_params' => [
                    'grant_type'     => "refresh_token",
                    'client_id'     => $client_id,
                    'client_secret' => $client_secret,
                    'refresh_token' => session("user_refresh_token"),
                    'scope'         => '',
                ],
            ]);
            $data = json_decode($response->getBody()->getContents());
            session(["user_access_token" => $data->access_token]);
            session(["user_refresh_token" => $data->refresh_token]);
        }
        return $next($request);
    }
}
