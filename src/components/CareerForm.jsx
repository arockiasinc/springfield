import React, { useState, useRef } from "react";
import { validateForm } from "./formUtils";

export default function CareerForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
    cover_letter: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFields({
      ...fields,
      [name]: files ? files[0] : value,
    });

    setErrors({ ...errors, [name]: undefined });
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

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch(
        "http://localhost/springfield_react/admin/send-career.php",
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );

      const result = await res.json();

      if (result.success) {
        setSent(true);
        setFields({
          name: "",
          email: "",
          phone: "",
          message: "",
          resume: null,
          cover_letter: null,
        });
        formRef.current.reset();
      } else {
        setServerError(result.error || "Submission failed.");
      }
    } catch {
      setServerError("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="career" className="contact section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-12">
            <form
      ref={formRef}
      className="php-email-form"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="row gy-4">

        {/* Name */}
        <div className="col-md-4">
          <label className="pb-2">Name</label>
          <input
            type="text"
            name="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={fields.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Email */}
        <div className="col-md-4">
          <label className="pb-2">Email</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={fields.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
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
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        {/* Resume */}
        <div className="col-md-6">
          <label className="pb-2">Resume</label>
          <input
            type="file"
            name="resume"
            className={`form-control ${errors.resume ? "is-invalid" : ""}`}
            onChange={handleChange}
          />
          {errors.resume && <div className="invalid-feedback">{errors.resume}</div>}
        </div>

        {/* Cover Letter */}
        <div className="col-md-6">
          <label className="pb-2">Cover Letter</label>
          <input
            type="file"
            name="cover_letter"
            className={`form-control ${errors.cover_letter ? "is-invalid" : ""}`}
            onChange={handleChange}
          />
          {errors.cover_letter && (
            <div className="invalid-feedback">{errors.cover_letter}</div>
          )}
        </div>

        {/* Message */}
        <div className="col-md-12">
          <label className="pb-2">Message</label>
          <textarea
            name="message"
            rows="6"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            value={fields.message}
            onChange={handleChange}
          />
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        {/* Status */}
        <div className="col-md-12 text-center">
          {serverError && <div className="alert alert-danger">❌ {serverError}</div>}
          {sent && <div className="alert alert-success">✅ Application submitted successfully!</div>}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Submit Application"}
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
