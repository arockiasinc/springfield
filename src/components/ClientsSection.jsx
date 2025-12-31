import { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const ClientsSection = () => {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        loop: true,
        speed: 600,
        autoplay: { delay: 4000 },
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 60,
        breakpoints: {
          320: { slidesPerView: 2, spaceBetween: 30 },
          480: { slidesPerView: 3, spaceBetween: 40 },
          640: { slidesPerView: 4, spaceBetween: 60 },
          992: { slidesPerView: 6, spaceBetween: 80 },
        },
      });
    }

    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <section id="clients" className="clients-section py-5" data-aos="fade-up">
      <div className="container">
      <div ref={swiperRef} className="swiper clients-swiper">
        <div className="swiper-wrapper align-items-center">
          <div className="swiper-slide">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/affilations/business-council-of-manitoba.jpg`}
              className="img-fluid"
              alt="Business Council of Manitoba"
            />
          </div>
          <div className="swiper-slide">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/affilations/houzz.png`}
              className="img-fluid"
              alt="Houzz"
            />
          </div>
          <div className="swiper-slide">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/affilations/A+Rating.jpg`}
              className="img-fluid"
              alt="A+ Rating"
            />
          </div>
          <div className="swiper-slide">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/affilations/bbb.jpg`}
              className="img-fluid"
              alt="BBB"
            />
          </div>
          <div className="swiper-slide">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/affilations/cfib.jpg`}
              className="img-fluid"
              alt="CFIB"
            />
          </div>
          <div className="swiper-slide">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/affilations/mhba.jpg`}
              className="img-fluid"
              alt="MHBA"
            />
          </div>
          <div className="swiper-slide">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/affilations/ppma.jpg`}
              className="img-fluid"
              alt="PPMA"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ClientsSection;
