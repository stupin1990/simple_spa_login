<?php

namespace Src\Controllers;

use Src\Core\Controller;
use Src\Models\User;
use Src\Services\Session;


class AppController extends Controller
{

    public function index(string $real_path)
    {
        $this->setCSRFToken();

        $this->data['form'] = $real_path == 'App' ? 'login' : strtolower($real_path);

        $this->render();
    }


    public function login()
    {
        if (!$this->checkCSRFToken()) {
            $this->responseJson([
                'status' => 0,
                'error' => 'Access denied!'
            ]);
        }

        if (!$this->checkAttempts()) {
            $this->responseJson([
                'status' => 0,
                'error' => 'Too many attempts, wait 1 minute!'
            ]);
        }

        if ($this->getAuthUser() !== false) {
            $this->responseJson([
                'status' => 0,
                'error' => 'You have already logged in!'
            ]);
        }

        $_POST = json_decode(file_get_contents('php://input'), true);


        if (empty($_POST['email']) || empty($_POST['password'])) {
            $this->responseJson([
                'status' => 0,
                'error' => 'No email or password!'
            ]);
        }

        if (!$this->auth($_POST['email'], $_POST['password'])) {
            $this->responseJson([
                'status' => 0,
                'error' => 'Invalid user name or password!'
            ]);
        } 

        $user = User::getUserByEmail($_POST['email']);

        $this->responseJson([
            'status' => 1,
            'user' => $user['name']
        ]);
    }

    public function logout()
    {
        Session::start();

        unset($_SESSION['id']);

        $this->responseJson([
            'status' => 1,
        ]);
    }
}
