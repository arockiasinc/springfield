import { Link } from "react-router-dom"
<<<<<<< HEAD
import { useAppData } from "../context/AppContext";
import Button from "../components/Buttons";


export default function About(){
    const { cmsData, openModal, loading } = useAppData();
    // CMS mapped IDs
  const blocks = [48, 49, 50, 51];

  // Corresponding icons in same order
  const icons = [
    "bi bi-lightbulb-fill",
    "bi bi-tools",
    "bi bi-people-fill",
    "bi bi-house-door-fill"
  ];



    return <><div className="page-title aos-init aos-animate" data-aos="fade">
    
      <div className="container">
        <h1 className="text-center">About</h1>
=======
export default function About(){
    return <><div className="page-title aos-init aos-animate" data-aos="fade">
    
      <div className="container">
        <h1>About</h1>
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2
        </div>
        </div>
         <section id="about" className="about section">
 

  <div className="container">
 

        <div className="row gy-3">

          <div className="col-lg-6">
<<<<<<< HEAD
           <img
                      src={`http://localhost/springfield_react/uploads/${cmsData[46]?.image}`}
                      alt={cmsData[46]?.heading}
                      className="img-fluid"
                    />
=======
            <img src={`${process.env.PUBLIC_URL}/assets/images/Custom-Cabinets-Winnipeg.jpg`}  alt="" className="img-fluid"/>
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="about-content ps-0 ps-lg-3">
              
<<<<<<< HEAD
              <h3 className="below-bar">{cmsData[46]?.heading || loading}</h3>
              <p
                    dangerouslySetInnerHTML={{
                      __html: cmsData[46]?.content || "",
                    }}
                  ></p>
                   <Button onClick={() => openModal(46)}>Edit</Button>
=======
              <h3 className="below-bar">Get a beautiful new kitchen in Manitoba from Springfield Woodworking</h3>
              <p>Springfield Woodworking is based out of the Springfield Hutterite Colony, a rural community of roughly 110 people located east of Winnipeg, Manitoba. Although the company's <Link to="contact">70,000 square foot shop</Link> is home to 60 employees and can produce 100 to 150 cabinets a day, the cabinet business is only one of the community's economic activities.</p>
                    <p>At Springfield Woodworking, we blend the best of traditional techniques and workmanship with modern materials and designs. We build custom cabinets in Manitoba for installation in homes, from Saskatchewan to Western Ontario. Our cabinets and countertops are beautiful, solid, and built to last.</p>
                    <p>Come visit our showroom in Winnipeg; our knowledgeable staff will help you choose the options that are right for your home and your budget. We have a huge range of wood species to choose from for cabinets and countertops; we even offer lightweight quartz counters! If you'd like to know more about our services give us a <Link to="tel:+1-204-222-8797;">call today!</Link></p> 
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2
             
             
            </div>

          </div>
        </div>

        





      </div>

    </section>

<<<<<<< HEAD
    <section id="why-us" className="why-us section">

      <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
=======
    <section id="why-us" class="why-us section">

      <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2

    <div className="why-choose-section">
    

          <div className="row g-4">
            <div className="col-lg-12 col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
<<<<<<< HEAD
               <img
                      src={`http://localhost/springfield_react/uploads/${cmsData[47]?.image}`}
                      alt={cmsData[47]?.heading}
                      className="img-fluid"
                    />
                    <Button onClick={() => openModal(47)}>Edit</Button>
            </div>
            {blocks.map((id, index) => (
        <div
          key={id}
          className="col-lg-6 col-md-12 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={200 + (index * 50)}
        >
          <div className="feature-card">
            
            {/* ICON */}
            <div className="feature-icon">
              <i className={icons[index]}></i>
            </div>

            {/* HEADING */}
            <h4 className="below-bar">
              {cmsData[id]?.heading || "Loading..."}
            </h4>

            {/* CONTENT (supports paragraphs/HTML) */}
            <div
              className="text-left"
              dangerouslySetInnerHTML={{
                __html: cmsData[id]?.content || "",
              }}
            ></div>

            {/* EDIT BUTTON */}
            <Button className="mt-3" onClick={() => openModal(id)}>
              Edit
            </Button>

          </div>
        </div>
      ))}
=======
                <img src={`${process.env.PUBLIC_URL}/assets/images/about-us.webp`}  alt="" className="img-fluid"/>
            </div>
            <div className="col-lg-6 col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-card">
                   <div className="feature-icon">
                  <i className="bi bi-lightbulb-fill"></i>
                </div>
                <h4 className="below-bar">Self-sufficiency: A Recipe For Success</h4>
                <p className="text-left pb-2">Hutterite colonies, including Springfield, strive to be as self-sufficient as possible, and to that end the Springfield Colony also has a heavy agricultural focus, including a large-scale chicken operation, a hog farm, and 6,000 acres of soybeans, wheat, canola and barley (there are 130 Hutterite colonies in Manitoba, with others in Saskatchewan and Alberta, and in the northern Great Plains in the United States. See <a href="http://www.hutterites.org/" target="_blank">www.hutterites.org</a> for more history).</p>	
                    <p className="text-left">Springfield's cabinet business embraces technology while at the same time valuing a long-standing woodworking tradition. "When we came to America, we were not farmers. We were craftsmen and tradespeople," says Pauly Kleinsasser, general manager of Springfield Woodworking.</p>  
              </div>
            </div>

            <div className="col-lg-6 col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="250">
              <div className="feature-card">
                  <div className="feature-icon">
                  <i className="bi bi-tools"></i>
                </div>
                <h4 className="below-bar">Custom Cabinets, Springfield</h4>
                <p className="text-left pb-2">The woodworking operation started at Springfield in 1996 with hand-made furniture, then moved into cabinets, which became the complete focus by 2002. "We started our business with custom bedroom furniture, and we thought this will always be a hobby shop, but it grew into a massive business," Kleinsasser says. "Quality, honesty, and having a sense of humour made this business grow into our livelihood".</p>
                <p className="text-left">Two Anderson CNC routers cut, drill, and optimize all parts in the shop. Springfield also does hand sanding, and has a Timesavers sander, Unique shaper/sander with Doucet return conveyor, SCM T130 shaper, and JLT Clamps clamp carrier. Other technology in the shop includes a Mereen-Johnson ripsaw, two Martin sliding table saws, an Altendorf table saw, an IMA Advantage 400 edgebander, a Gannomat Index 130 dowel inserter, and three Gannomat Concept 70 ECO case clamps. A TigerStop optimizing saw with defecting system was also added recently.</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card">
                 <div className="feature-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h4 className="below-bar">Right People, Right Results</h4>
                <p className="text-left pb-2">Kleinsasser says the right people are also the key to a company's success, and many of the employees have worked there for 10 years or more. Twenty-five community members work in the shop, while others are hired from outside the colony.</p>
                <p className="text-left">Younger colony members are rotated into different jobs and may have experience in the blacksmith shop, mechanic shop, hog barn or the cabinet shop. "When I was growing up, every winter I was assigned to a different job," Kleinsasser says. "Wherever you are, you learn how to solve problems. You know a little about everything."</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="350">
              <div className="feature-card">
                  <div className="feature-icon">
                  <i className="bi bi-house-door-fill"></i>
                </div>
                <h4 className="below-bar">Cabinetry in Cottage Country</h4>
                <p className="text-left">Many customers come to Springfield through word-of-mouth referrals. They include contractors, home builders, renovation specialists and a few dealers. A retail showroom in nearby Winnipeg has been open for several years, while the company also sells cabinets in Kenora, Ontario, and does a lot of summer cottage work in that vacation area.</p>
              </div>
            </div>

>>>>>>> 292e1e61ee1a12937c94c464753a3820184f34d2
            

         
          </div>
        </div>
      </div>
      </section>
</>
  
    
}