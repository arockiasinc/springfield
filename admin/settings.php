<?php
session_start();
require 'config/db.php';

// Must be logged in to change password
if (!isset($_SESSION['admin_id'])) {
    header("Location: login.php");
    exit;
}

$adminId = $_SESSION['admin_id'];

// CSRF token
if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
$csrf = $_SESSION['csrf_token'];

$message = "";

/* ---------------------------------------------------------
    UPDATE PASSWORD
----------------------------------------------------------*/
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update_password'])) {

    $newPassword = trim($_POST['password']);
    $confirmPassword = trim($_POST['confirm_password']);

    if ($newPassword === '' || $confirmPassword === '') {
        $message = "⚠ Both fields are required!";
    } elseif ($newPassword !== $confirmPassword) {
        $message = "❌ Passwords do not match!";
    } elseif (strlen($newPassword) < 6) {
        $message = "⚠ Password must be at least 6 characters.";
    } else {

        try {
            $hashedPassword = password_hash($newPassword, PASSWORD_BCRYPT);

            $stmt = $pdo->prepare("UPDATE admin SET password = :pass WHERE id = :id");
            $stmt->execute([
                ':pass' => $hashedPassword,
                ':id' => $adminId
            ]);

            $message = "✅ Password updated successfully!";
        } catch (PDOException $e) {
            $message = "❌ Error updating password: " . $e->getMessage();
        }
    }
}
?>

<?php include "container/header.php"; ?>

<div class="main-panel">
    <div class="content-wrapper">

        <div class="page-header">
            <h3 class="page-title">
                <span class="page-title-icon primary-bg text-white me-2">
                    <i class="bi bi-lock-fill"></i>
                </span> Change Password
            </h3>
        </div>

        <?php if (!empty($message)): ?>
            <div class="alert alert-info"><?= $message ?></div>
        <?php endif; ?>

        <div class="row">
            <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">

                        <form method="POST">
                            <input type="hidden" name="csrf_token" value="<?= $csrf ?>">

                            <div class="form-group mb-2">
                                <label for="password">New Password</label>
                                <div class="password-wrapper">
                                <input type="password" name="password" class="form-control" required id="password">
                                <i id="togglePassword" 
           class="bi bi-eye-slash" 
           style="position:absolute; right:12px; top:15px; cursor:pointer;"></i>
        </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="password">Confirm Password</label>
                                <input type="password" name="confirm_password" class="form-control" required>
                            </div>

                            <button type="submit" name="update_password" class="btn primary-bg">
                                Update Password
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    </div>

    <script>
document.getElementById('togglePassword').addEventListener('click', function () {
    let passwordField = document.getElementById('password');
    let type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle icon
    this.classList.toggle('bi-eye');
    this.classList.toggle('bi-eye-slash');
});
</script>


<?php include "container/footer.php"; ?>
