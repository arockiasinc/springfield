
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAppData } from "../context/AppContext"
import Button from "../components/Buttons";
import SeoMetaDetails from "../components/SeoMetaDetails";

export default function CabinetDoors() {
  const { cmsData,
    showModal, currentCmsId, openModal, closeModal,updateCms,loading  } = useAppData();
       const handleSave = updateCms; // ⬅ using global updater


  const [doors, setDoors] = useState([]);

  useEffect(() => {
    fetch("http://localhost/springfield_react/admin/api/get_doors.php")
      .then(res => res.json())
      .then(data => setDoors(data))
      .catch(err => console.error(err));
  }, []);

    return <>
    <SeoMetaDetails slug="cabinet-doors"/>
    <div className="page-title aos-init aos-animate" data-aos="fade">
    
      <div className="container">
        <h1 className="text-center">CabinetDoors</h1>
        </div>
        </div>

             <section id="innerpage" className="innerpage section mb-1 pb-1">
  <div className="container">
    <div className="row gy-4" >
          <div className="col-12 mb-4">
           <Button onClick={() => openModal(35)}>Edit</Button>
        <h3 className="below-bar fw-bold">{cmsData[35]?.heading || loading}</h3>
        <p
                                  dangerouslySetInnerHTML={{
                                    __html: cmsData[35]?.content || "",
                                  }}
                                 className="pb-2"></p>
        <Link to="/contact" className="btn btn-cta px-4 py-2 rounded-pill">SCHEDULE A CHAT <i className="bi bi-calendar ms-2"></i></Link>
      </div>
    </div>
    </div>
    </section>

    
<section id="team" className="team section mt-1">
     <Button onClick={() => window.location.href = `http://localhost/springfield_react/admin/cabinet-doors-page.php`}>
                      Edit Doors
            </Button>
        <div className="container">
          <div className="row gy-4 justify-content-center">
         

            {doors.length === 0 && (
              <p className="text-center text-muted">Loading doors...</p>
            )}

            {doors.map((item) => (
              <div key={item.id} className="col-xl-2 col-lg-2 col-md-3">
                <div className="team-card p-1">
                  <div className="profile-image">
                    <img 
                      src={`http://localhost/springfield_react/admin/${item.image_path}`} 
                      className="img-fluid" 
                      alt={item.title} 
                      loading="lazy"
                    />
                    <div className="role-badge">{item.title}</div>
                  </div>
                  <div className="member-info">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
     
        </>
}