import React from 'react';
import { Heart, Brain, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../components/WhatsAppIcon';

const values = [
  { icon: Heart, title: 'Enfoque Ético', desc: 'Basado en el respeto profundo y el cuidado profesional de cada persona.' },
  { icon: Brain, title: 'Mirada Integral', desc: 'Entendemos la salud mental como un todo interconectado entre mente, cuerpo y entorno.' },
  { icon: Users, title: 'Comunidad', desc: 'Un espacio que acoge y acompaña sin juicios, respetando cada historia.' },
];

const AboutPage = () => (
  <>
    {/* PAGE HERO */}
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src="/assets/hero_rent_1775011797415.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full py-16">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Quiénes somos</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Nuestra Clínica</h1>
        <p className="text-lg text-white/80 max-w-2xl">Un refugio urbano pensado para poner en pausa el ruido cotidiano y conectar contigo.</p>
      </div>
    </section>

    {/* ABOUT 2-col */}
    <section className="py-20 lg:py-28 px-4 lg:px-8 bg-base-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Sobre Amukan</p>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">Un espacio terapéutico integral</h2>
          <p className="text-base-content/60 text-lg leading-relaxed mb-6">
            Amukan es un espacio de acompañamiento terapéutico donde cada proceso es respetado en su ritmo, historia y singularidad.
          </p>
          <p className="text-base-content/60 leading-relaxed mb-8">
            Brindamos evaluaciones diagnósticas e intervenciones con un enfoque interdisciplinario, que apoye al usuario y a su familia en alcanzar un estado de bienestar, especializándonos en la prevención y manejo integral de diversos desafíos emocionales.
          </p>
          <a href="https://wa.me/56988186522" className="btn btn-primary gap-2" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Contáctanos
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/box/453668072_397198566806814_5933272007423847208_n.jpg" alt="Espacio" className="rounded-2xl object-cover h-48 w-full shadow-md" />
          <img src="/box/453893398_1982892275523677_6094157755233775769_n.jpg" alt="Espacio" className="rounded-2xl object-cover h-48 w-full shadow-md mt-8" />
          <img src="/box/453897685_3701162843483230_2907013580008991926_n.jpg" alt="Espacio" className="rounded-2xl object-cover h-48 w-full shadow-md" />
          <img src="/box/453943040_480783561332920_418260432686628149_n.jpg" alt="Espacio" className="rounded-2xl object-cover h-48 w-full shadow-md mt-8" />
        </div>
      </div>
    </section>

    {/* VALUES */}
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

    {/* CTA */}
    <section className="py-16 px-4 lg:px-8 bg-base-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-base-content mb-4">¿Listo para empezar?</h2>
        <p className="text-base-content/60 mb-8">Agenda una primera consulta con nuestro equipo.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/56988186522" className="btn btn-primary btn-lg gap-2" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Agendar Consulta
          </a>
          <Link to="/servicios" className="btn btn-outline btn-lg gap-2">
            Ver servicios <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
