import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Ani Experiență' },
    { number: '50+', label: 'Proiecte Finalizate' },
    { number: '30+', label: 'Clienți Mulțumiți' },
    { number: '24/7', label: 'Suport Dedicat' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-intro">
            <h2 className="section-title">De ce NexTI?</h2>
          </div>

          <div className="about-content">
            <p className="about-description">
              Nu suntem doar o companie IT. Suntem partenerii tăi în transformare digitală.
            </p>
            <p className="about-description">
              Fiecare linie de cod pe care o scriem are un scop: să rezolve probleme reale,
              să simplifice procese complexe, să aducă rezultate măsurabile.
            </p>
            <p className="about-description">
              Tehnologia e doar un instrument. Noi ne concentrăm pe impact.
            </p>
          </div>

          <div className="about-principles">
            <div className="principle-item">
              <h3 className="principle-number">01</h3>
              <p className="principle-text">Transparență totală în fiecare proiect</p>
            </div>
            <div className="principle-item">
              <h3 className="principle-number">02</h3>
              <p className="principle-text">Cod de calitate, nu doar cod functional</p>
            </div>
            <div className="principle-item">
              <h3 className="principle-number">03</h3>
              <p className="principle-text">Partnership pe termen lung, nu tranzacții</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
