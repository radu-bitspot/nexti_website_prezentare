import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Soluții IT <span className="highlight">Inovatoare</span>
            <br />
            pentru Afacerea Ta
          </h1>
          <p className="hero-subtitle">
            Consultanță, dezvoltare și implementare de soluții IT
            personalizate pentru succesul companiei tale.
          </p>
          <div className="hero-cta">
            <button onClick={scrollToContact} className="btn-primary">
              Începe Proiectul
            </button>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
              Descoperă Serviciile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
