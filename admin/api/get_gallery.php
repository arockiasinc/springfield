<?php
require '../config/db.php'; // adjust path if needed

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *"); // allow frontend access

try {
    $stmt = $pdo->query("SELECT id, type, path, title, upload_on FROM gallery ORDER BY id DESC");
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // prepend full URL to image path (optional)
    $baseURL = (isset($_SERVER['HTTPS']) ? "https://" : "http://") . $_SERVER['HTTP_HOST'] . "/springfield_react/admin/uploads/";

    foreach ($data as &$row) {
        $row["full_url"] = $baseURL . $row["path"];
    }

    echo json_encode($data, JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    echo json_encode([
        "error" => true,
        "message" => "Database Error: " . $e->getMessage()
    ]);
}
