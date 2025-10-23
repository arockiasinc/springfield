
import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import AOS from "aos";
import "aos/dist/aos.css";

const SwiperTestimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const swiperConfig = {
      loop: true,
      speed: 600,
      autoplay: { delay: 5000 },
      slidesPerView: "auto",
      pagination: {
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

  return (
    <div className="swiper testimonials-swiper">
      <div className="swiper-wrapper">
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
      <div className="swiper-pagination testimonials-pagination"></div>
    </div>
  );
};

export default SwiperTestimonials;

