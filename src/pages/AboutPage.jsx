import React from 'react';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="page-wrapper-component fade-in">
      <div className="page-header">
        <img src="/assets/hero_rent_1775011797415.png" alt="Interior Clínica" className="page-header-bg" />
        <div className="page-header-overlay"></div>
        <div className="page-header-content container">
          <h1 style={{ color: 'var(--color-accent)', marginBottom: '10px' }}>Nuestra Clínica</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: 0 }}>Un refugio urbano pensado para poner en pausa el ruido cotidiano y conectar contigo mismo.</p>
        </div>
      </div>
      <About />
    </div>
  );
};

export default AboutPage;
