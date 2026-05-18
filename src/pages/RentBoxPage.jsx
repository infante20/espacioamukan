import React from 'react';
import SpaceAndBox from '../components/SpaceAndBox';

const RentBoxPage = () => {
  return (
    <div className="page-wrapper-component fade-in">
      <div className="page-header">
        <div className="blob blob-beige" style={{ width: '500px', height: '500px', left: '-10%', top: '-20%' }}></div>
        <div className="page-header-overlay" style={{ background: 'transparent' }}></div>
        <div className="page-header-content container" style={{ paddingTop: '80px' }}>
          <h1 style={{ color: 'var(--color-text-main)', marginBottom: '10px' }}>Arriendo de <span style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-accent)' }}>Box Clínico</span></h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: 0 }}>Únete a nuestro espacio de salud en Barrio Lo Pequén y ofrece a tus pacientes un entorno de primer nivel.</p>
        </div>
      </div>
      <SpaceAndBox />
    </div>
  );
};

export default RentBoxPage;
