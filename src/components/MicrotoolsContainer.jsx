import React from 'react';
import EmotionalTest from './microtools/EmotionalTest';
import BreathingExercise from './microtools/BreathingExercise';
import EmotionalDiary from './microtools/EmotionalDiary';

const MicrotoolsContainer = () => {
  return (
    <section className="microtools bg-soft" style={{ padding: '5rem 0', backgroundColor: 'var(--color-bg-base)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="text-accent mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Herramientas para ti</h2>
          <p className="text-main" style={{ fontSize: '1.2rem' }}>Pequeñas acciones para conectarte con tu bienestar</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <EmotionalTest />
          <BreathingExercise />
          <EmotionalDiary />
        </div>
      </div>
    </section>
  );
};

export default MicrotoolsContainer;
