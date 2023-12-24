// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>About Us content here...</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Contact information here...</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/company/example" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="extra-content">
        <p>Extra content here...</p>
      </div>
    </footer>
  );
};

export default Footer;
