import "./Footer.css";
import React from 'react';
import ContactForm from "./ContactForm";

function Footer() {
  return (
        <div className="footer-container">
          <h2 className="text-white">Looking for a creative partner?</h2>
          <h3 className="text-white">Let's grab a coffee</h3>

          <ContactForm />

        </div>
  );
}

export default Footer;
