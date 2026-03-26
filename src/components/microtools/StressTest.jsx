import React, { useState } from 'react';
import LeadCaptureForm from './LeadCaptureForm';

const questions = [
  { q: "En el último mes, ¿con qué frecuencia te has sentido afectado(a) por algo que ocurrió inesperadamente?", invert: false },
  { q: "En el último mes, ¿con qué frecuencia has sentido que eras incapaz de controlar las cosas importantes en tu vida?", invert: false },
  { q: "En el último mes, ¿con qué frecuencia te has sentido nervioso(a) o muy 'estresado(a)'?", invert: false },
  { q: "En el último mes, ¿con qué frecuencia te has sentido seguro(a) sobre tu capacidad para manejar tus problemas personales?", invert: true },
  { q: "En el último mes, ¿con qué frecuencia has sentido que las cosas te van bien y a tu favor?", invert: true },
  { q: "En el último mes, ¿con qué frecuencia has sentido que no podías afrontar todas las cosas que tenías que hacer?", invert: false },
  { q: "En el último mes, ¿con qué frecuencia has podido controlar las irritaciones o dificultades de tu vida?", invert: true },
  { q: "En el último mes, ¿con qué frecuencia has sentido que tenías todo bajo control?", invert: true },
  { q: "En el último mes, ¿con qué frecuencia te has enojado porque las cosas que pasaban estaban fuera de tu control?", invert: false },
  { q: "En el último mes, ¿con qué frecuencia has sentido que las dificultades se acumulan tanto que no puedes superarlas?", invert: false }
];

const options = [
  { text: "Nunca", valNormal: 0, valInvert: 4 },
  { text: "Casi nunca", valNormal: 1, valInvert: 3 },
  { text: "De vez en cuando", valNormal: 2, valInvert: 2 },
  { text: "A menudo", valNormal: 3, valInvert: 1 },
  { text: "Muy a menudo", valNormal: 4, valInvert: 0 }
];

const StressTest = ({ onBack }) => {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState([]);
  
  const handleAnswer = (valNormal, valInvert, isInverted) => {
    const finalVal = isInverted ? valInvert : valNormal;
    setAnswers([...answers, finalVal]);
    setStep(step + 1);
  };

  const getResult = () => {
    const score = answers.reduce((a, b) => a + b, 0);
    
    if (score <= 13) return { 
      title: "Bajo Estrés Percibido", 
      desc1: "Tus resultados (Puntuación: "+score+") indican que actualmente tienes una sensación sólida de control sobre tu entorno y las demandas de tu vida. Esto significa que cuentas con estrategias de afrontamiento efectivas frente a la adversidad y un buen nivel de resiliencia emocional, lo que protege tu sistema inmunológico y bienestar a largo plazo.",
      desc2: "Práctica recomendada: Para mantener este estado, es crucial proteger tus rutinas de autocuidado. Continúa priorizando tu descanso, el movimiento físico regular y los espacios de ocio. Puedes potenciar esta resiliencia practicando el 'Journaling de Gratitud', escribiendo tres cosas que salieron bien al final del día. Esto refuerza las vías neuronales asociadas al optimismo y el manejo del estrés preventivo."
    };
    
    if (score <= 26) return { 
      title: "Estrés Moderado", 
      desc1: "Tu puntuación ("+score+") sugiere que estás en un nivel de estrés moderado. Es común sentir que ciertas cosas escapan de tus manos y que las demandas superan ligeramente tus recursos en ocasiones. Fisiológicamente, tu cuerpo está activando el cortisol de forma intermitente, lo que puede causar fatiga silenciosa, sobrepensamiento o baja en tu capacidad de concentración.",
      desc2: "Práctica recomendada: Es momento de aplicar intervenciones de regulación del sistema nervioso. Te sugerimos la práctica del 'Suspiro Fisiológico' (dos inhalaciones rápidas por la nariz seguidas de una exhalación larga por la boca) para reducir el ritmo cardíaco en tiempo real. Además, practica el 'Time-Blocking' o bloqueo de tiempo, asignando franjas específicas para preocuparte o resolver tareas, y dejando bloques intocables para tu mera desconexión y descanso mental."
    };
    
    return { 
      title: "Alto Estrés Percibido", 
      desc1: "Tu puntuación ("+score+") es un indicador clínico de que estás experimentando altos niveles de sobrecarga. El estrés crónico en esta etapa mantiene tu sistema nervioso en modo de hipervigilancia ('lucha o huida'), lo que agota profundamente tu energía, altera tu ciclo de sueño y debilita temporalmente la claridad de pensamiento y la memoria de trabajo.",
      desc2: "Práctica recomendada: La prioridad actual es bajar la alerta biológica de tu cuerpo. Comienza con la 'Técnica de Grounding 5-4-3-2-1' cuando sientas que la mente se acelera, anclando tu atención a los sentidos físicos. Asimismo, considera priorizar estrictamente tu sueño y reducir la ingesta de estimulantes (cafeína, pantallas tarde). Lo más fundamental en este punto es delegar y verbalizar: iniciar un acompañamiento psicoterapéutico te brindará herramientas especializadas para desarticular la tensión y recuperar tu eje."
    };
  };

  if (step === -1) {
    return (
      <div className="card fade-in" style={{ textAlign: 'center' }}>
        <h3 className="text-accent mb-2">Escala de Estrés Percibido (PSS-10)</h3>
        <p className="text-main mb-4">Esta es una escala clínica de 10 preguntas respaldada científicamente para medir qué tan impredecible, incontrolable y sobrecargada encuentras tu vida. Nota: Las respuestas inversas se puntúan de forma ajustada automáticamente.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn-secondary" onClick={onBack}>Volver</button>
          <button className="btn-primary" onClick={() => setStep(0)}>Comenzar Evaluación</button>
        </div>
      </div>
    );
  }

  if (step < questions.length) {
    const q = questions[step];
    return (
      <div className="card fade-in" style={{ textAlign: 'center' }}>
        <p className="text-accent-soft mb-2" style={{ fontWeight: '500' }}>Pregunta {step + 1} de {questions.length}</p>
        <h3 className="text-main mb-4" style={{ fontSize: '1.25rem' }}>{q.q}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr)', gap: '0.8rem', maxWidth: '400px', margin: '0 auto' }}>
          {options.map((opt, i) => (
            <button 
              key={i} 
              className="btn-secondary" 
              style={{ textAlign: 'center', padding: '1rem' }}
              onClick={() => handleAnswer(opt.valNormal, opt.valInvert, q.invert)}
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
    <div className="card fade-in" style={{ textAlign: 'left' }}>
      <h3 className="text-accent mb-3 text-center" style={{ fontSize: '1.8rem' }}>Resultados: {result.title}</h3>
      <p className="text-main mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>{result.desc1}</p>
      <p className="text-main mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>{result.desc2}</p>
      
      <div style={{ backgroundColor: 'var(--color-bg-base)', padding: '2rem', borderRadius: '15px', marginTop: '2rem', textAlign: 'center' }}>
        <LeadCaptureForm testName="Estrés PSS-10" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <button className="btn-secondary mt-4" onClick={onBack}>Cerrar Test</button>
      </div>
    </div>
  );
};

export default StressTest;
