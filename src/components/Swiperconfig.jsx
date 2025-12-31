import { useState, useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import AOS from "aos";
import "aos/dist/aos.css";

const SwiperTestimonials = () => {
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
      loop: true,
      speed: 600,
      autoplay: { delay: 5000 },
      slidesPerView: "auto",
      pagination: {
        
        clickable: true,
      },
    });

    return () => swiper.destroy(true, true);
  }, [testimonials]);

  return (
    <div className="swiper testimonials-swiper">
      <div className="swiper-wrapper">
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

      <div className="swiper-pagination testimonials-pagination"></div>
    </div>
  );
};

export default SwiperTestimonials;
