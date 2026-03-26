import React from 'react';

const About = () => {
  return (
    <section className="about" style={{ backgroundColor: 'var(--color-bg-soft)', padding: '5rem 0' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="text-accent mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Sobre Amukan</h2>
          <p className="text-main mb-3" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            Amukan es un espacio de acompañamiento terapéutico donde cada proceso es respetado en su ritmo, historia y singularidad.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div className="card">
              <h3 className="text-accent mb-2" style={{ fontSize: '1.5rem' }}>Enfoque Ético</h3>
              <p>Basado en el respeto profundo y el cuidado profesional.</p>
            </div>
            <div className="card">
              <h3 className="text-accent mb-2" style={{ fontSize: '1.5rem' }}>Mirada Integral</h3>
              <p>Entendemos la salud mental como un todo interconectado.</p>
            </div>
            <div className="card">
              <h3 className="text-accent mb-2" style={{ fontSize: '1.5rem' }}>Comunidad</h3>
              <p>Un espacio que acoge y acompaña sin juicios.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
