import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Shield, Users, Baby, Utensils, Sparkles, AtSign, ArrowRight, ChevronRight } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const heroBoxImages = [
  '/box/453668072_397198566806814_5933272007423847208_n.jpg',
  '/box/453893398_1982892275523677_6094157755233775769_n.jpg',
  '/box/453897685_3701162843483230_2907013580008991926_n.jpg',
  '/box/453943040_480783561332920_418260432686628149_n.jpg',
  '/box/453964735_1008213873960623_2795033961602349391_n.jpg',
  '/box/453989591_484538160949913_1551407456381853025_n.jpg',
];

const services = [
  { icon: Brain, title: 'Psicoterapia Individual', desc: 'Explora tus emociones, pensamientos y comportamientos en un espacio seguro y sin juicios.', for: 'Necesitas sanar, comprenderte mejor o atravesar una crisis.', img: '/assets/hero_home_1775011757884.png' },
  { icon: Heart, title: 'Acompañamiento Emocional', desc: 'Contención y herramientas para el bienestar diario en momentos de transición o cambios vitales.', for: 'Buscas equilibrio emocional y estrategias prácticas frente al estrés.', img: '/assets/hero_tools_1775011776165.png' },
  { icon: Shield, title: 'Salud Mental Integral', desc: 'Trabajo interdisciplinario que conecta mente, cuerpo y entorno de manera equilibrada.', for: 'Deseas un enfoque sistémico que aborde tu bienestar globalmente.', img: '/assets/hero_rent_1775011797415.png' },
  { icon: Sparkles, title: 'Terapia EMDR', desc: 'Procesamiento de experiencias traumáticas, miedos intensos y bloqueos emocionales.', for: 'Llevas vivencias difíciles del pasado que siguen afectando tu presente.', img: '/assets/hero_home_1775011757884.png' },
  { icon: Baby, title: 'Terapia Perinatal', desc: 'Acompañamiento durante embarazo, posparto y duelo gestacional con perspectiva compasiva.', for: 'Estás embarazada, en posparto o atravesando una pérdida gestacional.', img: '/assets/hero_tools_1775011776165.png' },
  { icon: Users, title: 'Terapia de Parejas', desc: 'Mejora la comunicación, resuelve conflictos y fortalece el vínculo desde el respeto mutuo.', for: 'La relación necesita un espacio para ser escuchada y reencauzada.', img: '/assets/hero_rent_1775011797415.png' },
  { icon: Utensils, title: 'Terapia TCA', desc: 'Abordaje de trastornos alimentarios desde una perspectiva compasiva, integrando cuerpo e identidad.', for: 'Tu relación con la comida o el cuerpo te genera sufrimiento.', img: '/assets/hero_home_1775011757884.png' },
];

const values = [
  { icon: Heart, title: 'Enfoque Ético', desc: 'Basado en el respeto profundo y el cuidado profesional.' },
  { icon: Brain, title: 'Mirada Integral', desc: 'Entendemos la salud mental como un todo interconectado.' },
  { icon: Users, title: 'Comunidad', desc: 'Un espacio que acoge y acompaña sin juicios.' },
];

const Home = () => {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroSlide((i) => (i + 1) % heroBoxImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO with rotating box images */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {heroBoxImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden={i !== heroSlide}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: i === heroSlide ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">Espacio Amukan</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Un espacio para cuidar tu salud mental
            </h1>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Psicoterapia con enfoque integral, inclusivo y respetuoso de tu historia. Acompañamos cada proceso en su ritmo y singularidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/56988186522" className="btn btn-primary btn-lg gap-2 shadow-lg" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Agendar Consulta
              </a>
              <Link to="/nosotros" className="btn btn-lg bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm gap-2">
                Conoce el equipo <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — white bg, 2 columns */}
      <section className="py-20 lg:py-28 px-4 lg:px-8 bg-base-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Quiénes somos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">Sobre Amukan</h2>
            <p className="text-base-content/60 text-lg leading-relaxed mb-6">
              Amukan es un espacio de acompañamiento terapéutico donde cada proceso es respetado en su ritmo, historia y singularidad.
            </p>
            <p className="text-base-content/60 leading-relaxed mb-8">
              Brindamos evaluaciones diagnósticas e intervenciones con un enfoque interdisciplinario, que apoye al usuario y a su familia en alcanzar un estado de bienestar, especializándonos en la prevención y manejo integral de diversos desafíos emocionales.
            </p>
            <Link to="/nosotros" className="btn btn-outline border-base-content/20 hover:border-primary hover:text-primary gap-2">
              Conoce más <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/box/453668072_397198566806814_5933272007423847208_n.jpg" alt="Espacio" className="rounded-2xl object-cover h-48 w-full shadow-md" />
            <img src="/box/453893398_1982892275523677_6094157755233775769_n.jpg" alt="Espacio" className="rounded-2xl object-cover h-48 w-full shadow-md mt-8" />
            <img src="/box/453897685_3701162843483230_2907013580008991926_n.jpg" alt="Espacio" className="rounded-2xl object-cover h-48 w-full shadow-md" />
            <img src="/box/453943040_480783561332920_418260432686628149_n.jpg" alt="Espacio" className="rounded-2xl object-cover h-48 w-full shadow-md mt-8" />
          </div>
        </div>
      </section>

      {/* VALUES — light gray bg */}
      <section className="py-20 lg:py-28 px-4 lg:px-8 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Nuestro enfoque</p>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">Lo que nos define</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0">
                <div className="card-body items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <v.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="card-title text-xl text-base-content">{v.title}</h3>
                  <p className="text-base-content/60">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION — dark with image overlay */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <img src="/assets/hero_tools_1775011776165.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/85"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <img src="/logos/logotipoblancoynewgro.png" alt="Amukan" className="h-20 mx-auto mb-8 brightness-0 invert opacity-60" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">Compromiso</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Te ofrecemos espacios cálidos y profesionales junto a nuestro equipo. A través de diversas intervenciones, acompañamos procesos de sanación, crecimiento y bienestar integral.
          </p>
          <a href="https://wa.me/56988186522" className="btn bg-white text-secondary hover:bg-base-200 btn-lg gap-2 shadow-lg" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Reservar Hora
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-28 px-4 lg:px-8 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Especialidades</p>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Nuestros Servicios</h2>
            <p className="text-base-content/60 text-lg max-w-2xl mx-auto">Acompañamiento profesional desde una mirada compasiva e integral</p>
          </div>
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
          <div className="text-center mt-12">
            <Link to="/servicios" className="btn btn-outline border-base-content/20 hover:border-primary hover:text-primary gap-2">
              Ver todos los servicios <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TOOLS CTA */}
      <section className="py-20 lg:py-28 px-4 lg:px-8 bg-base-200">
        <div className="max-w-5xl mx-auto">
          <div className="card bg-gradient-to-br from-primary to-primary/80 text-primary-content shadow-2xl overflow-hidden">
            <div className="card-body text-center py-16 px-8 lg:px-16">
              <p className="text-primary-content/60 font-semibold tracking-widest uppercase text-sm mb-2">Herramientas gratuitas</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Evalúa tu estado emocional</h2>
              <p className="text-primary-content/80 text-lg max-w-xl mx-auto mb-8">
                Accede a nuestras pruebas clínicas validadas y obtén recomendaciones personalizadas de forma inmediata.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/herramientas" className="btn btn-lg bg-white text-primary hover:bg-base-200 gap-2 shadow-lg">
                  Test de Ansiedad <ArrowRight size={18} />
                </Link>
                <Link to="/herramientas" className="btn btn-lg bg-white/15 border-white/30 text-white hover:bg-white/25 gap-2">
                  Test de Estrés <ArrowRight size={18} />
                </Link>
                <Link to="/herramientas" className="btn btn-lg bg-white/15 border-white/30 text-white hover:bg-white/25 gap-2">
                  Test de Bienestar <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOX RENTAL */}
      <section className="py-20 lg:py-28 px-4 lg:px-8 bg-base-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-3 gap-3">
            {heroBoxImages.map((src, i) => (
              <img key={i} src={src} alt="Box" className="rounded-xl object-cover h-32 w-full shadow-sm hover:shadow-md transition-shadow" />
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Para profesionales</p>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">Arriendo de Box</h2>
            <p className="text-base-content/60 text-lg leading-relaxed mb-4">
              Espacios clínicos cálidos, equipados y diseñados para la tranquilidad de tus pacientes.
            </p>
            <p className="text-base-content/60 leading-relaxed mb-8">
              Ofrecemos boxes por hora, media jornada o jornada completa. Incluye sala de espera, Wi-Fi, climatización y un entorno profesional.
            </p>
            <Link to="/arriendo" className="btn btn-primary gap-2">
              Ver detalles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL CTA */}
      <section className="py-16 px-4 lg:px-8 bg-secondary text-secondary-content">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Síguenos en redes sociales</h3>
            <p className="text-secondary-content/70">Contenido sobre bienestar emocional, tips y acompañamiento.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/espacioamukan" target="_blank" rel="noopener noreferrer" className="btn btn-lg bg-white/10 border-white/20 text-white hover:bg-white/20 gap-2">
              <AtSign size={20} /> Instagram
            </a>
            <a className="btn btn-lg bg-white/10 border-white/20 text-white hover:bg-white/20 gap-2">
              <Heart size={20} /> Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
