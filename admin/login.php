


<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Springfield WoodWorking</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="assets/vendors/mdi/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="assets/vendors/ti-icons/css/themify-icons.css">
    <link rel="stylesheet" href="assets/vendors/css/vendor.bundle.base.css">
    <link rel="stylesheet" href="assets/vendors/font-awesome/css/font-awesome.min.css">
    <!-- endinject -->
    <!-- Plugin css for this page -->
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <!-- endinject -->
    <!-- Layout styles -->
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- End layout styles -->
    <link rel="shortcut icon" href="assets/images/favicon.png" />
    <style>
        .alert-success {
     color: #1bcfb4;
     border:1px solid #a3cfbb;
     border-radius:5px;
}
.alert-warning{
    color:#fed713;
     border:1px solid #a3cfbb;
     border-radius:5px;
}
.alert-danger {
    color: #fe7c96;
}
.alert i {
    font-size: 1.25rem;
    margin-right: 1.25rem;
    vertical-align: middle;
    line-height: 0.5;
}
.alert {
    font-size: 0.875rem;
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
.form-check .form-check-label input[type=checkbox] + .input-helper:before{
   color:#7c0000 !important;
   border:1px solid #7c0000;

}
    </style>
  </head>
  <body>
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row flex-grow">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div>
                  <img src="assets/images/logo.png" class="mx-auto d-block w-300">
                </div>
                <h4>Hello! let's get started</h4>
                <h6 class="font-weight-light">Sign in to continue.</h6>
          <form class="pt-3" id="loginForm" method="POST">
  <div class="form-group">
    <input type="text" class="form-control form-control-lg" name="email" placeholder="Admin Email" required>
  </div>
  <div class="form-group">
    <input type="password" class="form-control form-control-lg" name="password" placeholder="Password" required>
  </div>
  <div id="loginMessage" class="text-center mt-3"></div>
  <div class="mt-3 d-grid gap-2">
    <button type="submit" class="btn btn-block primary-bg btn-lg font-weight-medium auth-form-btn">
      SIGN IN
    </button>
  </div>
  <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input"> Keep me signed in <i class="input-helper"></i></label>
                    </div>
                    
                  </div>
</form>



              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    <!-- plugins:js -->
    <script src="assets/vendors/js/vendor.bundle.base.js"></script>
    <!-- endinject -->
    <!-- Plugin js for this page -->
    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="assets/js/off-canvas.js"></script>
    <script src="assets/js/misc.js"></script>
    <script src="assets/js/settings.js"></script>
    <script src="assets/js/todolist.js"></script>
    <script src="assets/js/jquery.cookie.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function () {
  $("#loginForm").on("submit", function (e) {
    e.preventDefault();

    $("#loginMessage").html(
      '<div class="alert alert-warning" role="alert"><i class="mdi mdi-timer-sand"></i> Checking...</div>'
    );

    $.ajax({
      url: "config/login_auth.php", // make sure path is correct
      type: "POST",
      data: $(this).serialize(),
      dataType: "json",
      success: function (response) {
        if (response.status === "success") {
          $("#loginMessage").html(
            '<div class="alert alert-success" role="alert"><i class="mdi mdi-check-circle"></i> ' +
              response.message +
              "</div>"
          );

          // Redirect after short delay
          setTimeout(() => {
            window.location.href = "dashboard.php";
          }, 1200);
        } else {
          $("#loginMessage").html(
            '<div class="alert alert-danger" role="alert"><i class="mdi mdi-alert-circle"></i> ' +
              response.message +
              "</div>"
          );
        }
      },
      error: function () {
        $("#loginMessage").html(
          '<div class="alert alert-danger" role="alert"><i class="mdi mdi-server"></i> Server error. Please try again.</div>'
        );
      },
    });
  });
});

</script>

    <!-- endinject -->
  </body>
</html>