<<<<<<< HEAD
import { useState, useEffect } from "react";
=======

import { useEffect } from "react";
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import AOS from "aos";
import "aos/dist/aos.css";

const SwiperTestimonials = () => {
<<<<<<< HEAD
  const [testimonials, setTestimonials] = useState([]);

  // Fetch backend data
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    fetch(`http://localhost/springfield_react/admin/api/get_testimonials.php`)
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          setTestimonials(data.data);
        }
      });
  }, []);

  // Initialize Swiper only after data loads
  useEffect(() => {
    if (testimonials.length === 0) return; // Prevent loop warning

    const swiper = new Swiper(".testimonials-swiper", {
=======
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const swiperConfig = {
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2
      loop: true,
      speed: 600,
      autoplay: { delay: 5000 },
      slidesPerView: "auto",
      pagination: {
<<<<<<< HEAD
        
        clickable: true,
      },
    });

    return () => swiper.destroy(true, true);
  }, [testimonials]);
=======
        el: ".testimonials-pagination", // unique selector
        type: "bullets",
        clickable: true,
      },
    };

    const swiper = new Swiper(".testimonials-swiper", swiperConfig);

    return () => {
      if (swiper && swiper.destroy) swiper.destroy(true, true);
    };
  }, []);
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2

  return (
    <div className="swiper testimonials-swiper">
      <div className="swiper-wrapper">
<<<<<<< HEAD
        {testimonials.map((item, index) => (
          <div className="swiper-slide" key={index}>
            <div className="testimonial-item" data-aos="fade-up">
              <h3>{item.name}</h3>

              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>

              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                {item.content}
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        ))}
      </div>

=======
               <div className="swiper-slide">
          <div className="testimonial-item">
            <img src={`${process.env.PUBLIC_URL}/assets/img/testimonials/testimonials-1.jpg`} className="testimonial-img" alt="Saul Goodman"/>
            <h3>Saul Goodman</h3>
            <h4>Ceo & Founder</h4>
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="testimonial-item">
            <img src={`${process.env.PUBLIC_URL}/assets/img/testimonials/testimonials-2.jpg`} className="testimonial-img" alt="Sara Wilsson"/>
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              Export tempor illum tamen malis malis eram quae irure esse labore.
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="testimonial-item">
            <img src={`${process.env.PUBLIC_URL}/assets/img/testimonials/testimonials-3.jpg`} className="testimonial-img" alt="Jena Karlis"/>
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              Enim nisi quem export duis labore cillum quae magna enim sint.
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="testimonial-item">
            <img src={`${process.env.PUBLIC_URL}/assets/img/testimonials/testimonials-4.jpg`} className="testimonial-img" alt="Matt Brandon"/>
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos.
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="testimonial-item">
            <img src={`${process.env.PUBLIC_URL}/assets/img/testimonials/testimonials-5.jpg`} className="testimonial-img" alt="John Larson"/>
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor.
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
          </div>
        </div>
      </div>
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2
      <div className="swiper-pagination testimonials-pagination"></div>
    </div>
  );
};

export default SwiperTestimonials;
<<<<<<< HEAD
=======

>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2
