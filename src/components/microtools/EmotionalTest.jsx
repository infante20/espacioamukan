import React, { useState } from 'react';

const EmotionalTest = () => {
  const [selected, setSelected] = useState(null);
  
  const options = [
    { emoji: '☀️', label: 'Bien', message: '¡Qué bueno! Sigue cuidando tu energía hoy y disfrutando.' },
    { emoji: '☁️', label: 'Regular', message: 'No tienes que poder con todo. Un paso a la vez es suficiente.' },
    { emoji: '🌧️', label: 'Difícil', message: 'Podemos acompañarte en este proceso. Considera agendar si lo necesitas.' }
  ];

  return (
    <div className="card fade-in" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
      <h3 className="text-accent mb-2" style={{ fontSize: '1.5rem' }}>¿Cómo está tu bienestar hoy?</h3>
      <p className="mb-4" style={{ color: 'var(--color-text-main)' }}>Tómate un segundo para reconocer cómo te sientes.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', flex: 1 }}>
        {options.map((opt, idx) => (
          <button 
            key={idx}
            onClick={() => setSelected(opt)}
            style={{
              padding: '1rem',
              borderRadius: '15px',
              border: selected?.label === opt.label ? '2px solid var(--color-accent)' : '2px solid transparent',
              backgroundColor: 'var(--color-bg-base)',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              flex: '1 1 80px',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>{opt.emoji}</span>
            {opt.label}
          </button>
        ))}
      </div>

      {selected && (
        <div className="mt-4 fade-in" style={{ padding: '1rem', backgroundColor: 'var(--color-bg-soft)', borderRadius: '10px' }}>
          <p className="text-main" style={{ fontWeight: '500', margin: 0 }}>{selected.message}</p>
        </div>
      )}
    </div>
  );
};

export default EmotionalTest;
