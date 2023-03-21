<?php

namespace Src\Core;

use Src\Traits\Auth;
use Src\Traits\Token;
use Src\Models\User;

abstract class Controller
{
    use Auth, Token;

    protected array $data = [];

    /**
     * Render template
     * @param string $template_name
     * @param array $data
     * 
     * @return void
     */
    public function render() : void
    {
        $content = file_get_contents(__DIR__ . '/../../Frontend/index.html');

        $this->data['csrf'] = $_SESSION['X-CSRF-TOKEN'] ?? '';

        if (!isset($this->data['title'])) {
            $this->data['title'] = Config::TITLE;
        }

        $user = $this->getAuthUser();
        if ($user !== false) {
            $this->data['user'] = $user['name'];
        }

        $content = str_replace('{{title}}', $this->data['title'], $content);

        $data = addslashes(json_encode($this->data));

        $content = str_replace('{{data}}', $data, $content);

        echo $content;
    }

    /**
     * Send responce as Json
     * @param array $data
     * 
     * @return void
     */
    public function responseJson(array $data) : void
    {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);
        die;
    }
}
