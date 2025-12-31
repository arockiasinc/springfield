<?php
/********************************
 * SETTINGS
 ********************************/
ini_set('display_errors', 1);
error_reporting(E_ALL);

/********************************
 * CORS HEADERS
 ********************************/
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

/********************************
 * PHPMailer
 ********************************/
require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/********************************
 * ONLY POST
 ********************************/
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "error" => "Invalid request"]);
    exit;
}

/********************************
 * GET DATA
 ********************************/
$input = json_decode(file_get_contents("php://input"), true);

$name    = trim($input['name'] ?? '');
$email   = trim($input['email'] ?? '');
$phone   = trim($input['phone'] ?? '');
$message = trim($input['message'] ?? '');

/********************************
 * BASIC VALIDATION
 ********************************/
if ($name === '' || $email === '' || $phone === '' || $message === '') {
    echo json_encode(["success" => false, "error" => "All fields required"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "error" => "Invalid email"]);
    exit;
}

/********************************
 * 🚫 BLOCK LINKS / HTML / EMOJIS
 ********************************/
$combinedText = $name . ' ' . $message;

/* BLOCK HTML TAGS */
if ($combinedText !== strip_tags($combinedText)) {
    echo json_encode(["success" => false, "error" => "Invalid content"]);
    exit;
}

/* BLOCK URLS */
$urlPattern = '/(http|https|www\.|\.com|\.net|\.org|\.io|\.ru|\.ua)/i';
if (preg_match($urlPattern, $combinedText)) {
    echo json_encode(["success" => false, "error" => "Links are not allowed"]);
    exit;
}

/* BLOCK EMOJIS */
if (preg_match('/[\x{1F300}-\x{1FAFF}]/u', $combinedText)) {
    echo json_encode(["success" => false, "error" => "Emojis are not allowed"]);
    exit;
}

/* BLOCK SCAM KEYWORDS */
$scamWords = [
    'bitcoin','crypto','deposit','payment','loan',
    '$','earning','profit','alert','confirm','Ranking',
    'Increased',
    'Leads',
    'More people',
    'More traffic',
    'Google seo',
    'Promotion',
    'Video',
    'Web',
    'Marketing',
    'Award',
    'Http',
    'Directory',
    'Winning',
    'Article',
    'Competitor',
    'no-cost',
    'trial',
    'AI-powered',
    'Noticed',
    'Estimator',
    'High quality',
    'Link builder',
    'Link building',
    'Article submission',
    'website’s visibility',
    'Google ranking',
    'Seo plan',
    'more people visiting',
    'Audit',
    'Seo',
    'Tinyurl'
];

$combinedTextLower = strtolower($combinedText);

foreach ($scamWords as $word) {
    if (strpos($combinedTextLower, strtolower($word)) !== false) {
        echo json_encode([
            "success" => false,
            "error" => "Spam detected"
        ]);
        exit;
    }
    if (preg_match('/https?:\/\/|www\./i', $combinedText)) {
    echo json_encode([
        "success" => false,
        "error" => "Spam detected"
    ]);
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
     $timestamp = time();
    $subject = 'Enquiry through the website - Springfield Woodworking';

    $mail->isHTML(true);
    $mail->Subject =  $subject . ' - ' . $timestamp;

    $mail->Body = "
        <table cellpadding='10' style='border:1px solid #ccc;width:40%'>
            <tr><td><strong>Name:</strong></td><td>{$name}</td></tr>
            <tr><td><strong>Email:</strong></td><td>{$email}</td></tr>
            <tr><td><strong>Phone:</strong></td><td>{$phone}</td></tr>
            <tr><td><strong>Message:</strong></td><td>{$message}</td></tr>
        </table>";

    $mail->send();

    echo json_encode(["success" => true]);

} catch (Exception $e) {
    echo json_encode(["success" => false, "error" => "Mailer failed"]);
}
