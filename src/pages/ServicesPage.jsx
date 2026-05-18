import React from 'react';
import { Heart, Brain, Shield, Users, Baby, Utensils, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../components/WhatsAppIcon';

const services = [
  { icon: Brain, title: 'Psicoterapia Individual', desc: 'Para quienes buscan un espacio seguro donde explorar sus emociones, pensamientos y comportamientos, entendiendo su historia sin juicios.', for: 'Necesitas sanar, comprenderte mejor o atravesar una crisis.', img: '/assets/hero_home_1775011757884.png' },
  { icon: Heart, title: 'Acompañamiento Emocional', desc: 'Un enfoque centrado en la contención y el desarrollo de herramientas para el bienestar diario, ideal para momentos de transición o cambios vitales.', for: 'Buscas equilibrio emocional y estrategias prácticas frente al estrés.', img: '/assets/hero_tools_1775011776165.png' },
  { icon: Shield, title: 'Salud Mental Integral', desc: 'Trabajo interdisciplinario que entiende el bienestar como un proceso completo, conectando mente, cuerpo y entorno de manera equilibrada.', for: 'Deseas un enfoque sistémico que aborde tu bienestar globalmente.', img: '/assets/hero_rent_1775011797415.png' },
  { icon: Sparkles, title: 'Terapia EMDR', desc: 'La Desensibilización y Reprocesamiento por Movimientos Oculares (EMDR) es un abordaje terapéutico especializado para el procesamiento de experiencias traumáticas, miedos intensos y bloqueos emocionales que no ceden con la terapia convencional.', for: 'Llevas vivencias difíciles del pasado que siguen afectando tu presente.', img: '/assets/hero_home_1775011757884.png' },
  { icon: Baby, title: 'Terapia Perinatal', desc: 'Acompañamiento especializado durante el embarazo, posparto y duelo gestacional. Un espacio para transitar los cambios emocionales, la identidad materna y paterna, y los desafíos únicos de la etapa perinatal.', for: 'Estás embarazada, en posparto o atravesando una pérdida gestacional.', img: '/assets/hero_tools_1775011776165.png' },
  { icon: Users, title: 'Terapia de Parejas', desc: 'Un espacio seguro para que dos personas trabajen juntas en mejorar su comunicación, resolver conflictos recurrentes y fortalecer el vínculo desde el respeto y la comprensión mutua.', for: 'Sientes que la relación necesita un espacio para ser escuchada y reencauzada.', img: '/assets/hero_rent_1775011797415.png' },
  { icon: Utensils, title: 'Terapia TCA', desc: 'Abordaje especializado en Trastornos de la Conducta Alimentaria como anorexia, bulimia y atracones. Trabajamos desde una perspectiva compasiva y libre de juicios, integrando cuerpo, emociones e identidad.', for: 'Tu relación con la comida o el cuerpo te genera sufrimiento o interferencia en tu vida.', img: '/assets/hero_home_1775011757884.png' },
];

const ServicesPage = () => (
  <>
    {/* PAGE HERO */}
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src="/assets/hero_home_1775011757884.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full py-16">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Especialidades</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Servicios Profesionales</h1>
        <p className="text-lg text-white/80 max-w-2xl">Abordajes terapéuticos fundamentados en ciencia y calidez humana.</p>
      </div>
    </section>

    {/* SERVICES GRID */}
    <section className="py-20 lg:py-28 px-4 lg:px-8 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-base-300/40 overflow-hidden group">
              <figure className="h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </figure>
              <div className="card-body">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="card-title text-lg text-base-content">{s.title}</h3>
                </div>
                <p className="text-base-content/60 text-sm">{s.desc}</p>
                <div className="mt-3 p-3 rounded-xl bg-base-200">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Para ti si:</p>
                  <p className="text-sm text-base-content/70">{s.for}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-4 lg:px-8 bg-base-200">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Da el primer paso</p>
        <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">¿Necesitas orientación?</h2>
        <p className="text-base-content/60 mb-8 max-w-xl mx-auto">
          Cuéntanos qué buscas y te recomendaremos el servicio que mejor se adapte a tu proceso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/56988186522" className="btn btn-primary btn-lg gap-2" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Agendar Consulta
          </a>
          <Link to="/herramientas" className="btn btn-outline btn-lg gap-2">
            Evalúa tu estado <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default ServicesPage;
