<?php
require '../config/db.php';

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");  

$stmt = $pdo->query("SELECT * FROM doors ORDER BY position ASC");
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
