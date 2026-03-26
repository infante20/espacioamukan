import React, { useState } from 'react';
import LeadCaptureForm from './LeadCaptureForm';

const questions = [
  "1. ¿Te has sentido nervioso/a, ansioso/a o con los nervios de punta?",
  "2. ¿Has sido incapaz de parar o controlar tu nivel de preocupación?",
  "3. ¿Te has preocupado de forma excesiva por diferentes motivos o cosas?",
  "4. ¿Has tenido dificultad para relajarte de manera genuina?",
  "5. ¿Te has sentido tan inquieto/a que no podías quedarte quieto/a?",
  "6. ¿Te has molestado o irritado fácilmente con tu entorno?",
  "7. ¿Has sentido miedo o presentimiento de que algo terrible pudiera pasar?"
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
    setAnswers([...answers, val]);
    setStep(step + 1);
  };

  const getResult = () => {
    const score = answers.reduce((a, b) => a + b, 0);
    
    if (score <= 4) return { 
      title: "Ansiedad Mínima", 
      desc1: "Tus respuestas (Puntuación: "+score+") reflejan un nivel mínimo de sintomatología ansiosa. Es normal experimentar breves episodios de nerviosismo ante eventos puntuales, pero tu sistema nervioso está logrando volver a su línea base sin dificultades sostenidas.",
      desc2: "Práctica recomendada: El objetivo es la prevención y el mantenimiento de tu salud mental. Sigue invirtiendo tiempo en actividades que estimulen tu tono vagal (relajación del sistema nervioso parasimpático), tales como caminar por la naturaleza, tener conversaciones significativas o dedicar tiempo a la lectura. Estas acciones actúan como un \"colchón\" protector para tu resiliencia ante futuros estresores."
    };
    
    if (score <= 9) return { 
      title: "Ansiedad Leve", 
      desc1: "Tu puntuación ("+score+") es indicativa de ansiedad leve. Probablemente notes que la preocupación comienza a ocupar espacio en tu mente, generando una leve hiperactivación física (ligera tensión muscular, sueño menos profundo o mente acelerada por las noches). Tu cuerpo está en un estado inicial de alerta.",
      desc2: "Práctica recomendada: Es el momento ideal para intervenir proactivamente. Implementa la técnica de 'Respiración de Caja' o 'Respiración 4-4-4-4' (inhalar en 4s, retener 4s, exhalar en 4s, retener 4s vacíos). Hazlo 5 minutos al día, idealmente en la mañana. Asimismo, intenta identificar los 'disparadores' anotando qué situaciones te producen los picos de ansiedad, para así gestionarlos o comunicarlos antes de que te sobrepasen."
    };

    if (score <= 14) return { 
      title: "Ansiedad Moderada", 
      desc1: "Tu puntuación ("+score+") sugiere ansiedad moderada. En esta etapa, la preocupación es frecuente e interfiere de forma visible en tu capacidad de concentración, tu descanso y tu tranquilidad basal. Fisiológicamente, el cerebro interpreta amenazas constantes, lo que puede explicar irritabilidad, cansancio crónico o dolores tensionales recurrentes.",
      desc2: "Práctica recomendada: Se hace necesario establecer límites claros en tu rutina. Reduce radicalmente el consumo de estimulantes (cafeína, pantallas estimulantes antes de dormir, exceso de noticias). Intenta escribir tus preocupaciones en papel para 'externalizarlas' del cerebro mediante un 'Diario de Descarga'. Si bien estos ejercicios ayudan en el momento, el acompañamiento psicológico en esta fase es altamente recomendable para descubrir la raíz del malestar y aprender a regular tus emociones eficazmente."
    };

    return { 
      title: "Ansiedad Severa", 
      desc1: "Los resultados (Puntuación: "+score+") son consistentes con niveles de ansiedad clínica o severa. El malestar emocional y las manifestaciones somáticas (taquicardia, sensación térmica inestable, inquietud extrema) están disminuyendo significativamente tu calidad de vida diaria. En este estado, la angustia opera en 'piloto automático', y suele sentirse muy abrumador.",
      desc2: "Práctica recomendada: Entiende que esto no es una falla de tu carácter; es una respuesta biológica de hiperactivación que requiere soporte especializado. Tu prioridad no debe ser 'echarle ganas' ni exigirte rendir, sino buscar regularidad. Se recomienda fuertemente buscar atención terapéutica y psicoterapia a la brevedad. Profesionales de la salud mental, como en Espacio Amukan, te proporcionarán un abordaje comprensivo y herramientas cognitivas seguras para recuperar el balance a tu propio ritmo."
    };
  };

  if (step === -1) {
    return (
      <div className="card fade-in" style={{ textAlign: 'center' }}>
        <h3 className="text-accent mb-2">Evaluación de Ansiedad (Escala GAD-7)</h3>
        <p className="text-main mb-4">Esta evaluación consta de 7 reactivos basados en el estándar internacional GAD-7 para la detección y medición de niveles de ansiedad clínica y sub-clínica.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn-secondary" onClick={onBack}>Volver</button>
          <button className="btn-primary" onClick={() => setStep(0)}>Iniciar Test</button>
        </div>
      </div>
    );
  }

  if (step < questions.length) {
    return (
      <div className="card fade-in" style={{ textAlign: 'center' }}>
        <p className="text-accent-soft mb-2" style={{ fontWeight: '500' }}>Pregunta {step + 1} de {questions.length} (Últimas 2 semanas)</p>
        <h3 className="text-main mb-4" style={{ fontSize: '1.25rem' }}>{questions[step]}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr)', gap: '0.8rem', maxWidth: '400px', margin: '0 auto' }}>
          {options.map((opt, i) => (
            <button 
              key={i} 
              className="btn-secondary" 
              style={{ textAlign: 'center', padding: '1rem' }}
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
    <div className="card fade-in" style={{ textAlign: 'left' }}>
      <h3 className="text-accent mb-3 text-center" style={{ fontSize: '1.8rem' }}>Resultados: {result.title}</h3>
      <p className="text-main mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>{result.desc1}</p>
      <p className="text-main mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>{result.desc2}</p>
      
      <div style={{ backgroundColor: 'var(--color-bg-base)', padding: '2rem', borderRadius: '15px', marginTop: '2rem', textAlign: 'center' }}>
        <LeadCaptureForm testName="Ansiedad GAD-7" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <button className="btn-secondary mt-4" onClick={onBack}>Cerrar Test</button>
      </div>
    </div>
  );
};

export default AnxietyTest;
