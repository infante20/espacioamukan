import React, { useState } from 'react';

const EmotionalDiary = () => {
  const [entry, setEntry] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (entry.trim()) {
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setEntry('');
      }, 3000);
    }
  };

  return (
    <div className="card fade-in" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
      <h3 className="text-accent mb-2" style={{ fontSize: '1.5rem' }}>Diario Breve</h3>
      <p className="mb-4" style={{ color: 'var(--color-text-main)' }}>¿Qué estás sintiendo hoy? Escribirlo ayuda a soltar.</p>
      
      <div style={{ flex: 1 }}>
        <textarea 
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Hoy me siento..."
          style={{
            width: '100%',
            minHeight: '120px',
            padding: '1rem',
            borderRadius: '15px',
            border: '2px solid var(--color-bg-darker)',
            backgroundColor: '#fff',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            marginBottom: '1rem',
            resize: 'none',
            outline: 'none',
            color: 'var(--color-text-main)'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--color-bg-darker)'}
        />
        
        {saved ? (
          <p className="fade-in text-accent" style={{ fontWeight: '500', padding: '0.8rem 0' }}>
            ¡Guardado! Gracias por escucharte.
          </p>
        ) : (
          <button 
            className="btn-primary" 
            onClick={handleSave}
            style={{ width: '100%' }}
          >
            Soltar pensamiento
          </button>
        )}
      </div>
    </div>
  );
};

export default EmotionalDiary;
