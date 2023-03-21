<?php

namespace Src\Controllers;

use Src\Core\Controller;
use Src\Models\User;
use Src\Services\Email;


class PasswordController extends Controller
{

    /**
     * Save new user
     * @return [type]
     */
    public function send()
    {
        if (!$this->checkCSRFToken()) {
            $this->responseJson([
                'status' => 0,
                'error' => 'Access denied!'
            ]);
        }

        $_POST = json_decode(file_get_contents('php://input'), true);

        if (!isset($_POST['email'])) {
            $this->responseJson([
                'status' => 0,
                'error' => 'Please enter email!'
            ]);
        }

        $user = User::getUserByEmail($_POST['email']);
        if (empty($user)) {
            $this->responseJson([
                'status' => 0,
                'error' => 'User with this email doesn\'t exist!'
            ]);
        }

        $code = sha1($user['email'] . $user['password']);
        Email::sendChangePasswordMail($user['email'], $code);

        $this->responseJson([
            'status' => 1
        ]);
    }

    /**
     * Change password
     * @return [type]
     */
    public function change()
    {
        $this->setCSRFToken();

        $_POST = json_decode(file_get_contents('php://input'), true);
        if (!empty($_POST)) {
            $this->updatePassword($_POST);
        }

        $code = $_GET['code'] ?? '';

        $user = User::getHashedUser($code);

        if (!empty($user)) {
            $this->data['code'] = $code;
            $this->data['form'] = 'reset';
        }

        $this->render();
    }

    protected function updatePassword(array $data)
    {
        if (!$this->checkCSRFToken()) {
            $this->responseJson([
                'status' => 0,
                'error' => 'Access denied!'
            ]);
        }

        if (empty($data['password']) || empty($data['password2']) || empty($data['code'])) {
            $this->responseJson([
                'status' => 0,
                'error' => 'Invalid data format!'
            ]);
        }

        if (strlen($_POST['password']) < 6) {
            $this->responseJson([
                'status' => 0,
                'error' => 'Passwords must be at least 6 characters!'
            ]);
        }

        if ($data['password2'] !== $data['password']) {
            $this->responseJson([
                'status' => 0,
                'error' => 'Passwords must match!'
            ]);
        }

        $user = User::getHashedUser($data['code']);
        if (empty($user)) {
            $this->responseJson([
                'status' => 0,
                'error' => 'User not found!'
            ]);
        }

        $values = ['password' => User::getHashedPassword($data['password'])];
        if (!User::update($user['id'], $values)) {
            $this->responseJson([
                'status' => 0,
                'error' => 'Failed to save data!'
            ]);
        }

        $this->responseJson([
            'status' => 1
        ]);
    }

}
