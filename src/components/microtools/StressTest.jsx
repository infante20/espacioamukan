import React, { useState } from 'react';
import LeadCaptureForm from './LeadCaptureForm';

const questions = [
  { q: "En el último mes, ¿con qué frecuencia te has sentido afectado(a) por algo que ha ocurrido inesperadamente?", invert: false },
  { q: "En el último mes, ¿con qué frecuencia has sentido que eras incapaz de controlar las cosas importantes en tu vida?", invert: false },
  { q: "En el último mes, ¿con qué frecuencia te has sentido seguro(a) sobre tu capacidad para manejar tus problemas personales?", invert: true },
  { q: "En el último mes, ¿con qué frecuencia has sentido que las cosas te van bien?", invert: true },
  { q: "En el último mes, ¿con qué frecuencia has sentido que las dificultades se acumulan tanto que no puedes superarlas?", invert: false }
];

const options = [
  { text: "Nunca", vals: { normal: 0, invert: 4 } },
  { text: "Casi nunca", vals: { normal: 1, invert: 3 } },
  { text: "De vez en cuando", vals: { normal: 2, invert: 2 } },
  { text: "A menudo", vals: { normal: 3, invert: 1 } },
  { text: "Muy a menudo", vals: { normal: 4, invert: 0 } }
];

const StressTest = ({ onBack }) => {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState([]);
  
  const handleAnswer = (valNormal, valInverted, invertLogic) => {
    const finalVal = invertLogic ? valInverted : valNormal;
    setAnswers([...answers, finalVal]);
    setStep(step + 1);
  };

  const getResult = () => {
    const score = answers.reduce((a, b) => a + b, 0);
    if (score <= 6) return { title: "Bajo Estrés", desc: "Sientes control sobre tu entorno. Aprovecha este balance para disfrutar tus rutinas." };
    if (score <= 13) return { title: "Estrés Moderado", desc: "Tienes algunas presiones en tu vida actual. Es normal, pero recuerda dejar espacios para descargar tensión." };
    return { title: "Alto Estrés", desc: "La sensación de descontrol parece estar dominando tus días. Es una señal de tu cuerpo pidiendo una pausa y buscar formas de delegar o ser acompañado(a)." };
  };

  if (step === -1) {
    return (
      <div className="card fade-in" style={{ textAlign: 'center' }}>
        <h3 className="text-accent mb-2">Test de Estrés</h3>
        <p className="text-main mb-4">Descubre cómo estás percibiendo y manejando las exigencias de tu entorno en este momento.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn-secondary" onClick={onBack}>Volver</button>
          <button className="btn-primary" onClick={() => setStep(0)}>Comenzar test</button>
        </div>
      </div>
    );
  }

  if (step < questions.length) {
    const q = questions[step];
    return (
      <div className="card fade-in" style={{ textAlign: 'center' }}>
        <p className="text-accent-soft mb-2" style={{ fontWeight: '500' }}>Pregunta {step + 1} de {questions.length}</p>
        <h3 className="text-main mb-4" style={{ fontSize: '1.4rem' }}>{q.q}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
          {options.map((opt, i) => (
            <button 
              key={i} 
              className="btn-secondary" 
              style={{ width: '100%', textAlign: 'left', justifyContent: 'center' }}
              onClick={() => handleAnswer(opt.vals.normal, opt.vals.invert, q.invert)}
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
        <LeadCaptureForm testName="Estrés" />
      </div>
      <button className="btn-secondary mt-4" onClick={onBack}>Cerrar Test</button>
    </div>
  );
};

export default StressTest;
