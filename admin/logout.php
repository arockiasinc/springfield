<?php
session_start();
require 'config/db.php';

if (isset($_SESSION['admin_id'])) {
    $id = $_SESSION['admin_id'];

    // Clear DB token
    $stmt = $pdo->prepare("UPDATE admin SET remember_token = NULL WHERE id = ?");
    $stmt->execute([$id]);
}

// Destroy session
session_unset();
session_destroy();

// Clear cookie
setcookie('remember_token', '', time() - 3600, '/', '', true, true);

header("Location: login.php");
exit();
?>
