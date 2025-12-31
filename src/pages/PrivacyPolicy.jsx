import { Link } from "react-router-dom";
import Cards from "../components/Cards";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Page Title */}
      <div className="page-title aos-init aos-animate" data-aos="fade">
        <div className="container">
          <h1 className="text-center">Privacy Policy</h1>
        </div>
      </div>

      {/* Privacy Policy Section */}
      <section id="privacy" className="privacy section">
        <div className="container aos-init aos-animate">
          <div className="row g-4">

            {/* 1. Sites Covered */}
            <div className="col-lg-6 col-md-12"  data-aos-delay="100">
              <Cards>
                <div className="feature-icon"><i className="bi bi-globe"></i></div>
                <h4 className="below-bar">Sites Covered by this Policy Statement</h4>
                <p>
                  This Privacy Statement applies to all Springfield Woodworking owned websites and subsidiaries.
                  These websites may contain links to third-party sites. If you follow those links,
                  you will leave the Springfield Woodworking website. We do not control or endorse third-party
                  sites, and their privacy practices may differ. Please review their privacy policies before
                  sharing personal data.
                </p>
            </Cards>
            </div>

            {/* 2. Information Collected */}
            <div className="col-lg-6 col-md-12"  data-aos-delay="150">
                <Cards>
                <div className="feature-icon"><i className="bi bi-person-lines-fill"></i></div>
                <h4 className="below-bar">Types of Information We Collect</h4>
                <p>
                  We collect both personal and non-personal data. Personal information includes details like
                  your name, contact information, billing details, and employment background.
                </p>
                <p>
                  Non-personal data, such as website usage patterns, IP addresses, and browser type,
                  is collected via cookies to improve performance and user experience.
                </p>
              </Cards>
            </div>

            {/* 3. Children's Privacy */}
            <div className="col-lg-6 col-md-12"  data-aos-delay="200">
              <Cards>
                <div className="feature-icon"><i className="bi bi-emoji-smile"></i></div>
                <h4 className="below-bar">Children’s Privacy</h4>
                <p>
                  Springfield Woodworking does not knowingly collect information from children under 13 years of age.
                  We encourage parents and guardians to guide their children's online activities.
                </p>
              </Cards>
            </div>

            {/* 4. How We Use Information */}
            <div className="col-lg-6 col-md-12"  data-aos-delay="250">
              <Cards>
                <div className="feature-icon"><i className="bi bi-gear-fill"></i></div>
                <h4 className="below-bar">How We Use Your Information</h4>
                <p>
                  Your information is used to provide services, process transactions, and communicate updates.
                  Credit card data is used only for payment processing and fraud prevention.
                </p>
                <p>
                  Data may also be combined from other Springfield Woodworking sources for better customer support
                  and may be securely transferred across borders for storage or management.
                </p>
              </Cards>
            </div>

            {/* 5. Information Sharing */}
            <div className="col-lg-6 col-md-12"  data-aos-delay="300">
              <Cards>
                <div className="feature-icon"><i className="bi bi-share-fill"></i></div>
                <h4 className="below-bar">Who We Share Your Information With</h4>
                <p>
                  We do not sell, rent, or lease your personal information. Data is shared only as required
                  to complete your service requests. Trusted third-party providers must keep your information
                  confidential and use it only for the services they perform.
                </p>
              </Cards>
            </div>

            {/* 6. Your Choices */}
            <div className="col-lg-6 col-md-12"  data-aos-delay="350">
              <Cards>
                <div className="feature-icon"><i className="bi bi-envelope-check"></i></div>
                <h4 className="below-bar">Your Choices</h4>
                <p>
                  You can choose whether to receive marketing communications from Springfield Woodworking.
                  You may opt-out anytime from promotional emails or surveys. This does not affect service-related
                  communications such as order updates or safety notifications.
                </p>
             </Cards>
            </div>

            {/* 7. Third-Party Companies */}
            <div className="col-lg-6 col-md-12"  data-aos-delay="400">
              <Cards>
                <div className="feature-icon"><i className="bi bi-building"></i></div>
                <h4 className="below-bar">Your Information and Third-Party Companies</h4>
                <p>
                  Certain services may integrate with unrelated third-party companies. We will not share your
                  information with them unless you explicitly choose to do so.
                </p>
              </Cards>
            </div>

            {/* 8. Access and Accuracy */}
            <div className="col-lg-6 col-md-12"  data-aos-delay="450">
              <Cards>
                <div className="feature-icon"><i className="bi bi-shield-lock-fill"></i></div>
                <h4 className="below-bar">Access to and Accuracy of Your Information</h4>
                <p>
                  We aim to keep your information accurate and up-to-date. You can request access or corrections,
                  and we’ll verify your identity (via password or user ID) before granting access.
                </p>
              </Cards>
            </div>

            {/* 9. Security */}
            <div className="col-lg-6 col-md-12"  data-aos-delay="500">
             <Cards>
                <div className="feature-icon"><i className="bi bi-lock-fill"></i></div>
                <h4 className="below-bar">Keeping Your Information Secure</h4>
                <p>
                  We implement appropriate physical, administrative, and technical safeguards to protect your
                  data. Credit card details are used only for transactions, with fraud protection services in place.
                </p>
              </Cards>
            </div>

            {/* 10. Contact */}
            <div className="col-lg-6 col-md-12"  data-aos-delay="550">
              <Cards>
                <div className="feature-icon"><i className="bi bi-telephone-fill"></i></div>
                <h4 className="below-bar">Contacting Us</h4>
                <p>
                  We value your feedback. If you have questions or comments about our privacy policy,
                  please <Link to="/contact">contact us</Link> through our website form.
                </p>
                <p><strong>This Privacy Statement applies to Canada.</strong></p>
              </Cards>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
