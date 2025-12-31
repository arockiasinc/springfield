<?php
session_start();
header('Content-Type: application/json');
require 'db.php'; // PDO connection

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $input = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');
    $remember = isset($_POST['remember']);

    if ($input === '' || $password === '') {
        echo json_encode(['status' => 'error', 'message' => 'All fields are required']);
        exit;
    }

    try {

        // Validate login (email or username)
        $stmt = $pdo->prepare("SELECT * FROM admin WHERE email = :input OR username = :input LIMIT 1");
        $stmt->execute(['input' => $input]);
        $admin = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$admin) {
            echo json_encode(['status' => 'error', 'message' => 'User not found']);
            exit;
        }

        // Verify password
        if (password_verify($password, $admin['password'])) {

            // Store Session
            $_SESSION['admin_id'] = $admin['id'];
            $_SESSION['admin_username'] = $admin['username'];

            /* -----------------------------------------
                REMEMBER ME FUNCTIONALITY
            --------------------------------------------*/
            if ($remember) {

                $token = bin2hex(random_bytes(32));
                $expiry = time() + (30 * 24 * 60 * 60); // 30 Days

                // Update DB token
                $stmt = $pdo->prepare("UPDATE admin SET remember_token = :token WHERE id = :id");
                $stmt->execute([
                    ':token' => $token,
                    ':id' => $admin['id']
                ]);

                // Store token in secure cookie
                setcookie(
                    'remember_token',
                    $token,
                    [
                        'expires' => $expiry,
                        'path' => '/',
                        'secure' => true,     // Set false if you're testing locally without HTTPS
                        'httponly' => true,
                        'samesite' => 'Strict'
                    ]
                );
            }

            echo json_encode(['status' => 'success', 'message' => 'Login Successful']);
            exit;
        }

        echo json_encode(['status' => 'error', 'message' => 'Invalid Password']);

    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'Server Error: '.$e->getMessage()]);
    }
}
