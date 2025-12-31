import CommonSlider from "../components/CommonSlider";
import { useAppData } from "../context/AppContext"
import Button from "../components/Buttons";
import SeoMetaDetails from "../components/SeoMetaDetails";

export default function BathroomCabinets() {
  const { cmsData,
      showModal, currentCmsId, openModal, closeModal,updateCms,loading  } = useAppData();
         const handleSave = updateCms; // ⬅ using global updater
          const featureCards = [
  { id: 28, icon: "bi bi-palette-fill" },
  { id: 29, icon: "bi bi-box-seam" },
  { id: 30, icon: "bi bi-hammer" },
  { id: 31, icon: "bi bi-rulers" },
];

  
  return (
    <>
    <SeoMetaDetails slug="bathroom-cabinets" />
      <div className="page-title aos-init aos-animate" data-aos="fade">
        <div className="container">
          <h1 className="text-center">Bathroom Cabinets</h1>
        </div>
      </div>

      {/* Section 1 - Intro with Image and Content */}
      <section id="bathroom-cabinets" className="about section pb-2">
        <div className="container">
          <div className="row gy-3">
            {/* Image */}
            <div className="col-lg-6">
                     <img
                      src={`http://localhost/springfield_react/uploads/${cmsData[26]?.image}?v=${Date.now()}`}
                      alt={cmsData[26]?.heading}
                      className="img-fluid w-100"
                    />
            </div>

            {/* Text */}
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="about-content ps-0 ps-lg-3">
                 <h3 className="below-bar fw-bold">
                                 {cmsData[26]?.heading || loading}
                                </h3>
                               <p dangerouslySetInnerHTML={{ __html: cmsData[26]?.content }}></p>
                                <Button onClick={() => openModal(26)}>Edit</Button>
          
               
              </div>
            </div>

            <div className="col-md-12">
                           <p><b>{cmsData[27]?.heading || loading}</b></p>
                  <ul className="custom-bullet-list" dangerouslySetInnerHTML={{ __html: cmsData[27]?.content }}> 
                    
                  
                  </ul>
                   <Button onClick={() => openModal(27)}>Edit</Button>
<img
                      src={`http://localhost/springfield_react/uploads/${cmsData[27]?.image}`}
                      alt={cmsData[26]?.heading}
                      className="img-fluid w-100"
                    /><br/><br/>
                   
 <h3 className="font-h3">{cmsData[34]?.heading || loading}</h3>

<p
                                  dangerouslySetInnerHTML={{
                                    __html: cmsData[34]?.content || "",
                                  }}
                                ></p>
                                <Button onClick={() => openModal(34)}>Edit</Button>


            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Feature Cards (Benefits) */}
      <section id="why-us" className="why-us section">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
           <div className="why-choose-section">
             <div className="row g-4">
   
               {featureCards.map((card, index) => (
                 <div
                   key={card.id}
                   className="col-lg-6 col-md-12 aos-init aos-animate"
                   data-aos="fade-up"
                   data-aos-delay={200 + index * 50}
                 >
                   <div className="feature-card">
                     <div className="feature-icon">
                       <i className={card.icon}></i>
                     </div>
   
                     <h4 className="below-bar">
                       {cmsData[card.id]?.heading || loading}
                     </h4>
   
                     <p
                       dangerouslySetInnerHTML={{
                         __html: cmsData[card.id]?.content || "",
                       }}
                     ></p>
   
                     <Button onClick={() => openModal(card.id)}>Edit</Button>
                   </div>
                 </div>
               ))}
   
             </div>
           </div>

          {/* Section 3 - Additional Text */}
          <div className="row mt-5">
            <div className="col-lg-12">
              <h3 className="font-h3"> {cmsData[32]?.heading || loading}</h3>
                           <p
                                 dangerouslySetInnerHTML={{
                                   __html: cmsData[32]?.content || "",
                                 }}
                               ></p>
                               <Button onClick={() => openModal(32)}>Edit</Button>

              <div className="product-slider mt-5 mb-5">
                <CommonSlider sliderPreviewCount="4" imageGap="10">
                  <div className="swiper-slide">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/products/bath/1.webp`}
                      className="img-fluid cover-image"
                      alt="Bathroom Cabinet"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/products/bath/2.webp`}
                      className="img-fluid cover-image"
                      alt="Bathroom Cabinet"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/products/bath/3.webp`}
                      className="img-fluid cover-image"
                      alt="Bathroom Cabinet"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/products/bath/4.webp`}
                      className="img-fluid cover-image"
                      alt="Bathroom Cabinet"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/products/bath/5.webp`}
                      className="img-fluid cover-image"
                      alt="Bathroom Cabinet"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/products/bath/6.webp`}
                      className="img-fluid cover-image"
                      alt="Bathroom Cabinet"
                    />
                  </div>
                    <div className="swiper-slide">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/products/bath/7.webp`}
                      className="img-fluid cover-image"
                      alt="Bathroom Cabinet"
                    />
                  </div>
                    <div className="swiper-slide">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/products/bath/8.webp`}
                      className="img-fluid cover-image"
                      alt="Bathroom Cabinet"
                    />
                  </div>
                </CommonSlider>
              </div>

              <h3 className="font-h3">{cmsData[33]?.heading || loading}</h3>
                            <p
                                  dangerouslySetInnerHTML={{
                                    __html: cmsData[33]?.content || "",
                                  }}
                                ></p>
                                <Button onClick={() => openModal(33)}>Edit</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
