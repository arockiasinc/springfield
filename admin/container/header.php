
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Springfield WoodWorking</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="./assets/vendors/mdi/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="./assets/vendors/ti-icons/css/themify-icons.css">
    <link rel="stylesheet" href="./assets/vendors/css/vendor.bundle.base.css">
    <link rel="stylesheet" href="./assets/vendors/font-awesome/css/font-awesome.min.css">
    <!-- endinject -->
    <!-- Plugin css for this page -->
    <link rel="stylesheet" href="./assets/vendors/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="./assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.1/font/bootstrap-icons.min.css">

    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <!-- endinject -->
    <!-- Layout styles -->
    <link rel="stylesheet" href="./assets/css/style.css">
    <!-- End layout styles -->
    <link rel="shortcut icon" href="./assets/images/favicon.png" />
    <style>
     .action-buttons {
  display: flex;
  gap: 8px;
}

.btn-edit, .btn-delete {
  border: none;
  padding: 10px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-edit {
  background-color: #007bff;
  color: #fff;
}

.btn-delete {
  background-color: #dc3545;
  color: #fff;
}

.btn-edit:hover {
  background-color: #0056b3;
}

.btn-delete:hover {
  background-color: #b51d2b;
}
.table td {
    white-space: normal !important;
    word-wrap: break-word;
    word-break: break-word;
    max-width: 300px; /* adjust if needed */
    line-height:30px;
}
.img-wrap {
  position: relative;
  display: inline-block;
  width:100%;
}

.img-wrap img {
  width: 100%;
    display: block;
    /* border-radius: 8px; */
    /* width: 100%; */
    height: 260px;
    object-fit: cover;
}

.img-wrap .img-title {
  position: absolute;
  bottom: 10px;        /* position at bottom */
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);  /* semi-transparent background */
  color: #fff;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  width: auto;
 
}
.primary-color{
  color:#7c0000 !important;
}
.primary-bg{
  background:#7c0000 !important;
  color:#fff;
}
.primary-bg:hover{
   background-color:#fff !important;
  color:#7c0000 !important;
  border:1px solid #7c0000;
}
.primary-background-div{
   background-color:#7c0000 !important;
  color:#fff;
}
.btn-danger:not(.btn-light){background-color:red;}
.sidebar .nav .nav-item.active > .nav-link .menu-title,.sidebar .nav .nav-item.active > .nav-link i,.sidebar .nav.sub-menu .nav-item .nav-link.active{
  color:#7c0000 !important;
}
.hover-card {
  transition: 0.3s ease;
  cursor: pointer;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}
.password-wrapper {
    position: relative;
    width: 100%;
}

.password-wrapper input {
    padding-right: 45px; /* space for the eye icon */
}

.password-wrapper .toggle-password {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    color: #6c757d;
    cursor: pointer;
    transition: 0.2s;
}

.password-wrapper .toggle-password:hover {
    color: #000;
}
.footer a{color:#fff;}
.footer a{text-decoration:none}



      </style>
  </head>
  <body>
    <div class="container-scroller">

      <!-- partial:partials/_navbar.html -->
      <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <a class="navbar-brand brand-logo" href="dashboard.php"><img src="./assets/images/logo.png" alt="logo" class="h-auto"/></a>
          <a class="navbar-brand brand-logo-mini" href="dashboard.php"><img src="./assets/images/logo.png" alt="logo" /></a>
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-stretch">
          <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span class="mdi mdi-menu"></span>
          </button>
  
          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item nav-profile dropdown">
              <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <div class="nav-profile-img">
                  <img src="./assets/images/faces-clipart/pic-1.png" alt="image">
                  <span class="availability-status online"></span>
                </div>
                <div class="nav-profile-text">
                  <p class="mb-1 text-black"> <?php echo isset($_SESSION['admin_username']) ? htmlspecialchars($_SESSION['admin_username']) : 'Admin'; ?></p>
                </div>
              </a>
              <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
             
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="logout.php">
                  <i class="mdi mdi-logout me-2"></i> Signout </a>
              </div>
            </li>
            <li class="nav-item d-none d-lg-block full-screen-link">
              <a class="nav-link">
                <i class="mdi mdi-fullscreen" id="fullscreen-button"></i>
              </a>
            </li>
           
            <li class="nav-item nav-logout d-none d-lg-block">
              <a class="nav-link" href="logout.php">
                <i class="mdi mdi-power"></i>
              </a>
            </li>
            
          </ul>
          <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>

      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
        <!-- partial:partials/_sidebar.html -->
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                <div class="nav-profile-image">
                  <img src="./assets/images/faces-clipart/pic-1.png" alt="profile" />
                  <span class="login-status online"></span>
                  <!--change to offline or busy as needed-->
                </div>
                <div class="nav-profile-text d-flex flex-column">
                  <span class="font-weight-bold mb-2">
  <?php echo isset($_SESSION['admin_username']) ? htmlspecialchars($_SESSION['admin_username']) : 'Admin'; ?>
</span>
                  <span class="text-secondary text-small">Admin</span>
                </div>
                <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="dashboard.php">
                <span class="menu-title">Dashboard</span>
                <i class="mdi mdi-home menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span class="menu-title">Pages</span>
                <i class="menu-arrow"></i>
             <i class="bi bi-file-earmark-text-fill fs-7 menu-icon "></i>
              </a>
              <div class="collapse" id="ui-basic">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="cabinet-doors-page.php">Cabinet Doors</a>
                  </li>
                   <li class="nav-item">
                    <a class="nav-link" href="faqs.php">FAQ</a>
                  </li>
                 
                </ul>
              </div>
              
            </li>
            <li class="nav-item">
              <a class="nav-link" href="menus.php">
                <span class="menu-title">Menus</span>
         
                <i class=" menu-icon bi bi-menu-button-wide-fill fs-7"></i>
              </a>
             
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#forms" aria-expanded="false" aria-controls="forms">
                <span class="menu-title">Sliders</span>
                 <i class="menu-arrow"></i>
               <i class=" menu-icon bi bi-images fs-7"></i>

           
              </a>
              <div class="collapse" id="forms">
                <ul class="nav flex-column sub-menu">
                 
                    <li class="nav-item">
                    <a class="nav-link" href="testimonials.php">Testimonial</a>
                  </li>
                     <li class="nav-item">
                    <a class="nav-link" href="client-section-slider.php">Client Section Slider</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="gallery.php">
                <span class="menu-title">Gallery</span>
                 <i class="bi bi-collection-fill fs-7 menu-icon"></i>
              </a>
          
            </li>
            <li class="nav-item">
              <a class="nav-link"  href="settings.php">
                <span class="menu-title">Settings</span>
                <i class="bi bi-gear-fill fs-7 menu-icon"></i>
              </a>
           
            </li>
       
          </ul>
        </nav>
        <!-- partial -->