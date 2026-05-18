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
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-accent mb-2" style={{ fontSize: '1.8rem' }}>Psicoterapia Individual</h3>
            <p className="mb-3">Para quienes buscan un espacio seguro donde explorar sus emociones, pensamientos y comportamientos, entendiendo su historia sin juicios.</p>
            <p className="text-accent-soft" style={{ fontWeight: '500', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span className="text-accent" style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Para ti si:</span>
              <span className="text-main" style={{fontWeight: '400', marginTop: '0.2rem'}}>Necesitas sanar, comprenderte mejor o atravesar una crisis.</span>
            </p>
            <a href="https://wa.me/56988186522?text=Hola,%20quisiera%20consultar%20sobre%20Psicoterapia%20Individual" className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.5rem', textAlign: 'center' }}>Consultar</a>
          </div>
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-accent mb-2" style={{ fontSize: '1.8rem' }}>Acompañamiento Emocional</h3>
            <p className="mb-3">Un enfoque centrado en la contención y el desarrollo de herramientas para el bienestar diario, ideal para momentos de transición o cambios vitales.</p>
            <p className="text-accent-soft" style={{ fontWeight: '500', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span className="text-accent" style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Para ti si:</span>
              <span className="text-main" style={{fontWeight: '400', marginTop: '0.2rem'}}>Buscas equilibrio emocional y estrategias prácticas frente al estrés.</span>
            </p>
            <a href="https://wa.me/56988186522?text=Hola,%20quisiera%20consultar%20sobre%20Acompa%C3%B1amiento%20Emocional" className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.5rem', textAlign: 'center' }}>Consultar</a>
          </div>
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-accent mb-2" style={{ fontSize: '1.8rem' }}>Salud Mental Integral</h3>
            <p className="mb-3">Trabajo interdisciplinario que entiende el bienestar como un proceso completo, conectando mente, cuerpo y entorno de manera equilibrada.</p>
            <p className="text-accent-soft" style={{ fontWeight: '500', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span className="text-accent" style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Para ti si:</span>
              <span className="text-main" style={{fontWeight: '400', marginTop: '0.2rem'}}>Deseas un enfoque sistémico que aborde tu bienestar globalmente.</span>
            </p>
            <a href="https://wa.me/56988186522?text=Hola,%20quisiera%20consultar%20sobre%20Salud%20Mental%20Integral" className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.5rem', textAlign: 'center' }}>Consultar</a>
          </div>
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-accent mb-2" style={{ fontSize: '1.8rem' }}>Terapia EMDR</h3>
            <p className="mb-3">La Desensibilización y Reprocesamiento por Movimientos Oculares (EMDR) es un abordaje terapéutico especializado para el procesamiento de experiencias traumáticas, miedos intensos y bloqueos emocionales que no ceden con la terapia convencional.</p>
            <p className="text-accent-soft" style={{ fontWeight: '500', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span className="text-accent" style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Para ti si:</span>
              <span className="text-main" style={{fontWeight: '400', marginTop: '0.2rem'}}>Cargás con vivencias difíciles del pasado que siguen afectando tu presente.</span>
            </p>
            <a href="https://wa.me/56988186522?text=Hola,%20quisiera%20consultar%20sobre%20Terapia%20EMDR" className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.5rem', textAlign: 'center' }}>Consultar</a>
          </div>
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-accent mb-2" style={{ fontSize: '1.8rem' }}>Terapia Perinatal</h3>
            <p className="mb-3">Acompañamiento especializado durante el embarazo, posparto y duelo gestacional. Un espacio para transitar los cambios emocionales, la identidad materna y paterna, y los desafíos únicos de la etapa perinatal.</p>
            <p className="text-accent-soft" style={{ fontWeight: '500', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span className="text-accent" style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Para ti si:</span>
              <span className="text-main" style={{fontWeight: '400', marginTop: '0.2rem'}}>Estás embarazada, en posparto o atravesando una pérdida gestacional.</span>
            </p>
            <a href="https://wa.me/56988186522?text=Hola,%20quisiera%20consultar%20sobre%20Terapia%20Perinatal" className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.5rem', textAlign: 'center' }}>Consultar</a>
          </div>
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-accent mb-2" style={{ fontSize: '1.8rem' }}>Terapia de Parejas</h3>
            <p className="mb-3">Un espacio seguro para que dos personas trabajen juntas en mejorar su comunicación, resolver conflictos recurrentes y fortalecer el vínculo desde el respeto y la comprensión mutua.</p>
            <p className="text-accent-soft" style={{ fontWeight: '500', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span className="text-accent" style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Para ti si:</span>
              <span className="text-main" style={{fontWeight: '400', marginTop: '0.2rem'}}>Sientes que la relación necesita un espacio para ser escuchada y reencauzada.</span>
            </p>
            <a href="https://wa.me/56988186522?text=Hola,%20quisiera%20consultar%20sobre%20Terapia%20de%20Parejas" className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.5rem', textAlign: 'center' }}>Consultar</a>
          </div>
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-accent mb-2" style={{ fontSize: '1.8rem' }}>Terapia TCA</h3>
            <p className="mb-3">Abordaje especializado en Trastornos de la Conducta Alimentaria como anorexia, bulimia y atracones. Trabajamos desde una perspectiva compasiva y libre de juicios, integrando cuerpo, emociones e identidad.</p>
            <p className="text-accent-soft" style={{ fontWeight: '500', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span className="text-accent" style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Para ti si:</span>
              <span className="text-main" style={{fontWeight: '400', marginTop: '0.2rem'}}>Tu relación con la comida o el cuerpo te genera sufrimiento o interferencia en tu vida.</span>
            </p>
            <a href="https://wa.me/56988186522?text=Hola,%20quisiera%20consultar%20sobre%20Terapia%20TCA" className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.5rem', textAlign: 'center' }}>Consultar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
