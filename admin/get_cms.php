<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
include 'config/db.php'; // make sure this has $pdo

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

try {
    $stmt = $pdo->prepare("SELECT * FROM cms WHERE id = ?");
    $stmt->execute([$id]);
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($data) {
       echo json_encode([
    "id" => $data["id"],
    "heading" => $data["heading"],
    "content" => $data["content"],
    "image" => $data["image"],
    "type" => $data["type"]
]);

    } else {
        echo json_encode(["error" => "No content found"]);
    }
} catch (Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>