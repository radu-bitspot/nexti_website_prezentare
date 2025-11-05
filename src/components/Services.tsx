import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Services.css';

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="services-list">
          {t('services.items', { returnObjects: true }).map((service: any, index: number) => (
            <div key={index} className="service-item">
              <div className="service-number">{service.number}</div>
              <div className="service-content">
                <div className="service-header">
                  <h3 className="service-title">{service.title}</h3>
                  <span className="service-subtitle">{service.subtitle}</span>
                </div>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
