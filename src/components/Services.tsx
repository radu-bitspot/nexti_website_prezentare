import React from 'react';
import '../styles/Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: '💻',
      title: 'Dezvoltare Software',
      description: 'Aplicații web și mobile personalizate, construite cu tehnologii moderne și scalabile.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Migrare în cloud, infrastructură și management de servicii cloud pentru eficiență maximă.'
    },
    {
      icon: '🔒',
      title: 'Securitate IT',
      description: 'Protecție avansată a datelor, audit de securitate și implementare de soluții de protecție.'
    },
    {
      icon: '📊',
      title: 'Consultanță IT',
      description: 'Strategie digitală, optimizare procese și recomandări pentru transformare digitală.'
    },
    {
      icon: '🔧',
      title: 'Suport & Mentenanță',
      description: 'Monitorizare continuă, actualizări și suport tehnic dedicat pentru sistemele tale.'
    },
    {
      icon: '🚀',
      title: 'Automatizare',
      description: 'Implementare de soluții de automatizare pentru optimizarea proceselor de business.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Serviciile Noastre</h2>
          <p className="section-subtitle">
            Oferim soluții complete pentru nevoile tale de IT
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
