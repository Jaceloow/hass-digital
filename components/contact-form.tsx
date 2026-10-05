"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row two-col">
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
      </div>

      <label>
        <span>Project Type</span>
        <select name="projectType" defaultValue="Website Design">
          <option>Website Design</option>
          <option>App Design</option>
          <option>Brand Identity</option>
          <option>Full Digital Product</option>
        </select>
      </label>

      <label>
        <span>Project Details</span>
        <textarea name="message" rows={5} placeholder="Tell us about your project..." required />
      </label>

      <button type="submit" className="primary-btn full-width">
        Send Inquiry
      </button>

      {submitted && <p className="success-message">Thank you! Your inquiry has been received.</p>}
    </form>
  );
}
