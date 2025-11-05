import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();
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
              {t('footer.tagline')}
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>{t('footer.services')}</h4>
              <ul>
                <li><a href="#services">{t('footer.servicesList.development')}</a></li>
                <li><a href="#services">{t('footer.servicesList.cloud')}</a></li>
                <li><a href="#services">{t('footer.servicesList.security')}</a></li>
                <li><a href="#services">{t('footer.servicesList.consulting')}</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>{t('footer.company')}</h4>
              <ul>
                <li><a href="#about">{t('footer.companyList.about')}</a></li>
                <li><a href="#contact">{t('footer.companyList.contact')}</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>{t('footer.connect')}</h4>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn" className="social-link">in</a>
                <a href="#" aria-label="Facebook" className="social-link">f</a>
                <a href="#" aria-label="Twitter" className="social-link">x</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} NexTI. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
