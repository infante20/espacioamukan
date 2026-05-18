import React from 'react';

const BoxGallery = () => {
  const boxImages = [
    "453320358_1159890725221562_4854958009818615449_n.jpg",
    "453668072_397198566806814_5933272007423847208_n.jpg",
    "453893398_1982892275523677_6094157755233775769_n.jpg",
    "453897685_3701162843483230_2907013580008991926_n.jpg",
    "453943040_480783561332920_418260432686628149_n.jpg",
    "453964735_1008213873960623_2795033961602349391_n.jpg",
    "453989591_484538160949913_1551407456381853025_n.jpg",
    "454038250_8483123245054555_3960474238232526561_n.jpg",
    "454142682_1476888206301534_6839287305519863458_n.jpg"
  ];

  return (
    <section className="space-and-box section">
      <div className="container fade-in">
        
        {/* Info Area */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <h2 style={{ fontFamily: 'var(--font-accent)', fontSize: '3.5rem', color: 'var(--color-accent)', marginBottom: '10px' }}>Nuestros Box</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-main)' }}>
            Contamos con espacios disponibles para profesionales del bienestar. Un ambiente cálido, excelente ubicación y flexibilidad horaria en <strong>Calle Nonguén 265, Sector Lo Pequén, Concepción</strong>.
          </p>
          <a href="https://wa.me/56988186522?text=Hola,%20quisiera%20consultar%20disponibilidad%20para%20arriendo%20de%20box" className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: '30px' }}>
            Consultar Arriendo
          </a>
        </div>

        {/* Real Gallery Area */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '20px',
          alignItems: 'stretch'
        }}>
          {boxImages.map((img, idx) => (
            <div key={idx} style={{
              borderRadius: '20px', 
              overflow: 'hidden', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)', 
              aspectRatio: '1',
              transition: 'transform 0.3s ease'
            }} className="box-card">
              <img 
                src={`/box/${img}`} 
                alt={`Box Espacio Amukan ${idx + 1}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BoxGallery;
