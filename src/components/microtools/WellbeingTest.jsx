import React, { useState } from 'react';
import LeadCaptureForm from './LeadCaptureForm';

const questions = [
  "Me he sentido alegre y de buen ánimo",
  "Me he sentido tranquilo(a) y relajado(a)",
  "Me he sentido activo(a) y con energía",
  "Me he despertado sintiéndome fresco(a) y descansado(a)",
  "Mi vida diaria ha estado llena de cosas que me interesan"
];

const options = [
  { text: "Todo el tiempo", value: 5 },
  { text: "La mayor parte del tiempo", value: 4 },
  { text: "Más de la mitad del tiempo", value: 3 },
  { text: "Menos de la mitad del tiempo", value: 2 },
  { text: "De vez en cuando", value: 1 },
  { text: "En ningún momento", value: 0 }
];

const WellbeingTest = ({ onBack }) => {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState([]);
  
  const handleAnswer = (val) => {
    setAnswers([...answers, val]);
    setStep(step + 1);
  };

  const getResult = () => {
    // Puntaje WHO-5: suma de 0 a 25 transformado a % (multiplicado por 4)
    const rawScore = answers.reduce((a, b) => a + b, 0);
    const score = rawScore * 4;
    
    if (score >= 70) return { title: "Bienestar Óptimo", desc: "¡Se nota que has estado cultivando hábitos positivos! Sigue priorizando aquellas actividades que recargan tu energía." };
    if (score >= 50) return { title: "Bienestar Aceptable", desc: "Tienes momentos buenos, pero quizá sientes que la rutina consume parte de tu ánimo. Un poco de autocuidado intencional te haría bien." };
    return { title: "Bajo Bienestar", desc: "Es posible que te estés sintiendo agotado(a) o desmotivado(a). Es un indicador para detenerte, escucharte y, si lo deseas, buscar acompañamiento." };
  };

  if (step === -1) {
    return (
      <div className="card fade-in" style={{ textAlign: 'center' }}>
        <h3 className="text-accent mb-2">Test de Bienestar Vital</h3>
        <p className="text-main mb-4">Responde pensando en cómo te has sentido durante las últimas 2 semanas para medir tu nivel general de vitalidad.</p>
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
        <LeadCaptureForm testName="Bienestar Vital" />
      </div>
      <button className="btn-secondary mt-4" onClick={onBack}>Cerrar Test</button>
    </div>
  );
};

export default WellbeingTest;
