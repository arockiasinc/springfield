import { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const CommonSlider = ({children,sliderPreviewCount,imageGap}) => {
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
          992: { slidesPerView: sliderPreviewCount, spaceBetween: imageGap },
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
   
      <div ref={swiperRef} className="swiper clients-swiper">
              <div className="swiper-wrapper align-items-center">
        {children}
        </div>
      </div>
 
  );
};

export default CommonSlider;
