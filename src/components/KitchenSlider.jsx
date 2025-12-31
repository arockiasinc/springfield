// src/components/KitchenSlider.jsx

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./KitchenSlider.css"; // optional custom styles


const KitchenSlider = () => {
  const settings = {
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "200px",
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
  
        <Slider {...settings} className="kitchen-slider">
 

     
      <div className="slider-item">
        <img src={`${process.env.PUBLIC_URL}/assets/images/slider/argup13.jpg`} alt="Kitchen 1" className="img-fluid"/>
        <div className="slider-caption">
          <span className="tag">Top sellers</span>
          <h3 className="text-white">Aqua Space Kitchen</h3>
        </div>
      </div>

     
      <div className="slider-item">
        <img src={`${process.env.PUBLIC_URL}/assets/images/slider/mr_p1.jpg`} alt="Kitchen 2" className="img-fluid"/>
        <div className="slider-caption">
          <span className="tag">Top sellers</span>
          <h3 className="text-white">Modern Oak Kitchen</h3>
        </div>
      </div>

    
      <div className="slider-item">
        <img src={`${process.env.PUBLIC_URL}/assets/images/slider/mr_p2.jpg`} alt="Kitchen 3" className="img-fluid"/>
        <div className="slider-caption">
          <span className="tag">Top sellers</span>
          <h3 className="text-white">Minimal Space Kitchen</h3>
        </div>
      </div>
      
    
      <div className="slider-item">
        <img src={`${process.env.PUBLIC_URL}/assets/images/slider/mr_slide_4.jpg`} alt="Kitchen 3" className="img-fluid"/>
        <div className="slider-caption">
          <span className="tag">Top sellers</span>
          <h3 className="text-white">Minimal Space Kitchen</h3>
        </div>
      </div>
      

      <div className="slider-item">
        <img src={`${process.env.PUBLIC_URL}/assets/images/slider/slide_m_1.jpg`} alt="Kitchen 3" className="img-fluid"/>
        <div className="slider-caption">
          <span className="tag">Top sellers</span>
          <h3 className="text-white">Minimal Space Kitchen</h3>
        </div>
      </div>

   
        </Slider>
     
  );
};

export default KitchenSlider;
