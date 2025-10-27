import React from 'react';
import '../styles/Hero.css';
import AnimatedShapes from './AnimatedShapes';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <AnimatedShapes />
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Tehnologie
            <span className="highlight">Simplă</span>
            Rezultate
            <span className="highlight">Complexe</span>
          </h1>
          <p className="hero-subtitle">
            Transformăm idei în soluții digitale performante.
            Fără clișee. Fără promisiuni goale. Doar rezultate concrete.
          </p>
          <div className="hero-cta">
            <button onClick={scrollToContact} className="btn-primary">
              Hai să vorbim
            </button>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
              Ce facem
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-stats">
            <div className="stat-line">
              <span className="stat-number">10+</span>
              <span className="stat-label">ani</span>
            </div>
            <div className="stat-line">
              <span className="stat-number">50+</span>
              <span className="stat-label">proiecte</span>
            </div>
            <div className="stat-line">
              <span className="stat-number">100%</span>
              <span className="stat-label">dedicare</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
