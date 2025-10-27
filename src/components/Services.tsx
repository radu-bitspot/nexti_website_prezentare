import React from 'react';
import '../styles/Services.css';

const Services: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'Software',
      subtitle: 'Custom Development',
      description: 'De la concept la producție. Aplicații web și mobile care rezolvă probleme reale.'
    },
    {
      number: '02',
      title: 'Cloud',
      subtitle: 'Infrastructure & DevOps',
      description: 'Arhitectură cloud scalabilă. Deployment automatizat. Zero downtime.'
    },
    {
      number: '03',
      title: 'Security',
      subtitle: 'Cyber Protection',
      description: 'Protecție proactivă. Audit complet. Peace of mind pentru business-ul tău.'
    },
    {
      number: '04',
      title: 'Consulting',
      subtitle: 'Digital Strategy',
      description: 'Strategie tehnologică clară. ROI măsurabil. Parteneriat pe termen lung.'
    },
    {
      number: '05',
      title: 'Support',
      subtitle: '24/7 Maintenance',
      description: 'Monitorizare continuă. Răspuns rapid. Sisteme care funcționează mereu.'
    },
    {
      number: '06',
      title: 'Automation',
      subtitle: 'Process Optimization',
      description: 'Elimină task-urile repetitive. Crește eficiența. Focus pe ce contează.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Ce facem</h2>
          <p className="section-subtitle">
            Servicii IT concrete, fără buzzwords
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
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
