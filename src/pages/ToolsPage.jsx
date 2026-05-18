import React from 'react';
import MicrotoolsContainer from '../components/MicrotoolsContainer';

const ToolsPage = () => {
  return (
    <div className="page-wrapper-component fade-in">
      <div className="page-header">
        <img src="/assets/hero_tools_1775011776165.png" alt="Escritorio Terapéutico" className="page-header-bg" style={{ objectPosition: 'center 40%' }} />
        <div className="page-header-overlay"></div>
        <div className="page-header-content container">
          <h1 style={{ color: 'var(--color-text-main)', marginBottom: '10px' }}>Herramientas de <span style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-accent)' }}>Bienestar</span></h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: 0 }}>Evalúa tu estado emocional actual a través de cuestionarios clínicamente validados y recibe guías de acción inmediatas.</p>
        </div>
      </div>
      <MicrotoolsContainer />
    </div>
  );
};

export default ToolsPage;
