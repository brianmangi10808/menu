
import React from 'react';
import './contactpage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">
        <span>Get</span> In Touch
      </h1>
      <div className="contact-content">
        <div className="contact-form">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <input type="text" placeholder="Subject" className="form-input" />
          <textarea placeholder="Message" className="form-textarea"></textarea>
          <button className="form-button">Send Message</button>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Feel free to reach out through any of these channels</p>
          <ul>
            <li>
              <span>Email:</span> Isaac@swift.co.ke
            </li>
            <li>
              <span>Phone:</span> +254 700000000
            </li>
            <li>
              <span>Location:</span> Nairobi, Kenya
            </li>
          </ul>
          <div className="contact-links">
            <button className="link-button">Instagram</button>
            <button className="link-button">LinkedIn</button>
            <button className="link-button">WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
