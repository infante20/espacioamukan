import React, { useState } from 'react';
import LeadCaptureForm from './LeadCaptureForm';

const questions = [
  "Durante las últimas 2 semanas, ¿con qué frecuencia te has sentido nervioso(a), ansioso(a) o con los nervios de punta?",
  "¿Con qué frecuencia no has podido parar o controlar tu preocupación?",
  "¿Te has preocupado demasiado por diferentes cosas?",
  "¿Has tenido dificultad para relajarte?",
  "¿Te has sentido tan inquieto(a) que no podías quedarte quieto(a)?",
  "¿Te has molestado o irritado fácilmente?",
  "¿Has sentido miedo, como si algo terrible pudiera pasar?"
];

const options = [
  { text: "Nunca", value: 0 },
  { text: "Varios días", value: 1 },
  { text: "Más de la mitad de los días", value: 2 },
  { text: "Casi todos los días", value: 3 }
];

const AnxietyTest = ({ onBack }) => {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState([]);
  
  const handleAnswer = (val) => {
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const getResult = () => {
    const score = answers.reduce((a, b) => a + b, 0);
    if (score <= 4) return { title: "Niveles Mínimos", desc: "Tus respuestas sugieren un nivel mínimo de ansiedad. ¡Sigue cuidando tus hábitos y espacios de calma!" };
    if (score <= 9) return { title: "Ansiedad Leve", desc: "Experimentas algo de ansiedad. Es buen momento para incorporar técnicas de respiración, pausas activas o conversar con alguien de confianza." };
    if (score <= 14) return { title: "Ansiedad Moderada", desc: "Tus niveles de preocupación pueden estar afectando tu día a día. Pausar y escuchar qué te pide el cuerpo es importante." };
    return { title: "Ansiedad Alta", desc: "Es probable que la ansiedad esté limitando tu bienestar y tu energía diaria. Está bien pedir ayuda, no tienes que transitar esto a solas." };
  };

  if (step === -1) {
    return (
      <div className="card fade-in" style={{ textAlign: 'center' }}>
        <h3 className="text-accent mb-2">Test de Ansiedad</h3>
        <p className="text-main mb-4">7 preguntas breves para entender cómo te has estado sintiendo últimamente. Esto no reemplaza un diagnóstico médico, pero es un gran primer paso.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn-secondary" onClick={onBack}>Volver</button>
          <button className="btn-primary" onClick={() => setStep(0)}>Comenzar test</button>
        </div>
      </div>
    );
  }

  if (step < questions.length) {
    return (
      <div className="card fade-in" style={{ textAlign: 'center' }}>
        <p className="text-accent-soft mb-2" style={{ fontWeight: '500' }}>Pregunta {step + 1} de {questions.length}</p>
        <h3 className="text-main mb-4" style={{ fontSize: '1.4rem' }}>{questions[step]}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
          {options.map((opt, i) => (
            <button 
              key={i} 
              className="btn-secondary" 
              style={{ width: '100%', textAlign: 'left', justifyContent: 'center' }}
              onClick={() => handleAnswer(opt.value)}
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const result = getResult();

  return (
    <div className="card fade-in" style={{ textAlign: 'center' }}>
      <h3 className="text-accent mb-2">Tu Resultado: {result.title}</h3>
      <p className="text-main mb-4">{result.desc}</p>
      
      <div style={{ backgroundColor: 'var(--color-bg-base)', padding: '2rem', borderRadius: '15px', marginTop: '2rem' }}>
        <LeadCaptureForm testName="Ansiedad" />
      </div>
      <button className="btn-secondary mt-4" onClick={onBack}>Cerrar Test</button>
    </div>
  );
};

export default AnxietyTest;
