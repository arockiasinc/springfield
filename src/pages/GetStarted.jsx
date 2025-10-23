export default function GetStarted() {
    return <><div className="page-title aos-init aos-animate" data-aos="fade">

        <div className="container">
            <h1 className="text-center">Get Started</h1>
        </div> </div>


        
      <section id="innerpage" className="innerpage section py-5">
  <div className="container">
    <div className="row gy-4" >
      <div className="col-12 mb-4">
        <h3 className="below-bar fw-bold">Kitchen Measuring Guide</h3>
        
      </div>
<div className="col-md-12 col-lg-12"  data-aos-delay="450">
    <img src={`${process.env.PUBLIC_URL}/assets/images/kitchen-countertops-springfield-woodworking-winnipeg.jpg`}  alt="" className="img-fluid mx-auto d-block mt-5 mb-5"/>
      
      </div>
      {/* Step 1 */}
      <div className="col-md-6 col-lg-4"  data-aos-delay="100">
        <div className="feature-box p-4 border rounded-4 shadow-sm h-100">
          <div className="feature-icon mb-3 text-primary fs-3">
            <i className="bi bi-rulers"></i>
          </div>
          <h5>1. Walls</h5>
          <p>Measure along all walls corner to corner.</p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="col-md-6 col-lg-4"  data-aos-delay="150">
        <div className="feature-box p-4 border rounded-4 shadow-sm h-100">
          <div className="feature-icon mb-3 text-primary fs-3">
            <i className="bi bi-door-closed-fill"></i>
          </div>
          <h5>2. Doors</h5>
          <p>
            Measure from corner to outside edge of the door casing. Measure door from outside trim to outside trim (if there is trim on the door).
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="col-md-6 col-lg-4"  data-aos-delay="200">
        <div className="feature-box p-4 border rounded-4 shadow-sm h-100">
          <div className="feature-icon mb-3 text-primary fs-3">
            <i className="bi bi-window"></i>
          </div>
          <h5>3. Window Width</h5>
          <p>
            Measure from corner to outside edge of window trim. Measure window outside of trim to outside of trim.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="col-md-6 col-lg-4"  data-aos-delay="250">
        <div className="feature-box p-4 border rounded-4 shadow-sm h-100">
          <div className="feature-icon mb-3 text-primary fs-3">
            <i className="bi bi-arrows-vertical"></i>
          </div>
          <h5>4. Window Height</h5>
          <p>
            Measure window from floor to outside of window trim. Measure the height of window from outside of trim to outside trim.
          </p>
        </div>
      </div>

      {/* Step 5 */}
      <div className="col-md-6 col-lg-4"  data-aos-delay="300">
        <div className="feature-box p-4 border rounded-4 shadow-sm h-100">
          <div className="feature-icon mb-3 text-primary fs-3">
            <i className="bi bi-droplet-half"></i>
          </div>
          <h5>5. Sink Center</h5>
          <p>Measure from the corner to the center of your sink.</p>
        </div>
      </div>

      {/* Step 6 */}
      <div className="col-md-6 col-lg-4"  data-aos-delay="350">
        <div className="feature-box p-4 border rounded-4 shadow-sm h-100">
          <div className="feature-icon mb-3 text-primary fs-3">
            <i className="bi bi-hdd-stack-fill"></i>
          </div>
          <h5>6. Appliance Location</h5>
          <p>
            If you are keeping your appliances, measure the width, height and depth of all of your appliances (fridge, stove, dishwasher, microwave). 
            Measure from the corner to the edge of each appliance to note its location on the wall. 
            If purchasing new appliance bring the new specifications with your measurements.
          </p>
        </div>
      </div>

      {/* Step 7 */}
      <div className="col-md-6 col-lg-4"  data-aos-delay="400">
        <div className="feature-box p-4 border rounded-4 shadow-sm h-100">
          <div className="feature-icon mb-3 text-primary fs-3">
            <i className="bi bi-lightning-fill"></i>
          </div>
          <h5>7. Outlets, Switches and Vents</h5>
          <p>
            Measure from the corner to any outlets, switches or vents that may interfere with the cabinet design.
          </p>
        </div>
      </div>

      {/* Step 8 */}
      <div className="col-md-6 col-lg-4"  data-aos-delay="450">
        <div className="feature-box p-4 border rounded-4 shadow-sm h-100">
          <div className="feature-icon mb-3 text-primary fs-3">
            <i className="bi bi-arrow-up"></i>
          </div>
          <h5>8. Ceiling Height</h5>
          <p>
            Measure from the floor to the ceiling. If there are bulkheads measure from the floor to the bottom of the bulkhead, 
            also the height and width of the bulkhead.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

    </>


}