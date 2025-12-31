<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
include 'config/db.php';

$id = $_POST['id'];
$heading = $_POST['heading'];
$content = $_POST['content'];

// STEP 1: Get existing image name
$stmt = $pdo->prepare("SELECT image FROM cms WHERE id=?");
$stmt->execute([$id]);
$old = $stmt->fetch(PDO::FETCH_ASSOC);
$oldImage = $old['image'];

$newFileName = $oldImage;

// STEP 2: If new file uploaded, REPLACE old
if (!empty($_FILES['image']['name'])) {
    
    $ext = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);

    // Create fixed filename based on CMS ID
    $newFileName = "cms_" . $id . "." . $ext;

    $uploadPath = "../uploads/" . $newFileName;

    // Delete old file if exists
    if ($oldImage && file_exists("../uploads/" . $oldImage)) {
        unlink("../uploads/" . $oldImage);
    }

    // Move new file
    move_uploaded_file($_FILES['image']['tmp_name'], $uploadPath);
}

// STEP 3: Update DB
$stmt = $pdo->prepare("UPDATE cms SET heading=?, content=?, image=?, updated_at=NOW() WHERE id=?");
$stmt->execute([$heading, $content, $newFileName, $id]);

echo json_encode([
    "success" => true,
    "image" => $newFileName
]);
?>
