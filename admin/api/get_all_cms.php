<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include '../config/db.php';

// Fetch all CMS records
$stmt = $pdo->query("SELECT * FROM cms");
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Convert into object with CMS ID as key
$data = [];
foreach ($result as $row) {
    $data[$row['id']] = $row;
}

echo json_encode($data);
?>
