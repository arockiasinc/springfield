<?php
session_start();
require 'config/db.php';

// If not logged in but cookie exists
if (!isset($_SESSION['admin_id']) && isset($_COOKIE['remember_token'])) {
    $token = $_COOKIE['remember_token'];
    $stmt = $pdo->prepare("SELECT * FROM admin WHERE remember_token = :token LIMIT 1");
    $stmt->execute(['token' => $token]);
    $admin = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($admin) {
        $_SESSION['admin_id'] = $admin['id'];
        $_SESSION['admin_username'] = $admin['username'];
    }
}

if (!isset($_SESSION['admin_id'])) {
    header("Location: login.php");
    exit;
}
?>
<?php include "container/header.php" ?>
  <!-- partial -->
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="page-header">
              <h3 class="page-title">
              <span class="page-title-icon primary-background-div text-white me-2">
    <i class="bi bi-house-door-fill fs-7"></i>
</span> Dashboard 
              </h3>
              <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    <span></span>Overview <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                  </li>
                </ul>
              </nav>
            </div>
           

        <div class="row">

  <!-- Menus -->
  <div class="col-md-4 grid-margin">
    <a href="menus.php" class="text-decoration-none">
      <div class="card shadow-sm hover-card">
        <div class="card-body text-center">
          <i class="bi bi-menu-button-wide-fill fs-1 text-primary"></i>
          <h4 class="card-title mt-3">Menus</h4>
        </div>
      </div>
    </a>
  </div>

  <!-- Pages -->
  <div class="col-md-4 grid-margin">
    <a href="pages.php" class="text-decoration-none">
      <div class="card shadow-sm hover-card">
        <div class="card-body text-center">
          <i class="bi bi-file-earmark-text-fill fs-1 text-success"></i>
          <h4 class="card-title mt-3">Pages</h4>
        </div>
      </div>
    </a>
  </div>

  <!-- Sliders -->
  <div class="col-md-4 grid-margin">
    <a href="client-section-slider.php" class="text-decoration-none">
      <div class="card shadow-sm hover-card">
        <div class="card-body text-center">
          <i class="bi bi-images fs-1 text-warning"></i>
          <h4 class="card-title mt-3">Sliders</h4>
        </div>
      </div>
    </a>
  </div>

  <!-- Gallery -->
  <div class="col-md-4 grid-margin">
    <a href="gallery.php" class="text-decoration-none">
      <div class="card shadow-sm hover-card">
        <div class="card-body text-center">
          <i class="bi bi-collection-fill fs-1 text-danger"></i>
          <h4 class="card-title mt-3">Gallery</h4>
        </div>
      </div>
    </a>
  </div>

  <!-- Settings -->
  <div class="col-md-4 grid-margin">
    <a href="settings.php" class="text-decoration-none">
      <div class="card shadow-sm hover-card">
        <div class="card-body text-center">
          <i class="bi bi-gear-fill fs-1 text-dark"></i>
          <h4 class="card-title mt-3">Settings</h4>
        </div>
      </div>
    </a>
  </div>

</div>






            
          </div>
          <!-- content-wrapper ends -->
          <!-- partial:partials/_footer.html -->
         
        <!-- main-panel ends -->
<?php include "container/footer.php" ?>