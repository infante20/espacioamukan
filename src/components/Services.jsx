import React from 'react';

const Services = () => {
  return (
    <section className="services" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="text-accent mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Nuestros Servicios</h2>
          <p className="text-main" style={{ fontSize: '1.2rem' }}>Acompañamiento profesional desde una mirada compasiva</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div className="card">
            <h3 className="text-accent mb-2" style={{ fontSize: '1.8rem' }}>Psicoterapia Individual</h3>
            <p className="mb-3">Para quienes buscan un espacio seguro donde explorar sus emociones, pensamientos y comportamientos, entendiendo su historia sin juicios.</p>
            <p className="text-accent-soft" style={{ fontWeight: '500', display: 'flex', flexDirection: 'column' }}>
              <span className="text-accent" style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Para ti si:</span>
              <span className="text-main" style={{fontWeight: '400', marginTop: '0.2rem'}}>Necesitas sanar, comprenderte mejor o atravesar una crisis.</span>
            </p>
          </div>
          <div className="card">
            <h3 className="text-accent mb-2" style={{ fontSize: '1.8rem' }}>Acompañamiento Emocional</h3>
            <p className="mb-3">Un enfoque centrado en la contención y el desarrollo de herramientas para el bienestar diario, ideal para momentos de transición o cambios vitales.</p>
            <p className="text-accent-soft" style={{ fontWeight: '500', display: 'flex', flexDirection: 'column' }}>
              <span className="text-accent" style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Para ti si:</span>
              <span className="text-main" style={{fontWeight: '400', marginTop: '0.2rem'}}>Buscas equilibrio emocional y estrategias prácticas frente al estrés.</span>
            </p>
          </div>
          <div className="card">
            <h3 className="text-accent mb-2" style={{ fontSize: '1.8rem' }}>Salud Mental Integral</h3>
            <p className="mb-3">Trabajo interdisciplinario que entiende el bienestar como un proceso completo, conectando mente, cuerpo y entorno de manera equilibrada.</p>
            <p className="text-accent-soft" style={{ fontWeight: '500', display: 'flex', flexDirection: 'column' }}>
              <span className="text-accent" style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Para ti si:</span>
              <span className="text-main" style={{fontWeight: '400', marginTop: '0.2rem'}}>Deseas un enfoque sistémico que aborde tu bienestar globalmente.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
