<?php
require "../config/db.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

try {
    $stmt = $pdo->query("SELECT id, title, image FROM client_slider ORDER BY id DESC");
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "status" => "success",
        "data" => $data
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
