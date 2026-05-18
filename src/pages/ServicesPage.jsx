import React from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div className="page-wrapper-component fade-in">
      <div className="page-header">
        <div className="blob blob-pink" style={{ width: '400px', height: '400px', right: '10%', top: '20%' }}></div>
        <div className="page-header-overlay" style={{ background: 'transparent' }}></div>
        <div className="page-header-content container" style={{ paddingTop: '100px' }}>
          <h1 style={{ color: 'var(--color-accent)', marginBottom: '10px' }}>Servicios Profesionales</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: 0 }}>Abordajes terapéuticos fundamentados en ciencia y calidez humana.</p>
        </div>
      </div>
      <div style={{ marginTop: '-120px' }}>
        <Services />
      </div>
    </div>
  );
};

export default ServicesPage;
