<?php

namespace Src\Controllers;

use Src\Core\Controller;
use Src\Models\User;
use Src\Services\Email;


class RegisterController extends Controller
{

    /**
     * Save new user
     * @return [type]
     */
    public function index()
    {
        if (!$this->checkCSRFToken()) {
            $this->responseJson([
                'status' => 0,
                'error' => 'Access denied!'
            ]);
        }

        $_POST = json_decode(file_get_contents('php://input'), true);

        $error = $this->addUser($_POST);
        if ($error) {
            $this->responseJson([
                'status' => 0,
                'error' => $error
            ]);
        }

        $this->responseJson([
            'status' => 1
        ]);
    }

    /**
     * Confirm email
     * @return [type]
     */
    public function confirm()
    {
        $this->setCSRFToken();

        $code = $_GET['code'];

        $user = User::getHashedUser($code);

        $verified = false;
        if (!empty($user) && !$user['verified']) {
            User::update($user['id'], ['verified' => 1]);
            $verified = true;
        }

        $this->data['verified'] = $verified;

        $this->render();
    }

    /**
     * Add new user
     * @param array $data
     * 
     * @return string - error message or emty string if ok
     */
    private function addUser(array $data) : string
    {
        if (strlen($data['name']) > 100) {
            return 'Name is too long, max: 100.';
        }

        if (strlen($data['email']) > 100) {
            return 'Email is too long, max: 100.';
        }

        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            return 'Email address is invalid.';
        }

        if (strlen($data['password']) < 6) {
            return 'Passwords must be at least 6 characters!';
        }

        if ($data['password2'] !== $data['password']) {
            return 'Passwords must match!';
        }

        $user = User::getUserByEmail($data['email']);
        if (!empty($user)) {
            return 'User with same email already exists!';
        }

        $fields = ['name', 'email', 'password'];
        $params = [];
        foreach ($fields as $field) {
            if ($field == 'password') {
                $params[':' . $field] = User::getHashedPassword($data[$field]);
                continue;
            }
            $params[':' . $field] = htmlentities($data[$field]);
        }

        if (!User::save($fields, $params)) {
            $this->responseJson([
                'status' => 0,
                'error' => 'Failed to save data!'
            ]);
            return 'Failed to save data!';
        }

        $user = User::getUserByEmail($data['email']);
        if (!empty($user)) {
            $code = sha1($user['email'] . $user['password']);
            Email::sendRegisterMail($user['email'], $code);
        }

        return '';
    }

}
