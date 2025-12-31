<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

/********************************
 * CORS – RESTRICTED
 ********************************/
$allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost/springfield_react/'
   
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}

header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

/********************************
 * CSRF TOKEN
 ********************************/
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

echo json_encode([
    "token" => $_SESSION['csrf_token']
]);
