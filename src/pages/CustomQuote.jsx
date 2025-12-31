import { Link } from "react-router-dom"
export default function CustomQuote() {
  return <><div className="page-title aos-init aos-animate" data-aos="fade">

    <div className="container">
      <h1 className="text-center">Custom Quote</h1>
    </div> </div>
  <section className="process-flow innerpage section py-5" id="innerpage">
      <div className="container">
         <div className="row gy-4" >

         <h3 className="below-bar fw-bold mt-5 mb-5 text-center m-auto">Our Process <span>( Here's how we do it. )</span></h3>
        <div className="steps-wrapper">

          <div className="step">
            <div className="step-icon"><i className="bi bi-calendar-check"></i></div>
            <div className="step-content">
              <h3>1. Book a Consultation</h3>
              <p>Contact one of our design specialists to book a consultation. Explore our demo kitchens before sitting down with your specialist.</p>
            </div>
            <div className="step-connector"><i className="bi bi-arrow-down-circle"></i></div>
          </div>


          <div className="step">
            <div className="step-icon"><i className="bi bi-grid-3x3-gap"></i></div>
            <div className="step-content">
              <h3>2. Designed to Specification</h3>
              <p>Bring your ideas — we’ll design a plan tailored to your space ensuring your Custom Cabinets fit perfectly.</p>
            </div>
            <div className="step-connector"><i className="bi bi-arrow-down-circle"></i></div>
          </div>


          <div className="step">
            <div className="step-icon"><i className="bi bi-box-seam"></i></div>
            <div className="step-content">
              <h3>3. Choose Your Cabinets</h3>
              <p>All cabinets are handcrafted right here in Manitoba. Choose from a wide range of finishes, hardware, and countertops.</p>
            </div>
            <div className="step-connector"><i className="bi bi-arrow-down-circle"></i></div>
          </div>

          <div className="step">
            <div className="step-icon"><i className="bi bi-cash-coin"></i></div>
            <div className="step-content">
              <h3>4. Pricing</h3>
              <p>We’ll send you a detailed estimate for your project with transparent pricing.</p>
            </div>
            <div className="step-connector"><i className="bi bi-arrow-down-circle"></i></div>
          </div>


          <div className="step">
            <div className="step-icon"><i className="bi bi-hammer"></i></div>
            <div className="step-content">
              <h3>5. Installation</h3>
              <p>Our skilled installation team assembles your cabinets with precision so you can enjoy your new space sooner.</p>
            </div>
          </div>
        </div>

        <div className="cta">
          <Link to="/contact" className="btn-quote">Get a Quote</Link>
        </div>
        </div>
      </div>
    </section>
</>


}