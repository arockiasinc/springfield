
import CommonSlider from "../components/CommonSlider";
import { useAppData } from "../context/AppContext"
import Button from "../components/Buttons";
import SeoMetaDetails from "../components/SeoMetaDetails";


export default function KitchenCabinets() {
  
   const { cmsData,
    showModal, currentCmsId, openModal, closeModal,updateCms,loading  } = useAppData();
       const handleSave = updateCms; // ⬅ using global updater

       const featureCards = [
  { id: 20, icon: "bi bi-palette-fill" },
  { id: 21, icon: "bi bi-box-seam" },
  { id: 22, icon: "bi bi-hammer" },
  { id: 23, icon: "bi bi-rulers" },
];

  return (
    <>
    <SeoMetaDetails slug="kitchen-cabinets" />
      <div className="page-title aos-init aos-animate" data-aos="fade">
        <div className="container">
          <h1 className="text-center">Kitchen Cabinets</h1>
        </div>
      </div>

      {/* Section 1 - Intro with Image and Content */}
      <section id="kitchen-cabinets" className="about section">
        <div className="container">
          <div className="row gy-3">
            {/* Image */}
            <div className="col-lg-6">
             <img
                      src={`http://localhost/springfield_react/uploads/${cmsData[19]?.image}?v=${Date.now()}`}
                      alt={cmsData[19]?.heading}
                      className="img-fluid w-100"
                    />
            </div>

            {/* Text */}
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="about-content ps-0 ps-lg-3">
                <h3 className="below-bar fw-bold">
                 {cmsData[19]?.heading || loading}
                </h3>
               <p dangerouslySetInnerHTML={{ __html: cmsData[19]?.content }}></p>
                <Button onClick={() => openModal(19)}>Edit</Button>
              </div>
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
              <h3 className="font-h3"> {cmsData[24]?.heading || loading}</h3>
              <p
                    dangerouslySetInnerHTML={{
                      __html: cmsData[24]?.content || "",
                    }}
                  ></p>
                  <Button onClick={() => openModal(24)}>Edit</Button>
        <div class="product-slider mt-5  mb-5">
              <CommonSlider sliderPreviewCount ="4" imageGap="10">
                     <div className="swiper-slide">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/products/1.webp`}
              className="img-fluid cover-image"
              alt="PPMA"
            />
          </div>
               <div className="swiper-slide">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/products/2.webp`}
              className="img-fluid cover-image"
              alt="PPMA"
            />
          </div>
                  <div className="swiper-slide">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/products/3.webp`}
              className="img-fluid cover-image"
              alt="PPMA"
            />
          </div>
                  <div className="swiper-slide">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/products/4.webp`}
              className="img-fluid cover-image"
              alt="PPMA"
            />
          </div>
                  <div className="swiper-slide">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/products/5.webp`}
              className="img-fluid cover-image"
              alt="PPMA"
            />
          </div>
                  <div className="swiper-slide">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/products/6.webp`}
              className="img-fluid cover-image"
              alt="PPMA"
            />
          </div>
          
              </CommonSlider>
              </div>

                <h3 className="font-h3">{cmsData[25]?.heading || loading}</h3>
              <p
                    dangerouslySetInnerHTML={{
                      __html: cmsData[25]?.content || "",
                    }}
                  ></p>
                  <Button onClick={() => openModal(25)}>Edit</Button>
            </div>
          </div>
        </div>
      </section>
        
      
    </>
  );
}
