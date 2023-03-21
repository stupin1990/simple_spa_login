<?php

namespace Src\Services;

use Src\Core\Config;

class Email
{

    private static function getHeaders() : string
    {
        return 'From: ' . Config::ADMIN_EMAIL . "\r\n" .
               'Reply-To: ' . Config::ADMIN_EMAIL . "\r\n" .
               'X-Mailer: PHP/' . phpversion();
    }

    private static function sendMail(string $to, string $subject, string $message) : void
    {
        $headers = self::getHeaders();

        mail($to, $subject, $message, $headers);
    }

    public static function sendRegisterMail(string $email, string $code) : void
    {
        $subject =  Config::TITLE . ': User registaration';
        $message = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['SERVER_NAME'] . '/register/confirm?code=' . $code;

        self::sendMail($email, $subject, $message);
    }

    public static function sendChangePasswordMail(string $email, string $code) : void
    {
        $subject =  Config::TITLE . ': New password';
        $message = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['SERVER_NAME'] . '/password/change?code=' . $code;

        self::sendMail($email, $subject, $message);
    }
}