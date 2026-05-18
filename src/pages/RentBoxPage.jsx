import React from 'react';
import { MapPin, Wifi, Coffee, Clock, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const boxImages = [
  '/box/453668072_397198566806814_5933272007423847208_n.jpg',
  '/box/453893398_1982892275523677_6094157755233775769_n.jpg',
  '/box/453897685_3701162843483230_2907013580008991926_n.jpg',
  '/box/453943040_480783561332920_418260432686628149_n.jpg',
  '/box/453964735_1008213873960623_2795033961602349391_n.jpg',
  '/box/453989591_484538160949913_1551407456381853025_n.jpg',
];

const features = [
  { icon: Clock, title: 'Flexibilidad horaria', desc: 'Arriendo por hora, media jornada o jornada completa según tu agenda.' },
  { icon: Wifi, title: 'Wi-Fi profesional', desc: 'Conexión estable para sesiones online y trabajo administrativo.' },
  { icon: Coffee, title: 'Sala de espera', desc: 'Espacio común cálido y silencioso para tus pacientes antes de la sesión.' },
  { icon: ShieldCheck, title: 'Privacidad asegurada', desc: 'Boxes insonorizados y entorno reservado, pensado para la confidencialidad.' },
];

const RentBoxPage = () => (
  <>
    {/* PAGE HERO */}
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src="/assets/hero_rent_1775011797415.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full py-16">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Para profesionales</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Arriendo de Box Clínico</h1>
        <p className="text-lg text-white/80 max-w-2xl">
          Únete a nuestro espacio de salud en Barrio Lo Pequén y ofrece a tus pacientes un entorno de primer nivel.
        </p>
      </div>
    </section>

    {/* INFO + LOCATION */}
    <section className="py-20 lg:py-28 px-4 lg:px-8 bg-base-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Nuestro espacio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">Boxes equipados, listos para usar</h2>
          <p className="text-base-content/60 text-lg leading-relaxed mb-4">
            Espacios clínicos cálidos, mobiliario profesional y un entorno diseñado para la tranquilidad de tus pacientes.
          </p>
          <p className="text-base-content/60 leading-relaxed mb-6">
            <strong className="text-base-content">Calle Nonguén 265</strong>, Sector Lo Pequén, Concepción. Excelente conectividad, estacionamientos cercanos y buena accesibilidad en transporte público.
          </p>
          <div className="flex items-center gap-2 text-base-content/70 mb-8">
            <MapPin size={18} className="text-primary" /> Concepción, Región del Biobío
          </div>
          <a href="https://wa.me/56988186522?text=Hola,%20quisiera%20consultar%20disponibilidad%20para%20arriendo%20de%20box" className="btn btn-primary btn-lg gap-2" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Consultar disponibilidad
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {boxImages.slice(0, 4).map((src, i) => (
            <img key={i} src={src} alt={`Box ${i + 1}`} className={`rounded-2xl object-cover h-52 w-full shadow-md ${i % 2 ? 'mt-8' : ''}`} />
          ))}
        </div>
      </div>
    </section>

    {/* FEATURES */}
    <section className="py-20 lg:py-28 px-4 lg:px-8 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Incluido en el arriendo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">Todo lo que necesitas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card bg-base-100 shadow-sm border border-base-300/40">
              <div className="card-body">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <f.icon size={22} className="text-primary" />
                </div>
                <h3 className="card-title text-base text-base-content">{f.title}</h3>
                <p className="text-base-content/60 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FULL GALLERY */}
    <section className="py-20 lg:py-28 px-4 lg:px-8 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Galería</p>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">Conoce nuestros espacios</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {boxImages.map((src, i) => (
            <img key={i} src={src} alt={`Box ${i + 1}`} className="rounded-xl object-cover h-56 w-full shadow-sm hover:shadow-lg transition-shadow" />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-4 lg:px-8 bg-secondary text-secondary-content">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Quieres arrendar un box?</h2>
        <p className="text-secondary-content/70 mb-8 text-lg">
          Escríbenos por WhatsApp y agendamos una visita al espacio.
        </p>
        <a href="https://wa.me/56988186522?text=Hola,%20quisiera%20consultar%20disponibilidad%20para%20arriendo%20de%20box" className="btn btn-lg bg-white text-secondary hover:bg-base-200 gap-2 shadow-lg" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> Consultar arriendo
        </a>
      </div>
    </section>
  </>
);

export default RentBoxPage;
