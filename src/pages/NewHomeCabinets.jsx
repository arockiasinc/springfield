import { Link } from "react-router-dom";
import { useAppData } from "../context/AppContext"
import Button from "../components/Buttons";
import SeoMetaDetails from "../components/SeoMetaDetails";

export default function About() {
  const { cmsData,
        showModal, currentCmsId, openModal, closeModal,updateCms,loading  } = useAppData();
           const handleSave = updateCms; // ⬅ using global updater
           
  

  return (
    <>
    <SeoMetaDetails slug="new-home-cabinets" />
      <div className="page-title aos-init aos-animate" data-aos="fade">
        <div className="container">
          <h1 className="text-center">Custom Built Cabinets in Winnipeg</h1>
        </div>
      </div>

      {/* Section 1 - Intro with Image and Content */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-3 mb-1">
            {/* Image */}
            <div className="col-lg-12">
                   <h2 className="below-bar fw-bold mb-4">
             {cmsData[36]?.heading || loading}
                </h2>
                 
                        
                 <img
                      src={`http://localhost/springfield_react/uploads/${cmsData[36]?.image}`}
                      alt={cmsData[36]?.heading}
                      className="img-fluid w-100"
                    /><br/><br/>
               
                        <div
                                  dangerouslySetInnerHTML={{
                                    __html: cmsData[36]?.content || "",
                                  }}
                                 className="pb-2"></div>
                                 <Button onClick={() => openModal(36)}>Edit</Button>
            </div>
          </div>

          {/* Section 2 - Additional Text */}
          <div className="row mt-3">
            <div className="col-lg-12">
              <h3 className="font-h3">{cmsData[37]?.heading || loading}</h3>
              <div
                                  dangerouslySetInnerHTML={{
                                    __html: cmsData[37]?.content || "",
                                  }}
                                ></div>
                                <Button onClick={() => openModal(37)}>Edit</Button>

             
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
