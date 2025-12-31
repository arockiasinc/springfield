<?php
session_start();
require 'config/db.php';

/* ---------------------------------------------------
   CSRF TOKEN
--------------------------------------------------- */
if (empty($_SESSION['csrf'])) {
    $_SESSION['csrf'] = bin2hex(random_bytes(32));
}
$csrf = $_SESSION['csrf'];

/* ---------------------------------------------------
   HANDLE DELETE
--------------------------------------------------- */
if (isset($_GET['delete'], $_GET['token']) && $_GET['token'] === $csrf) {
    $deleteId = intval($_GET['delete']);

    $stmt = $pdo->prepare("DELETE FROM menus WHERE id = ?");
    $stmt->execute([$deleteId]);

    header("Location: menus.php?msg=deleted");
    exit;
}

/* ---------------------------------------------------
   HANDLE INSERT
--------------------------------------------------- */
if (isset($_POST['submit'])) {
    if ($_POST['csrf_token'] !== $csrf) die("Invalid CSRF");

    $name = trim($_POST['name']);
    $link = trim($_POST['link']);

    $stmt = $pdo->prepare("INSERT INTO menus (name, link) VALUES (?, ?)");
    $stmt->execute([$name, $link]);

    header("Location: menus.php?msg=added");
    exit;
}

/* ---------------------------------------------------
   EDIT MODE – LOAD EXISTING
--------------------------------------------------- */
$editData = null;

if (isset($_GET['edit'])) {
    $editId = intval($_GET['edit']);
    $stmt = $pdo->prepare("SELECT * FROM menus WHERE id = ?");
    $stmt->execute([$editId]);
    $editData = $stmt->fetch(PDO::FETCH_ASSOC);
}

/* ---------------------------------------------------
   HANDLE UPDATE
--------------------------------------------------- */
if (isset($_POST['update'])) {
    if ($_POST['csrf_token'] !== $csrf) die("Invalid CSRF");

    $id = intval($_POST['id']);
    $name = trim($_POST['name']);
    $link = trim($_POST['link']);

    $stmt = $pdo->prepare("UPDATE menus SET name = ?, link = ? WHERE id = ?");
    $stmt->execute([$name, $link, $id]);

    header("Location: menus.php?msg=updated");
    exit;
}

/* ---------------------------------------------------
   FETCH ALL MENUS
--------------------------------------------------- */
$menus = $pdo->query("SELECT * FROM menus ORDER BY id DESC")->fetchAll(PDO::FETCH_ASSOC);
$message = isset($_GET['msg']) ? ucfirst($_GET['msg']) : "";
?>

<?php include "container/header.php"; ?>

<div class="main-panel">
    <div class="content-wrapper">

        <div class="page-header">
            <h3 class="page-title">
                <span class="page-title-icon primary-bg text-white me-2">
                    <i class=" menu-icon bi bi-menu-button-wide-fill fs-7"></i>
                </span> Menu Management
            </h3>
        </div>

        <?php if ($message): ?>
            <div class="alert alert-info"><?php echo htmlspecialchars($message); ?></div>
        <?php endif; ?>

        <!-- FORM -->
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">

                        <form method="POST">
                            <input type="hidden" name="csrf_token" value="<?php echo $csrf; ?>">

                            <?php if ($editData): ?>
                                <input type="hidden" name="id" value="<?php echo $editData['id']; ?>">
                            <?php endif; ?>

                            <div class="form-group">
                                <label>Menu Name</label>
                                <input type="text" name="name" class="form-control"
                                       value="<?php echo $editData ? htmlspecialchars($editData['name']) : ''; ?>"
                                       required>
                            </div>

                            <div class="form-group">
                                <label>Link</label>
                                <input type="text" name="link" class="form-control"
                                       value="<?php echo $editData ? htmlspecialchars($editData['link']) : ''; ?>"
                                       required>
                            </div>

                            <?php if ($editData): ?>
                                <button type="submit" name="update" class="btn btn-warning">Update</button>
                                <a href="menus.php" class="btn btn-secondary">Cancel</a>
                            <?php else: ?>
                                <button type="submit" name="submit" class="btn primary-bg">Save</button>
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

                        <h4 class="card-title">Menu List</h4>

                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Link</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <?php foreach ($menus as $row): ?>
                                        <tr>
                                            <td><?php echo htmlspecialchars($row['name']); ?></td>

                                            <td><?php echo htmlspecialchars($row['link']); ?></td>

                                            <td>
                                                <a href="menus.php?edit=<?php echo $row['id']; ?>" 
                                                   class="btn btn-sm btn-info">
                                                   <i class="mdi mdi-pencil"></i> Edit
                                                </a>

                                                <a href="menus.php?delete=<?php echo $row['id']; ?>&token=<?php echo $csrf; ?>"
                                                   class="btn btn-sm btn-danger"
                                                   onclick="return confirm('Delete this menu?');">
                                                   <i class="mdi mdi-delete"></i> Delete
                                                </a>
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