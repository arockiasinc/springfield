export default function Footer(){

    return (
        <footer id="footer" className="footer">



    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="index.html" className="d-flex align-items-center">
            <img src="assets/images/logo.png" alt="" className="w-200"/>
          </a>
          <div className="footer-contact pt-3">
            <p><strong>Monday - Friday 08:00 AM - 05:00 PM</strong></p>
            <p><strong>Saturday 09:00 AM - 03:00 PM</strong></p>
           
            <p><strong>Sunday Closed</strong></p>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-3 footer-links">
        
          <h4>Our Services</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Faq</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Get a Quote</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Warranty</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">UV Top Coat Brochure</a></li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-12">
            <h4>Address</h4>
          <p>Unit 1 – 5 Penner Road,</p>
          <p>Navin, MB R5T 0H5 Canada</p>
          <p>Showroom : 204 222 8797</p><br/>
          <h4>Follow Us</h4>
         
          <div className="social-links d-flex">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Springfield</strong> <span>All Rights Reserved</span></p>
    </div>

  </footer>
    )

}

