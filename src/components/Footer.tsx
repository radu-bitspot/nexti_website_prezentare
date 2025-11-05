import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-next">next</span>
              <span className="logo-ti">TI</span>
            </div>
            <p className="footer-tagline">
              Consultanță și Soluții IT
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Servicii</h4>
              <ul>
                <li><a href="#services">Dezvoltare Software</a></li>
                <li><a href="#services">Cloud Solutions</a></li>
                <li><a href="#services">Securitate IT</a></li>
                <li><a href="#services">Consultanță</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Companie</h4>
              <ul>
                <li><a href="#about">Despre Noi</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn" className="social-link">in</a>
                <a href="#" aria-label="Facebook" className="social-link">f</a>
                <a href="#" aria-label="Twitter" className="social-link">x</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} NexTI. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
