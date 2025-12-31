<?php
ob_start();
session_start();
require 'config/db.php';
include "container/header.php";

$uploadDir = "uploads/";

// CSRF Token
if (!isset($_SESSION["csrf_token"])) {
    $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
}
$csrf = $_SESSION["csrf_token"];

$message = "";

/* ------------------- ADD IMAGE ------------------- */
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])) {

    $title = trim($_POST["title"]);
    $type = trim($_POST["type"]);

    if ($title == "" || $type == "") {
        $message = "All fields are required!";
    } elseif (!empty($_FILES["image"]["name"])) {

        $fileName = time() . "_" . basename($_FILES["image"]["name"]);
        $targetPath = $uploadDir . $fileName;

        if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetPath)) {

            $stmt = $pdo->prepare("INSERT INTO gallery (title, type, path) VALUES (?,?,?)");
            $stmt->execute([$title, $type, $fileName]);

            $_SESSION["flash"] = "Image Saved Successfully!";
            header("Location: gallery.php");
            exit;

        } else {
            $message = "Upload failed!";
        }
    } else {
        $message = "Please choose an image!";
    }
}

/* ------------------- DELETE IMAGE ------------------- */
if (isset($_GET["delete"], $_GET["token"])) {

    if (hash_equals($_SESSION["csrf_token"], $_GET["token"])) {

        $id = intval($_GET["delete"]);

        // fetch file
        $stmt = $pdo->prepare("SELECT path FROM gallery WHERE id=? LIMIT 1");
        $stmt->execute([$id]);
        $oldFile = $stmt->fetchColumn();

        // delete row
        $stmt = $pdo->prepare("DELETE FROM gallery WHERE id=? LIMIT 1");
        $stmt->execute([$id]);

        if ($oldFile && file_exists($uploadDir . $oldFile)) {
            unlink($uploadDir . $oldFile);
        }

        $_SESSION["flash"] = "Image Deleted!";
        header("Location: gallery.php");
        exit;
    }
}

/* ------------------- FETCH ALL ------------------- */
$stmt = $pdo->query("SELECT * FROM gallery ORDER BY id DESC");
$gallery = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Defined categories
$categories = ["kitchen","bathroom","furniture","showroom"];

$byType = [];
foreach ($categories as $cat) $byType[$cat] = [];

foreach ($gallery as $g) {
    $byType[strtolower($g["type"])][] = $g;
}
?>

<!-- START PAGE -->
<div class="main-panel">
<div class="content-wrapper">

    <div class="page-header">
        <h3 class="page-title">
            <span class="page-title-icon primary-bg text-white me-2">
               <i class="bi bi-collection-fill"></i>
            </span> Gallery Manager
        </h3>
    </div>

    <?php if ($message): ?>
        <div class="alert alert-warning"><?= $message ?></div>
    <?php endif; ?>

    <?php if (!empty($_SESSION["flash"])): ?>
        <div class="alert alert-success"><?= $_SESSION["flash"] ?></div>
        <?php unset($_SESSION["flash"]); ?>
    <?php endif; ?>

    <!-- Upload Form -->
    <div class="card mb-4">
        <div class="card-body">

            <form method="POST" enctype="multipart/form-data">
                <input type="hidden" name="csrf_token" value="<?= $csrf ?>">

                <div class="form-group">
                    <label>Image Title</label>
                    <input type="text" name="title" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Select Type</label>
                    <select name="type" class="form-select" required>
                        <option value="">Select</option>
                        <?php foreach ($categories as $cat): ?>
                        <option value="<?= ucfirst($cat) ?>"><?= ucfirst($cat) ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>

                <div class="form-group">
                    <label>Upload Image</label>
                    <input type="file" name="image" class="file-upload-default" required>

                    <div class="input-group">
                        <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image">
                        <span class="input-group-append">
                            <button class="file-upload-browse btn primary-bg" type="button">Upload</button>
                        </span>
                    </div>
                </div>

                <button type="submit" name="submit" class="btn primary-bg">Save</button>
            </form>

        </div>
    </div>

    <!-- CATEGORY BASED GALLERY -->
    <div class="card">
        <div class="card-body">

            <h4 class="card-title">Gallery Images</h4>

            <ul class="nav nav-pills nav-pills-success mb-4">
                <?php foreach ($categories as $cat): ?>
                    <li class="nav-item">
                        <a class="nav-link <?= $cat == 'kitchen' ? 'active' : '' ?>" data-bs-toggle="pill" href="#<?= $cat ?>"><?= ucfirst($cat) ?></a>
                    </li>
                <?php endforeach; ?>
            </ul>

            <div class="tab-content">
                <?php foreach ($categories as $cat): ?>
                <div class="tab-pane fade <?= $cat == 'kitchen' ? 'show active' : '' ?>" id="<?= $cat ?>">
                    <div class="row">

                        <?php foreach ($byType[$cat] as $img): ?>
                        <div class="col-md-2 mb-4">
                            <div class="img-wrap position-relative">
                                <img src="<?= $uploadDir . $img['path'] ?>" class="img-fluid rounded">
                                <p class="img-title"><?= htmlspecialchars($img['title']) ?></p>

                                <a onclick="return confirm('Delete Image?')" 
                                   href="gallery.php?delete=<?= $img['id'] ?>&token=<?= $csrf ?>" 
                                   class="btn btn-sm btn-danger position-absolute" style="top:10px;right:10px;">
                                   <i class="mdi mdi-delete"></i> Delete
                                </a>
                            </div>
                        </div>
                        <?php endforeach; ?>

                        <?php if (empty($byType[$cat])): ?>
                            <p class="text-muted px-3">No images in <?= ucfirst($cat) ?>.</p>
                        <?php endif; ?>

                    </div>
                </div>
                <?php endforeach; ?>
            </div>

        </div>
    </div>

</div>

<?php include "container/footer.php"; ?>
<?php ob_end_flush(); ?>
