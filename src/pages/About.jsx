import { Link } from "react-router-dom"
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
        </div>
        </div>
         <section id="about" className="about section">
 

  <div className="container">
 

        <div className="row gy-3">

          <div className="col-lg-6">
            <img
                      src={`http://localhost/springfield_react/uploads/${cmsData[46]?.image}`}
                      alt={cmsData[46]?.heading}
                      className="img-fluid"
                    />
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="about-content ps-0 ps-lg-3">
              
              <h3 className="below-bar">{cmsData[46]?.heading || loading}</h3>
              <p
                    dangerouslySetInnerHTML={{
                      __html: cmsData[46]?.content || "",
                    }}
                  ></p>
                   <Button onClick={() => openModal(46)}>Edit</Button>
             
             
            </div>

          </div>
        </div>

        





      </div>

    </section>

    <section id="why-us" className="why-us section">

      <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

    <div className="why-choose-section">
    

          <div className="row g-4">
            <div className="col-lg-12 col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
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
            

         
          </div>
        </div>
      </div>
      </section>
</>
  
    
}