import React, { useState } from 'react';
import AnxietyTest from './microtools/AnxietyTest';
import StressTest from './microtools/StressTest';
import WellbeingTest from './microtools/WellbeingTest';

const MicrotoolsContainer = () => {
  const [activeTest, setActiveTest] = useState(null);

  return (
    <section className="microtools bg-soft" style={{ padding: '5rem 0', backgroundColor: 'var(--color-bg-base)' }}>
      <div className="container">
        
        {!activeTest ? (
          <div className="fade-in">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="text-accent mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Herramientas de Autoconocimiento</h2>
              <p className="text-main" style={{ fontSize: '1.2rem' }}>Breves cuestionarios adaptados de escalas psicológicas para evaluar tu estado.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 className="text-accent mb-2" style={{ fontSize: '1.6rem' }}>Medición de Ansiedad</h3>
                <p className="mb-4" style={{ flex: 1 }}>7 preguntas basadas en el GAD-7 para evaluar tus niveles actuales de nerviosismo y preocupación constante.</p>
                <button className="btn-secondary" style={{ width: '100%' }} onClick={() => setActiveTest('anxiety')}>Iniciar Test</button>
              </div>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 className="text-accent mb-2" style={{ fontSize: '1.6rem' }}>Estrés Percibido</h3>
                <p className="mb-4" style={{ flex: 1 }}>4 preguntas (escala PSS) para descubrir cómo estás controlando las exigencias e imprevistos en tu vida.</p>
                <button className="btn-secondary" style={{ width: '100%' }} onClick={() => setActiveTest('stress')}>Iniciar Test</button>
              </div>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 className="text-accent mb-2" style={{ fontSize: '1.6rem' }}>Índice de Bienestar</h3>
                <p className="mb-4" style={{ flex: 1 }}>5 preguntas sobre tu vitalidad general y estado de ánimo positivo durante las últimas semanas.</p>
                <button className="btn-secondary" style={{ width: '100%' }} onClick={() => setActiveTest('wellbeing')}>Iniciar Test</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="fade-in mt-4">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {activeTest === 'anxiety' && <AnxietyTest onBack={() => setActiveTest(null)} />}
              {activeTest === 'stress' && <StressTest onBack={() => setActiveTest(null)} />}
              {activeTest === 'wellbeing' && <WellbeingTest onBack={() => setActiveTest(null)} />}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default MicrotoolsContainer;
