<?php
require '../config/db.php';

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");  

try {
    $stmt = $pdo->query("SELECT id, question, answer FROM faqs ORDER BY id ASC");
    $faqs = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($faqs);

} catch (PDOException $e) {
    echo json_encode(["error" => "Unable to fetch FAQ"]);
}
