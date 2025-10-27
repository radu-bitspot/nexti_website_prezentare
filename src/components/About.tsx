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
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Despre NexTI</h2>
            <p className="about-description">
              Suntem o echipă de experți IT dedicați transformării digitale a afacerilor.
              Cu experiență vastă în consultanță și dezvoltare, oferim soluții personalizate
              care răspund nevoilor specifice ale fiecărui client.
            </p>
            <p className="about-description">
              Misiunea noastră este să simplificăm tehnologia și să o facem accesibilă,
              ajutând companiile să își atingă obiectivele prin inovație și excelență tehnică.
            </p>
            <div className="about-values">
              <div className="value-item">
                <span className="value-icon">✓</span>
                <span>Inovație continuă</span>
              </div>
              <div className="value-item">
                <span className="value-icon">✓</span>
                <span>Calitate superioară</span>
              </div>
              <div className="value-item">
                <span className="value-icon">✓</span>
                <span>Partnership pe termen lung</span>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
