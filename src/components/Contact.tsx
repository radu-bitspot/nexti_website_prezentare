import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'N/A',
        message: formData.message,
        to_email: 'contact@nexti.ro' // Your receiving email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (err: any) {
      console.error('Failed to send email:', err);

      // User-friendly error messages
      if (err.text === 'The public key is invalid') {
        setError(t('contact.form.errors.invalidConfig'));
      } else if (err.text?.includes('not found')) {
        setError(t('contact.form.errors.templateNotFound'));
      } else {
        setError(t('contact.form.errors.generic'));
      }

      // Clear error after 7 seconds
      setTimeout(() => {
        setError(null);
      }, 7000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title" dangerouslySetInnerHTML={{ __html: t('contact.title') }}></h2>
          <p className="contact-intro">
            {t('contact.intro')}
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">{t('contact.form.name')} {t('contact.form.required')}</label>
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
                <label className="form-label">{t('contact.form.email')} {t('contact.form.required')}</label>
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
              <label className="form-label">{t('contact.form.company')}</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">{t('contact.form.message')} {t('contact.form.required')}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="form-input form-textarea"
              />
            </div>
            <button type="submit" className="btn-submit" disabled={isLoading}>
              {isLoading ? t('contact.form.sending') : isSubmitted ? t('contact.form.submitted') : t('contact.form.submit')}
            </button>
            {error && <div className="form-error">{error}</div>}
            {isSubmitted && <div className="form-success">{t('contact.form.success')}</div>}
          </form>

          <div className="contact-details">
            <div className="detail-block">
              <h3 className="detail-label">{t('contact.details.email')}</h3>
              <a href="mailto:contact@nexti.ro" className="detail-value">contact@nexti.ro</a>
            </div>
            <div className="detail-block">
              <h3 className="detail-label">{t('contact.details.phone')}</h3>
              <a href="tel:+40738168577" className="detail-value">+40 738 168 577</a>
            </div>
            <div className="detail-block">
              <h3 className="detail-label">{t('contact.details.web')}</h3>
              <a href="https://nexti.ro" target="_blank" rel="noopener noreferrer" className="detail-value">nexti.ro</a>
            </div>
            <div className="detail-block">
              <h3 className="detail-label">{t('contact.details.location')}</h3>
              <p className="detail-value">{t('contact.details.locationValue')}</p>
            </div>
            <div className="detail-block">
              <h3 className="detail-label">{t('contact.details.responseTime')}</h3>
              <p className="detail-value">{t('contact.details.responseTimeValue')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
