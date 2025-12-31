<?php
/********************************
 * DO NOT OUTPUT ERRORS
 ********************************/
error_reporting(0);
ini_set('display_errors', 0);

ob_start();               // ✅ buffer output
session_start();

/********************************
 * CORS – REQUIRED
 ********************************/
$allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001"
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
    header("Access-Control-Allow-Credentials: true");
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// ✅ Always exit OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    ob_end_flush();
    exit;
}

/********************************
 * PHPMailer
 ********************************/
require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;

/********************************
 * VALIDATION
 ********************************/
$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$phone   = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $phone === '' || $message === '') {
    echo json_encode(["success" => false, "error" => "All fields are required"]);
    ob_end_flush();
    exit;
}

/********************************
 * 🚫 BLOCK LINKS & EMOJIS
 ********************************/
$text = $name . ' ' . $message;

if (
    preg_match('/http|https|www|<a|\.com|\.org/i', $text) ||
    preg_match('/[\x{1F300}-\x{1FAFF}]/u', $text)
) {
    echo json_encode(["success" => false, "error" => "Invalid content detected"]);
    ob_end_flush();
    exit;
}


/********************************
 * FILE VALIDATION
 ********************************/
$allowedTypes = ['pdf', 'doc', 'docx'];

foreach (['resume', 'cover_letter'] as $fileKey) {
    if (empty($_FILES[$fileKey]['name'])) {
        echo json_encode(["success" => false, "error" => "Missing attachment"]);
        ob_end_flush();
        exit;
    }

    $ext = strtolower(pathinfo($_FILES[$fileKey]['name'], PATHINFO_EXTENSION));
    if (!in_array($ext, $allowedTypes)) {
        echo json_encode(["success" => false, "error" => "Invalid file type"]);
        ob_end_flush();
        exit;
    }
}

/********************************
 * SEND EMAIL
 ********************************/
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'wtsslead@gmail.com';
    $mail->Password = 'xixy vnzh vbrh wbmo';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('wtsslead@gmail.com', 'Springfield Woodworking');
    $mail->addReplyTo($email, $name);
    $mail->addAddress('prasanth223344@gmail.com', 'Springfield Woodworking');

    $mail->isHTML(true);
     $timestamp = time();
     $subject = 'Career Application - Springfield Woodworking';
    $mail->Subject =  $subject . ' - ' . $timestamp;

    $mail->Body = "
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    ";

    $mail->addAttachment($_FILES['resume']['tmp_name'], $_FILES['resume']['name']);
    $mail->addAttachment($_FILES['cover_letter']['tmp_name'], $_FILES['cover_letter']['name']);

    $mail->send();

    echo json_encode(["success" => true]);

} catch (Exception $e) {
    echo json_encode(["success" => false, "error" => "Mail failed"]);
}

ob_end_flush();
