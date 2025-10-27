import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import AnimatedShapes from './AnimatedShapes';

const Hero: React.FC = () => {
  const [glitchText, setGlitchText] = useState('NEXTI');
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
      const chars = 'NEXTI█▓▒░';
      const glitch = Array.from({ length: 5 }, () =>
        chars[Math.floor(Math.random() * chars.length)]
      ).join('');
      setGlitchText(glitch);
      setTimeout(() => setGlitchText('NEXTI'), 100);
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

      <div className="hero-grid">
        <div className="grid-item gi-1">
          <div className="glitch-wrapper">
            <h1 className="hero-title" data-text={glitchText}>
              {glitchText}
            </h1>
          </div>
        </div>

        <div className="grid-item gi-2">
          <div className="data-stream">
            <span className="stream-label">// SYSTEM.INIT</span>
            <p className="stream-text">
              DIGITAL_TRANSFORMATION.EXE
              <br />
              &gt; LOADING_SOLUTIONS...
              <br />
              &gt; STATUS: OPERATIONAL
            </p>
          </div>
        </div>

        <div className="grid-item gi-3">
          <div className="hex-grid">
            <div className="hex-item">
              <span className="hex-value">0x0A</span>
              <span className="hex-label">YEARS</span>
            </div>
            <div className="hex-item">
              <span className="hex-value">0x32</span>
              <span className="hex-label">PROJECTS</span>
            </div>
            <div className="hex-item">
              <span className="hex-value">0xFF</span>
              <span className="hex-label">EFFICIENCY</span>
            </div>
          </div>
        </div>

        <div className="grid-item gi-4">
          <button onClick={scrollToContact} className="btn-alien">
            <span className="btn-text">INITIALIZE_CONTACT</span>
            <span className="btn-glitch">█▓▒░INIT░▒▓█</span>
          </button>
        </div>

        <div className="grid-item gi-5">
          <div className="terminal">
            <span className="terminal-prompt">&gt;_</span>
            <span className="terminal-text">NO_BUZZWORDS</span>
          </div>
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
