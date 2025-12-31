<?php
// Secure PHP database connection (db.php)
// Database credentials
$host = 'localhost';          // Database host
$dbname = 'winnipage_springfield_admin';    // Database name
$username = 'root';  // winnipage_springfield_admin
$password = '';             // iVrrTeaN=#ScFQ.H

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Optional: log errors instead of showing them
    die("Database connection failed: " . $e->getMessage());
}
?>
