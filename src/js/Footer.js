import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer id='footerId' className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <a href="https://www.linkedin.com/in/rogério-junior/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.svg" alt="Logo LinkedIn" className='icon linkedin' />
          </a>
        </div>
        <div className="footer-section logoFooter">
          <img src="/images/RJR-Branco.svg" alt="Logo Footer" className="icon logoFooter" />
        </div>
        <div className="footer-section about-me">
          <a href="mailto:devrogeriojunior@gmail.com">
            <img src="/images/email.svg" alt="Logo Email" className="icon email" />
          </a>
        </div>
      </div>
      <div className="footer-section copyright">
        <p>© 2024 - Todos direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
