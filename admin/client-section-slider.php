<?php 
ob_start();
session_start();
require 'config/db.php';
include "container/header.php";

// Folder for uploads
$uploadDir = "uploads/client_slider/";

// CSRF token (do NOT regenerate every refresh)
if (!isset($_SESSION["csrf_token"])) {
    $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
}
$csrf = $_SESSION["csrf_token"];

// Display flash message if exists
if (!empty($_SESSION["flash"])) {
    $message = $_SESSION["flash"];
    unset($_SESSION["flash"]);
} else {
    $message = "";
}

/* -------------------- INSERT SLIDE -------------------- */
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["submit"])) {

    $title = trim($_POST["title"]);

    if ($title === "") {
        $message = "Please enter a title!";
    } else {
        // Handle image upload
        if (!empty($_FILES["image"]["name"])) {

            $fileName = time() . "_" . basename($_FILES["image"]["name"]);
            $targetPath = $uploadDir . $fileName;

            if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetPath)) {

                $stmt = $pdo->prepare("INSERT INTO client_slider (title, image) VALUES (:title, :image)");
                $stmt->execute([
                    ":title" => $title,
                    ":image" => $fileName
                ]);

                $_SESSION["flash"] = "Saved successfully!";
                header("Location: client-section-slider.php");
                exit;

            } else {
                $message = "Image upload failed!";
            }

        } else {
            $message = "Please upload an image!";
        }
    }
}

/* -------------------- DELETE SLIDE -------------------- */
if (isset($_GET["delete"]) && isset($_GET["token"])) {

    if (hash_equals($_SESSION["csrf_token"], $_GET["token"])) {

        $id = intval($_GET["delete"]);

        // fetch old image
        $stmt = $pdo->prepare("SELECT image FROM client_slider WHERE id = :id");
        $stmt->execute([":id" => $id]);
        $file = $stmt->fetchColumn();

        // delete from DB
        $stmt = $pdo->prepare("DELETE FROM client_slider WHERE id = :id");
        $stmt->execute([":id" => $id]);

        // delete image file
        if ($file && file_exists($uploadDir . $file)) {
            unlink($uploadDir . $file);
        }

        $_SESSION["flash"] = "Slide deleted!";
        header("Location: client-section-slider.php");
        exit;
    }
}

/* -------------------- FETCH SLIDES -------------------- */
$stmt = $pdo->query("SELECT * FROM client_slider ORDER BY id DESC");
$slides = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>

<div class="main-panel">
    <div class="content-wrapper">

        <div class="page-header">
            <h3 class="page-title">
                <span class="page-title-icon  primary-bg text-white me-2">
                    <i class="bi bi-images fs-7"></i>
                 
                </span> Client Section Slider
            </h3>
        </div>

        <?php if (!empty($message)): ?>
            <div class="alert alert-success"><?= $message ?></div>
        <?php endif; ?>

        <!-- FORM -->
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">

                        <form class="forms-sample" method="POST" enctype="multipart/form-data">
                            <input type="hidden" name="csrf_token" value="<?= $csrf ?>">

                            <div class="form-group">
                                <label>Title</label>
                                <input type="text" name="title" class="form-control" placeholder="Enter title" required>
                            </div>

                            <div class="form-group">
                                <label>Image Upload</label>

                                <input type="file" name="image" class="file-upload-default" required>

                                <div class="input-group col-xs-12">
                                    <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image">
                                    <span class="input-group-append">
                                        <button class="file-upload-browse btn primary-bg py-3" type="button">Upload</button>
                                    </span>
                                </div>
                            </div>

                            <button type="submit" name="submit" class="btn primary-bg me-2">Save</button>
                            <button type="reset" class="btn btn-light">Cancel</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

        <!-- TABLE -->
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Client Slides</h4>

                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($slides as $row): ?>
                                        <tr>
                                            <td><?= htmlspecialchars($row["title"]) ?></td>

                                            <td>
                                                <img 
                                                    src="uploads/client_slider/<?= htmlspecialchars($row["image"]) ?>" 
                                                    alt="" 
                                                    width="120" 
                                                    style="border-radius:6px"
                                                />
                                            </td>

                                            <td>
                                                <a href="client-section-slider.php?delete=<?= $row['id'] ?>&token=<?= $csrf ?>"
                                                    class="btn btn-sm btn-danger"
                                                    onclick="return confirm('Delete this slide?');">
                                                   <i class="mdi mdi-delete"></i> Delete</a>
                                            </td>
                                        </tr>
                                    <?php endforeach; ?>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>

<?php include "container/footer.php"; ?>
<?php ob_end_flush(); ?>
