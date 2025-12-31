<?php
session_start();
require 'config/db.php'; // PDO connection

// CSRF Token
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
$csrf = $_SESSION['csrf_token'];

$message = '';

/* ----------------- ADD NEW FAQ ----------------- */
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit'])) {

    $question = trim($_POST['question'] ?? '');
    $answer = trim($_POST['answer'] ?? '');

    if ($question === '' || $answer === '') {
        $message = "Both fields are required!";
    } else {
        try {
            $stmt = $pdo->prepare("INSERT INTO faqs (question, answer) VALUES (:question, :answer)");
            $stmt->execute([
                ':question' => $question,
                ':answer' => $answer,
            ]);

            $_SESSION['flash'] = "FAQ added successfully!";
            header("Location: faqs.php");
            exit;

        } catch (PDOException $e) {
            $message = "Database error: " . $e->getMessage();
        }
    }
}

/* ----------------- UPDATE FAQ ----------------- */
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update'])) {

    $id = intval($_POST['id']);
    $question = trim($_POST['question']);
    $answer = trim($_POST['answer']);

    if ($question !== '' && $answer !== '') {
        try {
            $stmt = $pdo->prepare("UPDATE faqs SET question = :question, answer = :answer WHERE id = :id");
            $stmt->execute([
                ':question' => $question,
                ':answer' => $answer,
                ':id' => $id
            ]);

            $_SESSION['flash'] = "FAQ updated successfully!";
            header("Location: faqs.php");
            exit;

        } catch (PDOException $e) {
            $message = "Update failed: " . $e->getMessage();
        }
    } else {
        $message = "Fields cannot be empty.";
    }
}

/* ----------------- DELETE FAQ ----------------- */
if (isset($_GET['delete']) && isset($_GET['token'])) {

    $id = intval($_GET['delete']);
    $token = $_GET['token'];

    if (hash_equals($_SESSION['csrf_token'], $token)) {

        try {
            $stmt = $pdo->prepare("DELETE FROM faqs WHERE id = :id");
            $stmt->execute([':id' => $id]);

            $_SESSION['flash'] = "FAQ deleted successfully!";
            header("Location: faqs.php");
            exit;

        } catch (PDOException $e) {
            $message = "Delete failed: " . $e->getMessage();
        }

    } else {
        $message = "Invalid CSRF token.";
    }
}

/* ----------------- FETCH FAQ LIST ----------------- */
try {
    $stmt = $pdo->query("SELECT * FROM faqs ORDER BY id DESC");
    $faqs = $stmt->fetchAll(PDO::FETCH_ASSOC);

} catch (PDOException $e) {
    $faqs = [];
    $message = "Could not load records: " . $e->getMessage();
}

/* ----------------- FETCH DATA FOR EDIT MODE ----------------- */
$editData = null;
if (isset($_GET['edit'])) {

    $id = intval($_GET['edit']);

    $stmt = $pdo->prepare("SELECT * FROM faqs WHERE id = :id");
    $stmt->execute([':id' => $id]);

    $editData = $stmt->fetch(PDO::FETCH_ASSOC);
}
?>

<?php include "container/header.php"; ?>

<div class="main-panel">
    <div class="content-wrapper">

        <div class="page-header">
            <h3 class="page-title">
                <span class="page-title-icon primary-bg text-white me-2">
                    <i class="bi bi-question-circle-fill"></i>
                </span> FAQ Manager
            </h3>
        </div>

        <!-- FLASH MESSAGE -->
        <?php if(isset($_SESSION['flash'])): ?>
            <div class="alert alert-success">
                <?= htmlspecialchars($_SESSION['flash']); ?>
            </div>
            <?php unset($_SESSION['flash']); ?>
        <?php endif; ?>

        <?php if (!empty($message)): ?>
            <div class="alert alert-warning"><?= htmlspecialchars($message); ?></div>
        <?php endif; ?>

        <!-- FORM -->
        <div class="card mb-4">
            <div class="card-body">
                <form method="POST">
                    <input type="hidden" name="csrf_token" value="<?= $csrf ?>">

                    <?php if ($editData): ?>
                        <input type="hidden" name="id" value="<?= $editData['id'] ?>">
                    <?php endif; ?>

                    <div class="form-group mb-3">
                        <label>Question</label>
                        <input type="text" name="question" class="form-control"
                           value="<?= $editData ? htmlspecialchars($editData['question']) : '' ?>" required>
                    </div>

                    <div class="form-group mb-3">
                        <label>Answer</label>
                        <textarea name="answer" class="form-control" rows="4" required><?= 
                            $editData ? htmlspecialchars($editData['answer']) : '' 
                        ?></textarea>
                    </div>

                    <?php if ($editData): ?>
                        <button type="submit" name="update" class="btn btn-warning">Update</button>
                        <a href="faqs.php" class="btn btn-secondary">Cancel</a>
                    <?php else: ?>
                        <button type="submit" name="submit" class="btn primary-bg">Save</button>
                    <?php endif; ?>
                </form>
            </div>
        </div>

        <!-- TABLE -->
        <div class="card">
            <div class="card-body">
                <h4 class="card-title mb-3">Saved FAQs</h4>

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th width="25%">Question</th>
                            <th width="60%">Answer</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <?php foreach ($faqs as $faq): ?>
                            <tr>
                                <td><?= htmlspecialchars($faq['question']) ?></td>
                                <td><?= nl2br(htmlspecialchars($faq['answer'])) ?></td>
                                <td>
                                    <a href="faqs.php?edit=<?= $faq['id'] ?>" class="btn btn-sm btn-info">Edit</a>
                                    <a href="faqs.php?delete=<?= $faq['id'] ?>&token=<?= $csrf ?>"
                                       onclick="return confirm('Delete this FAQ?')"
                                       class="btn btn-sm btn-danger">Delete</a>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>

                </table>
            </div>
        </div>

    </div>


<?php include "container/footer.php"; ?>
