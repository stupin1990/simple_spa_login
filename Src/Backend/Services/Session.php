<?php

namespace Src\Services;

class Session
{
    public static function start()
    {
        if (isset($_SESSION)) {
            return;
        }

        ini_set('session.use_only_cookies', 1);
        session_start([
            'cookie_lifetime' => 0,
        ]);
    }
}