import React, { useState, useEffect, useRef } from "react";
import { validateForm, ajaxPost } from "./formUtils";

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");

  const successRef = useRef(null);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setSent(false);

    const validationErrors = validateForm(fields);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const result = await ajaxPost(
        "http://localhost/springfield_react/admin/send-mail.php",
        fields
      );

      if (result.success) {
        setSent(true);
        setFields({ name: "", email: "", phone: "", message: "" });
      } else {
        setServerError(result.error || "Failed to send message.");
      }
    } catch (error) {
      setServerError("Server error. Please try again later.");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (sent) {
      successRef.current?.scrollIntoView({ behavior: "smooth" });

      const timer = setTimeout(() => setSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  return (
    <section id="contact" className="contact section">
      <div className="container section-title">
        <h2>
          <span>Need Help?</span>{" "}
          <span className="description-title">Contact Us</span>
        </h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-12">
            <form className="php-email-form" onSubmit={handleSubmit} noValidate>
              <div className="row gy-4">
                {/* Name */}
                <div className="col-md-4">
                  <label className="pb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={fields.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                {/* Email */}
                <div className="col-md-4">
                  <label className="pb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={fields.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Phone */}
                <div className="col-md-4">
                  <label className="pb-2">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    value={fields.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>

                {/* Message */}
                <div className="col-md-12">
                  <label className="pb-2">Message</label>
                  <textarea
                    name="message"
                    rows="6"
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    value={fields.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                {/* Status & Button */}
                <div className="col-md-12 text-center">
                 

                  {serverError && (
                    <div className="alert alert-danger">
                      ❌ {serverError}
                    </div>
                  )}

                  {sent && (
                    <div
                      ref={successRef}
                      className="alert alert-success"
                    >
                      ✅ Your message has been sent successfully. Thank you!
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
