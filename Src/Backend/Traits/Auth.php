<?php

namespace Src\Traits;

use Src\Models\User;
use Src\Services\Session;

/**
* Trait that implements authentication methods
 */
trait Auth
{
    /**
     * Start session and return authenticated user
     * @return <bool|array>
     */
    protected function getAuthUser()
    {
        Session::start();

        if (empty($_SESSION['id'])) {
            return false;
        }

        $user = User::getUserById($_SESSION['id']);
        if (empty($user)) {
            return false;
        }

        return $user;
    }

    /**
     * Add authenticated user to session
     * @param string $email
     * @param string $password
     * 
     * @return bool
     */
    protected function auth(string $email, string $password) : bool
    {
        $user = User::getUserByEmail($email);
        if (empty($user)) {
            return false;
        }

        if (!password_verify($password, $user['password'])) {
            return false;
        }

        $_SESSION['id'] = $user['id'];

        return true;
    }

    /**
     * Prevent infinite login attempts
     * @param int $max
     * @param int $wait
     * 
     * @return bool
     */
    protected function checkAttempts(int $max = 5, int $wait = 60) : bool
    {
        if (!isset($_SESSION['attempts'])) {
            $_SESSION['attempts'] = 1;
        }
        elseif ($_SESSION['attempts'] != $max) {
            $_SESSION['attempts'] += 1;
        }
        else {
            if (empty($_SESSION['last_login'])) {
                $_SESSION['last_login'] = time();
            }

            if(time() - $_SESSION['last_login'] < $wait) {
                return false;
            }
            $_SESSION['attempts'] = $_SESSION['last_login'] = 0;
        }

        return true;
    }
}