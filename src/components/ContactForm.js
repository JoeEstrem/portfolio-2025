import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return <p className="text-confirmation">Thank you! Your message has been sent.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label className="text-form">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className=""
        />
        {errors.name && <p className="text-error">{errors.name}</p>}
      </div>

      <div>
        <label className="text-form">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className=""
        />
        {errors.email && <p className="text-error">{errors.email}</p>}
      </div>

      <div>
        <label className="text-form">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className=""
          rows="4"
        />
        {errors.message && <p className="text-error">{errors.message}</p>}
      </div>

      {/* Honeypot spam protection */}
      <div style={{ display: "none" }}>
        <label>Leave this empty</label>
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className=""
      >
        Send
      </button>
    </form>
  );
}
