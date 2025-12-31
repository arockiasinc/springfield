import { useAppData } from "../context/AppContext";
import Button from "../components/Buttons";
import SeoMetaDetails from "../components/SeoMetaDetails";

export default function GetStarted() {
  const { cmsData, openModal, loading } = useAppData();

  // CMS IDs for each card
  const steps = [38, 39, 40, 41, 42, 43, 44, 45];

  // Matching icons for each step
  const icons = [
    "bi bi-rulers",
    "bi bi-door-closed-fill",
    "bi bi-window",
    "bi bi-arrows-vertical",
    "bi bi-droplet-half",
    "bi bi-hdd-stack-fill",
    "bi bi-lightning-fill",
    "bi bi-arrow-up"
  ];

  return (
    <>
    <SeoMetaDetails slug="get-started" />
      <div className="page-title aos-init aos-animate" data-aos="fade">
        <div className="container">
          <h1 className="text-center">Get Started</h1>
        </div>
      </div>

      <section id="innerpage" className="innerpage section py-5">
        <div className="container">
          <div className="row gy-4">
            
            {/* Page Heading */}
            <div className="col-12 mb-4">
              <h3 className="below-bar fw-bold">Kitchen Measuring Guide</h3>
            </div>

            {/* Banner Image */}
            <div className="col-md-12 col-lg-12" data-aos-delay="450">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/kitchen-countertops-springfield-woodworking-winnipeg.jpg`}
                alt=""
                className="img-fluid mx-auto d-block mt-5 mb-5"
              />
            </div>

            {/* Dynamic Steps */}
            {steps.map((id, index) => (
              <div
                key={id}
                className="col-md-6 col-lg-4"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="feature-box p-4 border rounded-4 shadow-sm h-100">
                  
                  {/* Icon */}
                  <div className="feature-icon mb-3 text-primary fs-3">
                    <i className={icons[index]}></i>
                  </div>

                  {/* Content */}
                  <h5>{cmsData[id]?.heading || "Loading..."}</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: cmsData[id]?.content || "",
                    }}
                  ></p>

                  {/* Edit Button */}
                  <Button onClick={() => openModal(id)}>Edit</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
