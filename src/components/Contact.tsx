import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aici vei adăuga logica de trimitere a formularului
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Hai să creăm<br />ceva <span className="highlight-text">remarcabil</span></h2>
          <p className="contact-intro">
            Fiecare proiect începe cu o conversație. Spune-ne despre ideea ta.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nume *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Companie</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Mesaj *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="form-input form-textarea"
              />
            </div>
            <button type="submit" className="btn-submit">
              {isSubmitted ? 'Mesaj trimis' : 'Trimite'}
            </button>
          </form>

          <div className="contact-details">
            <div className="detail-block">
              <h3 className="detail-label">Email</h3>
              <a href="mailto:contact@nexti.ro" className="detail-value">contact@nexti.ro</a>
            </div>
            <div className="detail-block">
              <h3 className="detail-label">Telefon</h3>
              <a href="tel:+40738168577" className="detail-value">+40 738 168 577</a>
            </div>
            <div className="detail-block">
              <h3 className="detail-label">Web</h3>
              <a href="https://nexti.ro" target="_blank" rel="noopener noreferrer" className="detail-value">nexti.ro</a>
            </div>
            <div className="detail-block">
              <h3 className="detail-label">Locație</h3>
              <p className="detail-value">România</p>
            </div>
            <div className="detail-block">
              <h3 className="detail-label">Timp de răspuns</h3>
              <p className="detail-value">24h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
