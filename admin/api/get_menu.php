<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require '../config/db.php';

$stmt = $pdo->query("SELECT * FROM menus ORDER BY id ASC");
$menus = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($menus);
?>
