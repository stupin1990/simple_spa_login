<?php

namespace Src\Traits;

use Src\Services\Session;

trait Token
{

    public function setCSRFToken() : void
    {
        Session::start();

        if (!isset($_SESSION['X-CSRF-TOKEN'])) {
            $_SESSION['X-CSRF-TOKEN'] = md5(uniqid());
        }
    }

    public function checkCSRFToken() : bool
    {
        Session::start();

        if (!isset($_SESSION['X-CSRF-TOKEN'])) {
            return false;
        }

        $headers = getallheaders();
        if (!isset($headers['X-CSRF-TOKEN'])) {
            return false;
        }

        if ($headers['X-CSRF-TOKEN'] != $_SESSION['X-CSRF-TOKEN']) {
            return false;
        }

        return true;
    }

}