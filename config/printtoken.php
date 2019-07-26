<?php

return [
    "grant_type" => env('PRINT_API_GRANT_TYPE', "password"),
    "client_id" => env('PRINT_API_CLIENT_ID'),
    "client_secret" => env('PRINT_API_CLIENT_SECRET'),
    "url_login" => env('PRINT_API_URL_LOGIN', "https://print.asmatende.asmat.app/oauth/token")
];
