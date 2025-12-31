<?php
ob_start();
session_start();
require 'config/db.php';
include "container/header.php";

$uploadDir = "uploads/doors/";

// CSRF Token
if (!isset($_SESSION["csrf_token"])) {
    $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
}
$csrf = $_SESSION["csrf_token"];
$message = "";

/* ------------ ADD DOOR IMAGE ------------ */
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])) {

    $title = trim($_POST["title"]);
    $description = trim($_POST["description"]);
    $position = intval($_POST["position"]);

    if ($title == "" || $description == "") {
        $message = "All fields are required!";
    } elseif (!empty($_FILES["image"]["name"])) {

        $fileName = time() . "_" . basename($_FILES["image"]["name"]);
        $targetPath = $uploadDir . $fileName;

        if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetPath)) {

            $stmt = $pdo->prepare("INSERT INTO doors (title, image_path, description, position) VALUES (?,?,?,?)");
            $stmt->execute([$title, $targetPath, $description, $position]);

            $_SESSION["flash"] = "Door Image Saved!";
            header("Location: cabinet-doors-page.php");
            exit;

        } else {
            $message = "Upload Failed!";
        }
    } else {
        $message = "Please upload an image!";
    }
}

/* ------------ DELETE IMAGE ------------ */
if (isset($_GET["delete"], $_GET["token"])) {

    if (hash_equals($_SESSION["csrf_token"], $_GET["token"])) {

        $id = intval($_GET["delete"]);

        $stmt = $pdo->prepare("SELECT image_path FROM doors WHERE id=? LIMIT 1");
        $stmt->execute([$id]);
        $oldFile = $stmt->fetchColumn();

        $stmt = $pdo->prepare("DELETE FROM doors WHERE id=? LIMIT 1");
        $stmt->execute([$id]);

        if ($oldFile && file_exists($oldFile)) {
            unlink($oldFile);
        }

        $_SESSION["flash"] = "Image Deleted!";
        header("Location: cabinet-doors-page.php");
        exit;
    }
}

/* ------------ FETCH ALL ------------ */
$stmt = $pdo->query("SELECT * FROM doors ORDER BY position ASC");
$doors = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!-- PAGE LAYOUT -->
<div class="main-panel">
<div class="content-wrapper">

    <div class="page-header">
        <h3 class="page-title">
            <span class="page-title-icon primary-bg text-white me-2">
                <i class="bi bi-door-closed-fill"></i>
            </span> Doors Management
        </h3>
    </div>

    <?php if ($message): ?>
        <div class="alert alert-warning"><?= $message ?></div>
    <?php endif; ?>

    <?php if (!empty($_SESSION["flash"])): ?>
        <div class="alert alert-success"><?= $_SESSION["flash"] ?></div>
        <?php unset($_SESSION["flash"]); ?>
    <?php endif; ?>


    <!-- FORM -->
    <div class="card mb-4">
        <div class="card-body">

            <form method="POST" enctype="multipart/form-data">
                <input type="hidden" name="csrf_token" value="<?= $csrf ?>">

                <div class="form-group">
                    <label>Door Title</label>
                    <input type="text" name="title" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Description (Example: Maple - Willow)</label>
                    <input type="text" name="description" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Sort Order</label>
                    <input type="number" name="position" class="form-control" value="0">
                </div>

                <div class="form-group">
                    <label>Upload Image</label>
                    <input type="file" name="image" class="file-upload-default" required>

                    <div class="input-group">
                        <input type="text" class="form-control file-upload-info" disabled placeholder="Choose file">
                        <span class="input-group-append">
                            <button class="file-upload-browse btn primary-bg" type="button">Upload</button>
                        </span>
                    </div>
                </div>

                <button type="submit" name="submit" class="btn primary-bg">Save</button>
            </form>

        </div>
    </div>


    <!-- DISPLAY SAVED DOORS -->
    <div class="card">
        <div class="card-body">

            <h4 class="card-title">Uploaded Doors</h4>

            <div class="row">

            <?php foreach ($doors as $img): ?>
                <div class="col-md-2 mb-4">
                    <div class="position-relative">
                        <img src="<?= $img['image_path'] ?>" class="img-fluid rounded w-100">
                        <p class="mt-2"><strong><?= htmlspecialchars($img['title']) ?></strong><br><?= htmlspecialchars($img['description']) ?></p>

                        <a onclick="return confirm('Delete this image?')"
                           href="cabinet-doors-page.php?delete=<?= $img['id'] ?>&token=<?= $csrf ?>"
                           class="btn btn-sm btn-danger position-absolute" style="top:10px;right:10px;">
                           Delete
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>

            <?php if (empty($doors)): ?>
                <p class="text-muted">No door images uploaded yet.</p>
            <?php endif; ?>

            </div>
        </div>
    </div>

</div>

<?php include "container/footer.php"; ?>
<?php ob_end_flush(); ?>
