import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tenis from './components/Tenis';

function MainContent() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && ['ro', 'en'].includes(lang)) {
      i18n.changeLanguage(lang);
    } else if (lang) {
      // Redirect to default language if invalid
      navigate('/ro', { replace: true });
    }
  }, [lang, i18n, navigate]);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/tenis" element={<Tenis />} />
      <Route path="/:lang" element={<MainContent />} />
      <Route path="/" element={<Navigate to="/ro" replace />} />
    </Routes>
  );
}

export default App;
