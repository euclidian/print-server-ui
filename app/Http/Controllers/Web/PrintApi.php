<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class PrintApi extends Controller
{
    public function login(Request $r)
    {
        $r->validate([
            "username" => "required",
            "password" => "required"
        ]);
        $url = config("printtoken.url_login");
        $grant_type = config("printtoken.grant_type");
        $client_id = config("printtoken.client_id");
        $client_secret = config("printtoken.client_secret");
        $username = $r->username;
        $password = $r->password;
        $http = new Client();

        $response = $http->post($url, [
            'form_params' => [
                'grant_type'     => $grant_type,
                'client_id'     => $client_id,
                'client_secret' => $client_secret,
                'username'         => $username,
                'password'         => $password,
                'scope'         => '',
            ],
        ]);
        $data = json_decode($response->getBody()->getContents());

        return response()->json($data);
    }
}
