import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/About.css';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-intro">
            <h2 className="section-title">{t('about.title')}</h2>
          </div>

          <div className="about-content">
            <p className="about-description">
              {t('about.description1')}
            </p>
            <p className="about-description">
              {t('about.description2')}
            </p>
            <p className="about-description">
              {t('about.description3')}
            </p>
          </div>

          <div className="about-principles">
            {t('about.principles', { returnObjects: true }).map((principle: any, index: number) => (
              <div key={index} className="principle-item">
                <h3 className="principle-number">{principle.number}</h3>
                <p className="principle-text">{principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
