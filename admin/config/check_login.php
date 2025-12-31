<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
session_start();

header('Content-Type: application/json');

$response = ['loggedIn' => false];

if (isset($_SESSION['admin_id'])) {
    $response['loggedIn'] = true;
}

echo json_encode($response);
?>
