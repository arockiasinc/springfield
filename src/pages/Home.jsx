import { Link } from "react-router-dom"
import SwiperTestimonials from "../components/Swiperconfig"
<<<<<<< HEAD
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
            <div className="col-lg-12">
      <h1 className="text-center fw-bold mb-3">{cmsData[53]?.heading}</h1>
    
             <Button onClick={() => openModal(53)}>Edit</Button>
      </div>
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
               
                <h2 className="below-bar fs-2 lh-base">
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
             <h4 className="below-bar">{cmsData[52]?.heading}</h4><br/>
             <Button onClick={() => openModal(52)}>Edit</Button>
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
              

              <Link to="gallery" className="read-more"><span>View our Gallery page</span><i className="fa fa-long-arrow-right"></i></Link>
            </div>

            {middleSectionIds.map((id, index) => (
              <div
                key={id}
                className="col-lg-3 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={300 + index * 50}
              >

                
                <div className="process-card">
                  <div className="process-img">

                    {/* SHOW IMAGE FROM CMS */}
                    <img
                      src={`http://localhost/springfield_react/uploads/${cmsData[id]?.image}`}
                      alt={cmsData[id]?.heading}
                      className="img-fluid"
                    />

                    <span className="process-number">{cmsData[id]?.heading}</span>
                    <div className="process-overlay"><span className="text-center p-3"
                    dangerouslySetInnerHTML={{
                      __html: cmsData[id]?.content || "",
                    }}
                  ></span></div>
                   
                  </div>
                  



                  <Button onClick={() => openModal(id)}>Edit</Button>

                </div>



              
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
=======
import ClientsSection from "../components/ClientsSection"
import KitchenSlider from "../components/KitchenSlider"
export default function Home(){

    return (
     <>

      
    <section id="hero" class="hero section dark-background">

      <div className="hero-container">
       <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://pub-ba3e33c5ce6d448c94c74e4cb947da32.r2.dev/sfww-banner-video.mp4"
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
            <img src={`${process.env.PUBLIC_URL}/assets/images/m2.jpg`}  alt="" className="img-fluid"/>
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="about-content ps-0 ps-lg-3">
              <h6>ABOUT US</h6>
              <h2 className="below-bar">We don't just build cabinets; we craft the heart of your home, where memories are made and cherished.</h2>
              <p>
                Learn why more people are choosing to use Springfield Woodworking. It's not just quality cabinets and solid workmanship that are driving people to choose us for custom cabinets in Winnipeg. Attention to deadlines and clear communication throughout your entire kitchen cabinet or bathroom vanities project are reasons why most people choose to work with us. Don't just take it from us, hear it from our customers and read our testimonials.
              </p>
             
              <Link to="about" className="read-more"><span>ABOUT US</span><i className="fa fa-long-arrow-right"></i></Link>
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
                      <h4>Friendly & skilled workers</h4>
                      <p>Nunc a egestas lacus. Lorem ipsum dolor sit amet larmus & gravida.</p>
                    </div>
                  </div>
                   <div className="transport-item">
                    <div className="circle-text ">
                   <i className="fa ti-paint-roller faa-vertical animated-hover"></i></div>
                    <div className="details">
                      <h4>Eco friendly kitchen</h4>
                      <p>Nunc a egestas lacus. Lorem ipsum dolor sit amet larmus & gravida.</p>
                    </div>
                  </div>
                 <div className="transport-item">
                    <div className="circle-text ">
                   <i className="fa ti-ruler-pencil faa-shake animated-hover"></i></div>
                    <div className="details">
                      <h4>Get a personal estimate</h4>
                      <p>Nunc a egestas lacus. Lorem ipsum dolor sit amet larmus & gravida.</p>
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
              <h6 className="text-white">WHAT WE DO</h6>
              <h2 className="below-bar text-white mb-3">Transform Your Home.</h2>
                <h3 className="text-white mb-3">CustomBuilt cabinets</h3>
              <p className="text-white text-justify">
                 It is a long established fact that reader will be distracted by the readable content of page when looking at its layout or not & do.
              </p>
             
           <a href="#" className="read-more"><span>MORE SERVICES</span><i className="fa fa-long-arrow-right"></i></a>
           </div>
         <div className="col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <article className="stack-card">
              <figure className="stack-media">
                <img src={`${process.env.PUBLIC_URL}/assets/img/services/ser_m_1.jpg`} alt="Modern Facade" className="img-fluid" loading="lazy"/>
                <figcaption>
                  <span className="chip hot">Remodeling</span>
                </figcaption>
              </figure>
        
            </article>
          </div>

          <div className="col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="350">
            <article className="stack-card">
              <figure className="stack-media">
                <img src={`${process.env.PUBLIC_URL}/assets/img/services/ser_m_2.jpg`} alt="Cozy Interior" className="img-fluid" loading="lazy"/>
                <figcaption>
                  <span className="chip hot">Appliances</span>
                </figcaption>
              </figure>
         
            </article>
          </div>

          <div className="col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <article className="stack-card">
              <figure className="stack-media">
                <img src={`${process.env.PUBLIC_URL}/assets/img/services/ser_m_3.jpg`} alt="Garden Home" className="img-fluid" loading="lazy"/>
                <figcaption>
                  <span className="chip hot">Design</span>
                </figcaption>
              </figure>
        
            </article>
          </div>
        </div>
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2

      </div>
    </section>

<<<<<<< HEAD






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
=======
   

   <section className="working-process py-5">
  <div className="container text-center">
    <h2 className="fw-bold mb-3">Our Working Process</h2>
    <p className="text-muted mb-5 below-bar">
      A business process or business method is a collection of related, <br/>structured activities or tasks by people.
    </p>

    <div className="row justify-content-center g-4">

      <div className="col-lg-3 col-md-6">
        <div className="process-card">
          <div className="process-img">
            <img src={`${process.env.PUBLIC_URL}/assets/img/services/ser_m_1.jpg`} alt="Design consultation" className="img-fluid" loading="lazy"/>
            <span className="process-number">01</span>
            <div className="process-overlay">
              <span>SCHEDULE A MEETING</span>
            </div>
          </div>
          <h5 className="mt-4 mb-3">01 / Design consultation</h5>
          <p className="text-muted">
            Nunc a egestas lacus. Lorem ipsum dolor sit amet iarmus & gravida.
          </p>
        </div>
      </div>

   
      <div className="col-lg-3 col-md-6">
        <div className="process-card">
          <div className="process-img">
            <img src={`${process.env.PUBLIC_URL}/assets/img/services/ser_m_2.jpg`} alt="Pick your style" className="img-fluid" loading="lazy"/>
            <span className="process-number">02</span>
            <div className="process-overlay">
              <span>YOUR PERFECT STYLE</span>
            </div>
          </div>
          <h5 className="mt-4 mb-3">02 / Pick your style</h5>
          <p className="text-muted">
            Nullam vitae ex finibus, consectetur enim eget, blandit elit & amet dolor.
          </p>
        </div>
      </div>

    
      <div className="col-lg-3 col-md-6">
        <div className="process-card">
          <div className="process-img">
            <img src={`${process.env.PUBLIC_URL}/assets/img/services/ser_m_3.jpg`} alt="Kitchen installation" className="img-fluid" loading="lazy"/>
            <span className="process-number">03</span>
            <div className="process-overlay">
              <span>CABINETS INSTALLATION</span>
            </div>
          </div>
          <h5 className="mt-4 mb-3">03 / Kitchen installation</h5>
          <p className="text-muted">
            Nunc a egestas lacus. Lorem ipsum dolor sit amet iarmus & gravida.
          </p>
        </div>
      </div>

    
      <div className="col-lg-3 col-md-6">
        <div className="process-card">
          <div className="process-img">
            <img src={`${process.env.PUBLIC_URL}/assets/img/services/ser_m_3.jpg`} alt="Kitchen clean-up" className="img-fluid" loading="lazy"/>
            <span className="process-number">04</span>
            <div className="process-overlay">
              <span>CABINETS CLEAN-UP</span>
            </div>
          </div>
          <h5 className="mt-4 mb-3">04 / Kitchen clean-up</h5>
          <p className="text-muted">
            Nullam vitae ex finibus, consectetur enim eget, blandit elit & amet dolor.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="promo-video-section">
  <div className="container">
    <div className="row align-items-center">
      
     
      <div className="col-lg-6">
        <div className="promo-content">
          
          <h2 className="promo-title text-white below-bar">The world's most desirable kitchens</h2>
          <p className="promo-tagline">Take a look inside.</p>
          <p className="promo-description">
            Lectus scelerisque, risus purus pellentesque, phasellus proin. NNam cras sit, 
            phasellus facilisis commodo phasellus & dolor.
          </p>
          <a href="#" className="promo-btn">
            More Videos <i className="bi bi-play-fill"></i>
          </a>
        </div>
      </div>

    
      <div className="col-lg-6">
        <div className="promo-video">
          <img src={`${process.env.PUBLIC_URL}/assets/img/services/m2.jpg`} alt="Kitchen Video" className="img-fluid"/>
          <a href="#" className="promo-play-btn"><i className="bi bi-play-fill"></i></a>
        </div>
      </div>

    </div>
  </div>
</section>


<section className="design-stats-section mt-1 mb-1">

    <div className="container">
        <div className="row g-0 design-stats-bar">
            <div className="col-sm-4 design-stat-item">
                <span className="design-stat-number purecounter"  data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1">32</span>
                <span className="design-stat-label">Years experience</span>
            </div>
            <div className="col-sm-4 design-stat-item">
                <span className="design-stat-number purecounter"  data-purecounter-start="0" data-purecounter-end="5000" data-purecounter-duration="2">5K</span>
                <span className="design-stat-label">Happy customers</span>
            </div>
            <div className="col-sm-4 design-stat-item">
                <span className="design-stat-number">
  <span className="purecounter" 
        data-purecounter-start="0" 
        data-purecounter-end="200" 
        data-purecounter-duration="2">200</span>+
</span>
                <span className="design-stat-label">New designs</span>
            </div>
        </div>
    </div>

    <div className="container design-intro-container">
        <div className="row align-items-center">
            
            <div className="col-lg-9 col-md-8 design-text-col">
                <p className="design-heading-small">PROJECTS</p>
                <h2 className="design-heading-large">
                    Explore our Award-Winning designs.
                </h2>
                <div className="design-underline"></div>
            </div>

            <div className="col-lg-3 col-md-4 design-button-col text-md-end text-start mt-4 mt-md-0">
                <a href="#" className="btn design-more-button">MORE DESIGNS</a>
            </div>

        </div>
    </div>
</section>


   <section id="testimonials" className="testimonials section dark-background">
  <img src={`${process.env.PUBLIC_URL}/assets/img/testimonials-bg.jpg`} className="testimonials-bg" alt="" />

  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <SwiperTestimonials />
  </div>
</section>

 
        
      <ClientsSection/>
           

  

     <section className="kitchen-slider-section py-5">
  <div className="container">
    <KitchenSlider/>
  </div>
</section>


<section className="latest-news py-5">
  <div className="container">
    <div className="lign-items-center mb-4">
      <h2 className="fw-bold mb-0 text-center">Made in Manitoba</h2>
     
    </div>

    <div className="row g-4">
     
      <div className="col-lg-4 col-md-6">
        <div className="news-card shadow-sm rounded-3 overflow-hidden h-100">
          <div className="position-relative">
            <img src={`${process.env.PUBLIC_URL}/assets/img/services/argup9-600x360.jpg`} 
                 alt="Custom Kitchen Cabinets" 
                 className="img-fluid w-100"/>
          </div>
          <div className="p-4">
            <h5 className="fw-bold mb-2">Custom Kitchen Cabinets</h5>
            <p className="text-muted mb-0">
              At Springfield Woodworking, all our cabinets are custom made — built for you as per your style and needs.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="news-card shadow-sm rounded-3 overflow-hidden h-100">
          <div className="position-relative">
            <img src={`${process.env.PUBLIC_URL}/assets/img/services/argup9-600x360.jpg`}
                 alt="Bathroom Cabinets" 
                 className="img-fluid w-100"/>
          </div>
          <div className="p-4">
            <h5 className="fw-bold mb-2">Bathroom Cabinets</h5>
            <p className="text-muted mb-0">
              We offer hundreds of options when it comes to cabinets for your bathrooms and laundry rooms.
            </p>
          </div>
        </div>
      </div>


      <div className="col-lg-4 col-md-6">
        <div className="news-card shadow-sm rounded-3 overflow-hidden h-100">
          <div className="position-relative">
            <img src={`${process.env.PUBLIC_URL}/assets/img/services/argup9-600x360.jpg`} 
                 alt="All Types of Cabinets" 
                 className="img-fluid w-100"/>
          </div>
          <div className="p-4">
            <h5 className="fw-bold mb-2">All Types of Cabinets</h5>
            <p className="text-muted mb-0">
              Custom cabinets for home offices, bathrooms, display areas, wall-to-wall setups, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


   


    <section id="contact" className="contact section">

   
      <div className="container section-title">
        <h2>Contact</h2>
        <p><span>Need Help?</span> <span className="description-title">Contact Us</span></p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

     

          <div className="col-lg-12">
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">

                <div className="col-md-4">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" className="form-control" required=""/>
                </div>

                <div className="col-md-4">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email-field" required=""/>
                </div>

                <div className="col-md-4">
                  <label htmlFor="phone" className="pb-2">Phone</label>
                  <input type="text" className="form-control" name="phone" id="subject-field" required=""/>
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea className="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

    </section>

    <section className="cta-section text-center text-white py-5">
  <div className="container">
    <h2 className="mb-3 text-white">We can build you the kitchen of your dreams</h2>
    <p className="lead text-muted-light mb-4">You dream it, we design it.</p>
    <a href="#" className="btn btn-cta px-4 py-2 rounded-pill">
      SCHEDULE A CHAT <i className="bi bi-calendar ms-2"></i>
    </a>
  </div>
</section>


    


</>

    )
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2
}