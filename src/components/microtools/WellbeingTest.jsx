import React, { useState } from 'react';
import LeadCaptureForm from './LeadCaptureForm';

const questions = [
  "1. Me he sentido alegre y de buen ánimo.",
  "2. Me he sentido tranquilo(a) y relajado(a).",
  "3. Me he sentido activo(a) y con energía y vigor.",
  "4. Me he despertado sintiéndome fresco(a) y descansado(a).",
  "5. Mi vida diaria ha estado llena de cosas que me interesan."
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
    
    if (score >= 70) return { 
      title: "Bienestar General Óptimo", 
      desc1: "Tus respuestas arrojan un índice de bienestar del "+score+"%. Este es un rango altamente saludable que indica que experimentas niveles muy satisfactorios de energía vital, optimismo y calidad de sueño. Te encuentras en una ventana de tolerancia emocional que te permite disfrutar genuinamente de tus actividades e interactuar positivamente con tu entorno.",
      desc2: "Práctica recomendada: Tu prioridad debe ser capitalizar este nivel de energía. Es un excelente momento para enfocarte en proyectos creativos o cimentar lazos sociales, dado que posees el 'ancho de banda' mental y emocional para ello. Sigue nutriendo los hábitos, relaciones o rutinas que te hayan llevado a este estado, documentándolos para recordarlos en periodos de mayor desgaste."
    };
    
    if (score >= 50) return { 
      title: "Bienestar Aceptable", 
      desc1: "Tus resultados ("+score+"%) recaen en un área funcional aceptable, conocida a veces como modo de supervivencia funcional o 'flotación'. Significa que logras cumplir con las tareas de tu día a día, pero posiblemente tu energía no llegue sosegadamente al final de la jornada; la rutina y el desánimo moderado pueden opacar la plenitud de lo que experimentas.",
      desc2: "Práctica recomendada: Revisa tu 'higiene de recuperación'. El enfoque no es agregar más tareas, sino purgar aquello que drena tu energía. Considera integrar 'descansos sin estímulos' durante tu día (10 minutos sin celular ni hablar). Prioriza la conexión comunitaria no exigente e instaura algún ritual placentero pequeño exclusivo para ti, sea leer un par de páginas de un buen libro o simplemente disfrutar un té con intención consciente."
    };

    return { 
      title: "Bajo Índice de Bienestar / Posible Riesgo", 
      desc1: "Tu puntuación ("+score+"%) se encuentra bajo el nivel 50, lo cual es considerado clínicamente como una bandera roja para el bienestar y puede indicar sintomatología depresiva subyacente o 'burnout' severo. Sentir desinterés generalizado, mala calidad de descanso profundo y una carencia notable de vitalidad diaria son llamados urgentes a detenerte.",
      desc2: "Práctica recomendada: Tu aproximación aquí debe ser inmensamente autocompasiva y compasiva. Reduce las expectativas inmediatas sobre tu productividad en estos días. Intenta aplicar metas 'micro-habitos' (por ejemplo, tomar agua o exponerte al sol por 5 minutos). Lo más vital es que consideres esto como una señal legítima de agotamiento que debe ser tratada: buscar terapia profesional de apoyo es la sugerencia clínica directa, pues permite desenredar los componentes de tu desvitalización en un espacio seguro."
    };
  };

  if (step === -1) {
    return (
      <div className="card fade-in" style={{ textAlign: 'center' }}>
        <h3 className="text-accent mb-2">Índice de Bienestar de la OMS (WHO-5)</h3>
        <p className="text-main mb-4">El WHO-5 es una de las escalas más utilizadas globalmente para medir el estado de ánimo y la calidad de vida de forma rápida pero profundamente validada. Piensa en las últimas 2 semanas para responder.</p>
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
        <LeadCaptureForm testName="Bienestar WHO-5" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <button className="btn-secondary mt-4" onClick={onBack}>Cerrar Test</button>
      </div>
    </div>
  );
};

export default WellbeingTest;
