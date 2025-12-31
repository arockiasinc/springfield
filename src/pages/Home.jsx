import { Link } from "react-router-dom"
import SwiperTestimonials from "../components/Swiperconfig"
import { useState, useEffect } from "react"
import CommonSlider from "../components/CommonSlider"
import ContactForm from "../components/ContactForm"
import Backdrop from "../components/Backdrop"
import ModalBox from "../components/ModalBox"
import Button from "../components/Buttons"
import { useAppData } from "../context/AppContext"
export default function Home() {

    const { 
    cmsData, logos, loading, updateCms,
    showModal, currentCmsId, openModal, closeModal 
  } = useAppData();


  

   const handleSave = updateCms; // ⬅ using global updater


  const processIds = [5, 6, 7, 8];
  const featuresIds = [9, 10, 11]
  const middleSectionIds = [16, 17, 18];

  return (
    <>


      <section id="hero" className="hero section dark-background">

        <div className="hero-container">
          <video
            className="video-background"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://pub-ba3e33c5ce6d448c94c74e4cb947da32.r2.dev/sfww-updated.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>


        </div>
      </section>
      <section id="about" className="about section">



        <div className="container">

          <div className="row gy-3">

            <div className="col-lg-6">
              <CommonSlider sliderPreviewCount="1" imageGap="0">
                <div className="swiper-slide">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/products/about/1.webp`} alt="" className="img-fluid" />
                </div>
                <div className="swiper-slide">
                  <img src={`${process.env.PUBLIC_URL}//assets/images/products/about/2.webp`} alt="" className="img-fluid" />
                </div>
                <div className="swiper-slide">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/products/about/3.webp`} alt="" className="img-fluid" />
                </div>
                <div className="swiper-slide">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/products/about/4.webp`} alt="" className="img-fluid" />
                </div>
                <div className="swiper-slide">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/products/about/5.webp`} alt="" className="img-fluid" />
                </div>
              </CommonSlider>
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="about-content ps-0 ps-lg-3">
                <h6>ABOUT US</h6>
                <h2 className="below-bar">
                  {cmsData[1]?.heading || "Loading..."}
                </h2>

                <p
                  dangerouslySetInnerHTML={{
                    __html: cmsData[1]?.content || "Loading content...",
                  }}
                ></p>

                {/* EDIT BUTTON FOR SECTION 1 */}
                <Button onClick={() => openModal(1)}>Edit</Button>

             


              </div>
            </div>
          </div>

          <div className="row gy-3 mt-4">
            <div className="transportation-info aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">

              <div className="transport-grid">
                <div className="transport-item">
                  <div className="circle-text ">
                    <i className="ti-cup faa-ring animated-hover"></i></div>
                  <div className="details">
                    <h4>{cmsData[2]?.heading}</h4>
                    <p dangerouslySetInnerHTML={{ __html: cmsData[2]?.content }}></p>

                    {/* EDIT BUTTON FOR SECTION 2 */}
                    <Button onClick={() => openModal(2)}>Edit</Button>
                  </div>
                </div>
                <div className="transport-item">
                  <div className="circle-text ">
                    <i className="fa ti-paint-roller faa-vertical animated-hover"></i></div>
                  <div className="details">
                    <h4>{cmsData[3]?.heading}</h4>
                    <p dangerouslySetInnerHTML={{ __html: cmsData[3]?.content }}></p>

                    {/* EDIT BUTTON FOR SECTION 2 */}
                    <Button onClick={() => openModal(3)}>Edit</Button>

                  </div>
                </div>
                <div className="transport-item">
                  <div className="circle-text ">
                    <i className="fa ti-ruler-pencil faa-shake animated-hover"></i></div>
                  <div className="details">
                    <div className="details">
                      <h4>{cmsData[4]?.heading}</h4>
                      <p dangerouslySetInnerHTML={{ __html: cmsData[4]?.content }}></p>

                      {/* EDIT BUTTON FOR SECTION 2 */}
                      <Button onClick={() => openModal(4)}>Edit</Button>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>



      <section className="call-to-action-1 call-to-action section featured-properties py-5" id="call-to-action">
        <div className="cta-bg"></div>
        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-8">
              <h6 className="text-white">{cmsData[13]?.heading}</h6>
              <h2 className="below-bar text-white mb-3">{cmsData[13]?.content}</h2>
              <Button onClick={() => openModal(13)}>Edit</Button>
              <h3 className="text-white mb-3">{cmsData[14]?.heading || <p>Loading Content</p>}</h3>
              <p className="text-white text-justify">
                {cmsData[14]?.content}
              </p>
              <Button onClick={() => openModal(14)}>Edit</Button>

              <Link to="gallery" className="read-more"><span>View our Gallery page</span><i className="fa fa-long-arrow-right"></i></Link>
            </div>

            {middleSectionIds.map((id, index) => (
              <div
                key={id}
                className="col-lg-3 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={300 + index * 50}
              >
                <article className="stack-card">
                  <figure className="stack-media">

                    {/* SHOW IMAGE FROM CMS */}
                    <img
                      src={`http://localhost/springfield_react/uploads/${cmsData[id]?.image}`}
                      alt={cmsData[id]?.heading}
                      className="img-fluid w-100"
                    />

                    <figcaption>
                      <span className="chip hot">{cmsData[id]?.heading}</span>
                    </figcaption>
                  </figure>



                  <Button onClick={() => openModal(id)}>Edit</Button>

                </article>
              </div>
            ))}


          </div>

        </div>
      </section>



      <section className="working-process py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">{cmsData[15]?.heading}</h2>

          <Button onClick={() => openModal(15)}>Edit</Button>

          <div className="row justify-content-center g-4">
            {processIds.map((id, index) => (
              <div key={id} className="col-lg-3 col-md-6">
                <div className="process-card">
                  <div className="process-img">

                    {/* SHOW IMAGE ONLY IF EXISTS */}
                    {cmsData[id]?.image && (
                      <img
                        src={`http://localhost/springfield_react/uploads/${cmsData[id].image}`}
                        alt=""
                        loading="lazy"
                        className="img-fluid"
                      />
                    )}

                    <span className="process-number">{String(index + 1).padStart(2, '0')}</span>

                    <div className="process-overlay">
                      <span>{cmsData[id]?.heading}</span>
                    </div>
                  </div>

                  <h5 className="mt-4 mb-3">
                    {String(index + 1).padStart(2, '0')} / {cmsData[id]?.heading}
                  </h5>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: cmsData[id]?.content || "",
                    }}
                  ></p>

                  <Button onClick={() => openModal(id)}>Edit</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      <section id="testimonials" className="testimonials section dark-background">
        <img src={`${process.env.PUBLIC_URL}/assets/img/testimonials-bg.jpg`} className="testimonials-bg" alt="" />

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          
          <SwiperTestimonials />
          <Button onClick={() => window.location.href = `http://localhost/springfield_react/admin/testimonials.php`}>
          Edit
</Button>
        </div>
      </section>



       <section id="clients" className="clients-section py-5" data-aos="fade-up">
      <div className="container">

        <CommonSlider sliderPreviewCount="6" imageGap="80">
          {logos.map((item) => (
            <div className="swiper-slide" key={item.id}>
              <img
                src={`http://localhost/springfield_react/admin/uploads/client_slider/${item.image}`}
                className="img-fluid"
                alt={item.title || "Client Logo"}
              />
            </div>
          ))}
         
        </CommonSlider>
         <Button onClick={() => window.location.href = `http://localhost/springfield_react/admin/client-section-slider.php`}>
          Edit
</Button>

      </div>
    </section>







      <section className="latest-news py-5">
        <div className="container">
          <div className="lign-items-center mb-4">
            <h2 className="fw-bold mb-0 text-center">Made in Manitoba</h2>
          </div>

          <div className="row g-4">
            {featuresIds.map((id) => (
              <div key={id} className="col-lg-4 col-md-6">
                <div className="news-card shadow-sm rounded-3 overflow-hidden h-100">

                  <div className="position-relative">
                    {cmsData[id]?.image ? (
                      <img
                        src={`http://localhost/springfield_react/uploads/${cmsData[id].image}`}
                        alt={cmsData[id]?.heading}
                        className="img-fluid w-100"
                      />
                    ) : (
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/placeholder.webp`}
                        alt="Placeholder"
                        className="img-fluid w-100"
                      />
                    )}
                  </div>

                  <div className="p-4">
                    <h5 className="fw-bold mb-2">{cmsData[id]?.heading}</h5>

                    <p
                      className="text-muted mb-0"
                      dangerouslySetInnerHTML={{ __html: cmsData[id]?.content }}
                    ></p>
                  </div>

                  <Button onClick={() => openModal(id)}>
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      <ContactForm />

      <section className="cta-section text-center text-white py-5">
        <div className="container">





          <h2 className="mb-3 text-white"> {cmsData[12]?.heading || "Loading..."}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: cmsData[12]?.content || "Loading content...",
            }}
            className="lead text-muted-light mb-4"></p>

          <Link to="contact" className="btn btn-cta px-4 py-2 rounded-pill">
            Book an appointment <i className="bi bi-calendar ms-2"></i>
          </Link>

          <Button onClick={() => openModal(11)}>Edit</Button>
        </div>
      </section>





    </>

  )
}