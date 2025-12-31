<?php
session_start();
require 'config/db.php'; // PDO connection

// CSRF token
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
$csrf = $_SESSION['csrf_token'];

$message = '';

/* ---------------------------------------------------------
    INSERT NEW TESTIMONIAL
----------------------------------------------------------*/
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit'])) {

    $name = trim($_POST['name'] ?? '');
    $content = trim($_POST['content'] ?? '');

    if ($name === '' || $content === '') {
        $message = "Please fill all fields!";
    } else {
        try {
            $stmt = $pdo->prepare("INSERT INTO testimonials (name, content) VALUES (:name, :content)");
            $stmt->execute([
                ':name' => $name,
                ':content' => $content,
            ]);
            header("Location: testimonials.php");
            exit;

        } catch (PDOException $e) {
            $message = "Database error: " . $e->getMessage();
        }
    }
}

/* ---------------------------------------------------------
    UPDATE TESTIMONIAL
----------------------------------------------------------*/
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update'])) {

    $id = intval($_POST['id']);
    $name = trim($_POST['name']);
    $content = trim($_POST['content']);

    if ($name !== '' && $content !== '') {
        try {
            $stmt = $pdo->prepare("UPDATE testimonials 
                                   SET name = :name, content = :content 
                                   WHERE id = :id");

            $stmt->execute([
                ':name' => $name,
                ':content' => $content,
                ':id' => $id
            ]);

            header("Location: testimonials.php");
            exit;

        } catch (PDOException $e) {
            $message = "Update failed: " . $e->getMessage();
        }
    } else {
        $message = "All fields are required.";
    }
}

/* ---------------------------------------------------------
    DELETE
----------------------------------------------------------*/
if (isset($_GET['delete']) && isset($_GET['token'])) {

    $id = intval($_GET['delete']);
    $token = $_GET['token'];

    if (hash_equals($_SESSION['csrf_token'], $token)) {

        try {
            $stmt = $pdo->prepare("DELETE FROM testimonials WHERE id = :id");
            $stmt->execute([':id' => $id]);

            header("Location: testimonials.php");
            exit;

        } catch (PDOException $e) {
            $message = "Delete failed: " . $e->getMessage();
        }

    } else {
        $message = "Invalid CSRF token.";
    }
}

/* ---------------------------------------------------------
    FETCH ALL TESTIMONIALS
----------------------------------------------------------*/
try {
    $stmt = $pdo->query("SELECT * FROM testimonials ORDER BY id DESC");
    $testimonials = $stmt->fetchAll(PDO::FETCH_ASSOC);

} catch (PDOException $e) {
    $testimonials = [];
    $message = "Could not fetch testimonials: " . $e->getMessage();
}

/* ---------------------------------------------------------
    FETCH SINGLE FOR EDITING
----------------------------------------------------------*/
$editData = null;

if (isset($_GET['edit'])) {

    $id = intval($_GET['edit']);

    $stmt = $pdo->prepare("SELECT * FROM testimonials WHERE id = :id");
    $stmt->execute([':id' => $id]);

    $editData = $stmt->fetch(PDO::FETCH_ASSOC);
}

?>

<?php include "container/header.php"; ?>

<div class="main-panel">
    <div class="content-wrapper">

        <div class="page-header">
            <h3 class="page-title">
                <span class="page-title-icon  primary-bg text-white me-2">
                    <i class="bi bi-images fs-7"></i>
                 
                </span> Testimonials
            </h3>
        </div>

        <?php if (!empty($message)): ?>
            <div class="alert alert-info"><?php echo htmlspecialchars($message); ?></div>
        <?php endif; ?>

        <!-- FORM -->
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">

                        <form class="forms-sample" method="POST">
                            
                            <input type="hidden" name="csrf_token" value="<?php echo $csrf; ?>">

                            <?php if ($editData): ?>
                                <input type="hidden" name="id" value="<?php echo $editData['id']; ?>">
                            <?php endif; ?>

                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" name="name" class="form-control"
                                    value="<?php echo $editData ? htmlspecialchars($editData['name']) : ''; ?>" required>
                            </div>

                            <div class="form-group">
                                <label>Content</label>
                                <textarea name="content" class="form-control" rows="4" required><?php 
                                    echo $editData ? htmlspecialchars($editData['content']) : ''; 
                                ?></textarea>
                            </div>

                            <?php if ($editData): ?>
                                <button type="submit" name="update" class="btn btn-warning me-2">Update</button>
                                <a href="testimonials.php" class="btn btn-secondary">Cancel</a>
                            <?php else: ?>
                                <button type="submit" name="submit" class="btn primary-bg me-2">Save</button>
                            <?php endif; ?>

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
                        <h4 class="card-title">Saved Testimonials</h4>

                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th style="max-width:300px;">Content</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <?php foreach ($testimonials as $row): ?>
                                        <tr>
                                            <td><?php echo htmlspecialchars($row['name']); ?></td>

                                            <td style="white-space:normal; word-break:break-word; max-width:300px;">
                                                <?php echo nl2br(htmlspecialchars($row['content'])); ?>
                                            </td>

                                            <td>
                                                <a href="testimonials.php?edit=<?php echo $row['id']; ?>" 
                                                    class="btn btn-sm btn-info"><i class="mdi mdi-pencil"></i> EDIT</a>

                                                <a href="testimonials.php?delete=<?php echo $row['id']; ?>&token=<?php echo $csrf; ?>"
                                                   class="btn btn-sm btn-danger"
                                                   onclick="return confirm('Delete this testimonial?');"> <i class="mdi mdi-delete"></i> Delete</a>
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
