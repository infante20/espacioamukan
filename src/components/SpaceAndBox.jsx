import React from 'react';

const SpaceAndBox = () => {
  return (
    <section className="space-and-box" style={{ backgroundColor: 'var(--color-bg-darker)', padding: '5rem 0' }}>
      <div className="container fade-in">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          
          <div style={{ flex: '1 1 400px' }}>
            <h2 className="text-accent mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Nuestro Espacio</h2>
            <p className="text-main mb-3" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              Ubicados en <strong>Calle Nonguén 265, Sector Lo Pequén, Concepción</strong>.
            </p>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '15px', marginBottom: '2.5rem' }}>
              <p className="text-main" style={{ fontSize: '1.05rem', fontStyle: 'italic', margin: 0 }}>
                * Importante: No estamos en el sector Nonguén, sino en el tradicional y central sector de Lo Pequén.
              </p>
            </div>
            
            <h3 className="text-accent mb-2" style={{ fontSize: '1.8rem' }}>Arriendo de Box</h3>
            <p className="text-main mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Contamos con espacios disponibles para profesionales del bienestar (no solo psicología, abrimos el espacio a más oficios afines). Ofrecemos un ambiente cálido, excelente ubicación y flexibilidad horaria.
            </p>
            <a href="https://wa.me/569988186522?text=Hola,%20quisiera%20consultar%20disponibilidad%20para%20arriendo%20de%20box" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              Consultar disponibilidad
            </a>
          </div>

          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              width: '100%', maxWidth: '500px', height: '350px', 
              backgroundColor: '#fff', borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', position: 'relative'
            }}>
              <div className="shape-blob" style={{ backgroundColor: 'var(--color-bg-base)', width: '250px', height: '250px', opacity: 0.8 }}></div>
              <p className="text-accent" style={{ position: 'absolute', fontWeight: '500', fontSize: '1.2rem', textAlign: 'center', padding: '0 1rem' }}>
                Un espacio que inspira calma
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpaceAndBox;
