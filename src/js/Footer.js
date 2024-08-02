import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <a href="https://www.linkedin.com/in/rogério-junior/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.svg" alt="Logo linkedin" className='linkedin' />
          </a>
        </div>
        <div className="footer-section logo">
          <img src="/images/RJR-Branco.svg" alt="Logo" className="logo" />
        </div>
        <div className="footer-section about-me">
          <a href="mailto:devrogeriojunior@gmail.com">
            <img src="/images/email.svg" alt="Logo Email" className="email" />
          </a>
        </div>
      </div>
      <div className="footer-section copyright">
        <p>© 2024 KJR Development</p>
      </div>
    </footer>
  );
}

export default Footer;