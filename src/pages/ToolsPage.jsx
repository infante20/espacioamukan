import React, { useState } from 'react';
import { Activity, Gauge, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import AnxietyTest from '../components/microtools/AnxietyTest';
import StressTest from '../components/microtools/StressTest';
import WellbeingTest from '../components/microtools/WellbeingTest';

const tests = [
  { id: 'anxiety', icon: Activity, title: 'Medición de Ansiedad', desc: '7 preguntas basadas en el GAD-7 para evaluar tus niveles actuales de nerviosismo y preocupación constante.' },
  { id: 'stress', icon: Gauge, title: 'Estrés Percibido', desc: '4 preguntas (escala PSS) para descubrir cómo estás controlando las exigencias e imprevistos en tu vida.' },
  { id: 'wellbeing', icon: Sparkles, title: 'Índice de Bienestar', desc: '5 preguntas sobre tu vitalidad general y estado de ánimo positivo durante las últimas semanas.' },
];

const ToolsPage = () => {
  const [activeTest, setActiveTest] = useState(null);

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src="/assets/hero_tools_1775011776165.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full py-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Herramientas gratuitas</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Evalúa tu bienestar</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Cuestionarios clínicamente validados con guías de acción inmediatas, basados en instrumentos psicológicos estandarizados.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 lg:py-28 px-4 lg:px-8 bg-base-100">
        <div className="max-w-6xl mx-auto">
          {!activeTest ? (
            <>
              <div className="text-center mb-16">
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Elige un test</p>
                <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Herramientas de Autoconocimiento</h2>
                <p className="text-base-content/60 text-lg max-w-2xl mx-auto">
                  Breves cuestionarios adaptados de escalas psicológicas para evaluar tu estado.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tests.map((t) => (
                  <div key={t.id} className="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-base-300/40">
                    <div className="card-body">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <t.icon size={28} className="text-primary" />
                      </div>
                      <h3 className="card-title text-xl text-base-content">{t.title}</h3>
                      <p className="text-base-content/60 text-sm flex-1">{t.desc}</p>
                      <div className="card-actions mt-4">
                        <button onClick={() => setActiveTest(t.id)} className="btn btn-primary w-full gap-2">
                          Iniciar Test <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="max-w-3xl mx-auto">
              <button onClick={() => setActiveTest(null)} className="btn btn-ghost gap-2 mb-6">
                <ArrowLeft size={18} /> Volver a herramientas
              </button>
              <div className="card bg-base-100 shadow-md border border-base-300/40 p-6 md:p-10">
                {activeTest === 'anxiety' && <AnxietyTest onBack={() => setActiveTest(null)} />}
                {activeTest === 'stress' && <StressTest onBack={() => setActiveTest(null)} />}
                {activeTest === 'wellbeing' && <WellbeingTest onBack={() => setActiveTest(null)} />}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ToolsPage;
