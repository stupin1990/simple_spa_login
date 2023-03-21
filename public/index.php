<?php

require_once __DIR__ . '/../vendor/autoload.php';

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = $path == '/' ? 'App' : trim($path, '/');
$path_ar = explode('/', $path);

$real_path = $path_ar[0];
$controller_path = 'Src\\Controllers\\' . ucfirst($path_ar[0]) . 'Controller';
if (!class_exists($controller_path)) {
    $controller_path = 'Src\\Controllers\\AppController';
}

$action = 'index';
if (count($path_ar) > 1) {
    $action = trim($path_ar[1], '/');
}

$app = new $controller_path();
$app->$action($real_path);
