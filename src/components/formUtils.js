// src/components/formUtils.js

// Strong validation rules
export function validateForm(fields) {
  const errors = {};
  // Name: required, min 2 chars, letters only
  if (!fields.name || fields.name.trim().length < 2 || /[^a-zA-Z\s]/.test(fields.name)) {
    errors.name = "Please enter a valid name (letters only, min 2 chars).";
  }
  // Email: required, valid format
  if (!fields.email || !/^\S+@\S+\.\S+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  // Phone: required, digits, 10-15 chars
  if (!fields.phone || !/^\d{10,15}$/.test(fields.phone.replace(/\D/g, ""))) {
    errors.phone = "Please enter a valid phone number (10-15 digits).";
  }
  // Message: required, min 10 chars
  if (fields.message !== undefined && (!fields.message || fields.message.trim().length < 10)) {
    errors.message = "Message must be at least 10 characters.";
  }
  // Resume: required for career form
  if (fields.resume !== undefined && !fields.resume) {
    errors.resume = "Please upload your resume.";
  }
  return errors;
}

export async function ajaxPost(url, data) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
