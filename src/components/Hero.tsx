import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Hero.css';
import AnimatedShapes from './AnimatedShapes';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [glitchText, setGlitchText] = useState('next');
  const [glitchTI, setGlitchTI] = useState('TI');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = 'next█▓▒░';
      const glitch = Array.from({ length: 4 }, () =>
        chars[Math.floor(Math.random() * chars.length)]
      ).join('');
      setGlitchText(glitch);
      setTimeout(() => setGlitchText('next'), 100);

      const charsTI = 'TI█▓▒░';
      const glitchTI = Array.from({ length: 2 }, () =>
        charsTI[Math.floor(Math.random() * charsTI.length)]
      ).join('');
      setGlitchTI(glitchTI);
      setTimeout(() => setGlitchTI('TI'), 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <AnimatedShapes />

      <div className="scan-line"></div>

      <div className="hero-content">
        <div className="glitch-wrapper">
          <h1 className="hero-title">
            <span className="logo-next" data-text={glitchText}>{glitchText}</span>
            <span className="logo-ti" data-text={glitchTI}>{glitchTI}</span>
          </h1>
        </div>

        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>

        <div className="hero-actions">
          <button onClick={scrollToContact} className="btn-alien">
            {t('hero.contact')}
          </button>
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-alien-secondary">
            {t('hero.services')}
          </button>
        </div>
      </div>

      <div
        className="cursor-trail"
        style={{
          left: mousePos.x + 'px',
          top: mousePos.y + 'px'
        }}
      ></div>
    </section>
  );
};

export default Hero;
