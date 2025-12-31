<?php
require "../config/db.php"; // Adjust path if needed depending on your structure

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

header("Content-Type: application/json");

try {
    $stmt = $pdo->query("SELECT id, name, content FROM testimonials ORDER BY id DESC");
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
