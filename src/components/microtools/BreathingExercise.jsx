import React, { useState, useEffect } from 'react';

const BreathingExercise = () => {
  const [phase, setPhase] = useState('Inhala');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setPhase(prev => {
          if (prev === 'Inhala') return 'Mantén';
          if (prev === 'Mantén') return 'Exhala';
          return 'Inhala';
        });
      }, 4000);
    } else {
      setPhase('Inhala');
    }
    return () => clearInterval(interval);
  }, [isActive]);

  let circleScale = 1;
  let opacity = 1;
  
  if (isActive) {
    if (phase === 'Inhala') {
      circleScale = 1.3;
      opacity = 0.8;
    } else if (phase === 'Mantén') {
      circleScale = 1.3;
      opacity = 1;
    } else {
      circleScale = 0.8;
      opacity = 0.6;
    }
  }

  return (
    <div className="card fade-in" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
      <h3 className="text-accent mb-2" style={{ fontSize: '1.5rem' }}>Respiración Guiada</h3>
      <p className="mb-4" style={{ color: 'var(--color-text-main)' }}>Un momento para conectar contigo y bajar el ritmo.</p>
      
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px' }}>
        <div style={{ 
          width: '120px', height: '120px', margin: '0 auto 2rem', 
          borderRadius: '50%', backgroundColor: 'var(--color-bg-darker)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: `scale(${circleScale})`,
          transition: 'all 4s ease-in-out',
          opacity: opacity
        }}>
          <div style={{
            width: '90px', height: '90px', borderRadius: '50%',
            backgroundColor: 'var(--color-accent-soft)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff' }}>
              {isActive ? phase : 'Respira'}
            </span>
          </div>
        </div>
      </div>

      <button 
        className="btn-secondary mt-2"
        onClick={() => setIsActive(!isActive)}
        style={{ width: '100%' }}
      >
        {isActive ? 'Detener' : 'Comenzar'}
      </button>
    </div>
  );
};

export default BreathingExercise;
