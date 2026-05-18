import React, { useState } from 'react';
import { Heart, Brain, Shield, Users, Baby, Utensils, Sparkles, MapPin, Mail, AtSign, Phone, Menu, X, MessageCircle, ChevronRight, ArrowRight } from 'lucide-react';

const services = [
  { icon: Brain, title: 'Psicoterapia Individual', desc: 'Explora tus emociones, pensamientos y comportamientos en un espacio seguro y sin juicios.', for: 'Necesitas sanar, comprenderte mejor o atravesar una crisis.', img: '/assets/hero_home_1775011757884.png' },
  { icon: Heart, title: 'Acompañamiento Emocional', desc: 'Contención y herramientas para el bienestar diario en momentos de transición o cambios vitales.', for: 'Buscas equilibrio emocional y estrategias prácticas frente al estrés.', img: '/assets/hero_tools_1775011776165.png' },
  { icon: Shield, title: 'Salud Mental Integral', desc: 'Trabajo interdisciplinario que conecta mente, cuerpo y entorno de manera equilibrada.', for: 'Deseas un enfoque sistémico que aborde tu bienestar globalmente.', img: '/assets/hero_rent_1775011797415.png' },
  { icon: Sparkles, title: 'Terapia EMDR', desc: 'Procesamiento de experiencias traumáticas, miedos intensos y bloqueos emocionales.', for: 'Cargás con vivencias difíciles del pasado que siguen afectando tu presente.', img: '/assets/hero_home_1775011757884.png' },
  { icon: Baby, title: 'Terapia Perinatal', desc: 'Acompañamiento durante embarazo, posparto y duelo gestacional con perspectiva compasiva.', for: 'Estás embarazada, en posparto o atravesando una pérdida gestacional.', img: '/assets/hero_tools_1775011776165.png' },
  { icon: Users, title: 'Terapia de Parejas', desc: 'Mejora la comunicación, resuelve conflictos y fortalece el vínculo desde el respeto mutuo.', for: 'La relación necesita un espacio para ser escuchada y reencauzada.', img: '/assets/hero_rent_1775011797415.png' },
  { icon: Utensils, title: 'Terapia TCA', desc: 'Abordaje de trastornos alimentarios desde una perspectiva compasiva, integrando cuerpo e identidad.', for: 'Tu relación con la comida o el cuerpo te genera sufrimiento.', img: '/assets/hero_home_1775011757884.png' },
];

const values = [
  { icon: Heart, title: 'Enfoque Ético', desc: 'Basado en el respeto profundo y el cuidado profesional.' },
  { icon: Brain, title: 'Mirada Integral', desc: 'Entendemos la salud mental como un todo interconectado.' },
  { icon: Users, title: 'Comunidad', desc: 'Un espacio que acoge y acompaña sin juicios.' },
];

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

const Demo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div data-theme="amukan" className="min-h-screen bg-base-100 font-sans">

      {/* ─── TOP BAR ─── */}
      <div className="bg-secondary text-secondary-content text-sm py-2 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2"><MapPin size={14} /> Concepción, Chile</span>
          <a href="tel:+56988186522" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone size={14} /> +56 9 8818 6522</a>
        </div>
      </div>

      {/* ─── NAVBAR ─── */}
      <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm px-4 lg:px-8 border-b border-base-300/40">
        <div className="navbar-start">
          <img src="/logos/amukanlogofinal-degradado.png" alt="Amukan" className="h-14" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 text-[15px] font-medium text-base-content/70">
            <li><a className="hover:text-primary transition-colors">Inicio</a></li>
            <li><a className="hover:text-primary transition-colors">Nuestra Clínica</a></li>
            <li><a className="hover:text-primary transition-colors">Servicios</a></li>
            <li><a className="hover:text-primary transition-colors">Arriendo Box</a></li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <a className="btn btn-primary btn-sm rounded-full px-6 gap-2 shadow-md shadow-primary/20">
            Herramientas Gratuitas <ArrowRight size={16} />
          </a>
        </div>
        <div className="navbar-end lg:hidden">
          <button className="btn btn-ghost btn-square" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-base-100 pt-28 px-8 lg:hidden">
          <ul className="menu menu-lg gap-2 text-lg">
            <li><a onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a onClick={() => setMenuOpen(false)}>Nuestra Clínica</a></li>
            <li><a onClick={() => setMenuOpen(false)}>Servicios</a></li>
            <li><a onClick={() => setMenuOpen(false)}>Arriendo Box</a></li>
            <li><a onClick={() => setMenuOpen(false)} className="text-primary font-semibold">Herramientas Gratuitas</a></li>
          </ul>
        </div>
      )}

      {/* ─── HERO with full image ─── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img src="/assets/hero_home_1775011757884.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
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
              <a className="btn btn-lg bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm gap-2">
                Conoce el equipo <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT — white bg, 2 columns ─── */}
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
            <a href="https://wa.me/56988186522" className="btn btn-outline border-base-content/20 hover:border-primary hover:text-primary gap-2" target="_blank" rel="noopener noreferrer">
              Contáctanos <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/box/453320358_1159890725221562_4854958009818615449_n.jpg" alt="Espacio" className="rounded-2xl object-cover h-48 w-full shadow-md" />
            <img src="/box/453668072_397198566806814_5933272007423847208_n.jpg" alt="Espacio" className="rounded-2xl object-cover h-48 w-full shadow-md mt-8" />
            <img src="/box/453893398_1982892275523677_6094157755233775769_n.jpg" alt="Espacio" className="rounded-2xl object-cover h-48 w-full shadow-md" />
            <img src="/box/453897685_3701162843483230_2907013580008991926_n.jpg" alt="Espacio" className="rounded-2xl object-cover h-48 w-full shadow-md mt-8" />
          </div>
        </div>
      </section>

      {/* ─── VALUES — light gray bg ─── */}
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

      {/* ─── MISSION — dark section with image overlay ─── */}
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

      {/* ─── SERVICES — white bg, cards with images ─── */}
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
                  <div className="card-actions mt-4">
                    <a href={`https://wa.me/56988186522?text=Hola,%20quisiera%20consultar%20sobre%20${encodeURIComponent(s.title)}`} className="btn btn-primary btn-sm w-full gap-2" target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon /> Consultar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOOLS CTA — accent bg ─── */}
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
                <a className="btn btn-lg bg-white text-primary hover:bg-base-200 gap-2 shadow-lg">
                  Test de Ansiedad <ArrowRight size={18} />
                </a>
                <a className="btn btn-lg bg-white/15 border-white/30 text-white hover:bg-white/25 gap-2">
                  Test de Estrés <ArrowRight size={18} />
                </a>
                <a className="btn btn-lg bg-white/15 border-white/30 text-white hover:bg-white/25 gap-2">
                  Test de Bienestar <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOX RENTAL — white bg with gallery ─── */}
      <section className="py-20 lg:py-28 px-4 lg:px-8 bg-base-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-3 gap-3">
            {[
              '/box/453943040_480783561332920_418260432686628149_n.jpg',
              '/box/453964735_1008213873960623_2795033961602349391_n.jpg',
              '/box/453989591_484538160949913_1551407456381853025_n.jpg',
              '/box/454038250_8483123245054555_3960474238232526561_n.jpg',
              '/box/454142682_1476888206301534_6839287305519863458_n.jpg',
              '/box/454164826_321205417738856_8830016631313967422_n.jpg',
            ].map((src, i) => (
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
            <a href="https://wa.me/56988186522?text=Hola,%20quisiera%20consultar%20sobre%20arriendo%20de%20box" className="btn btn-primary gap-2" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Consultar disponibilidad
            </a>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL CTA — dark bg ─── */}
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

      {/* ─── FOOTER ─── */}
      <footer className="bg-neutral text-neutral-content">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img src="/logos/logotipoblancoynewgro.png" alt="Amukan" className="h-14 mb-4 brightness-0 invert opacity-70" />
              <p className="text-neutral-content/60 text-sm leading-relaxed">Un centro de atención psicológica diseñado para la tranquilidad, el profesionalismo y el cuidado genuino de tu salud mental.</p>
            </div>
            <div>
              <h6 className="text-sm font-semibold uppercase tracking-wider mb-4 text-neutral-content/80">Enlaces</h6>
              <ul className="space-y-2 text-sm text-neutral-content/60">
                <li><a className="hover:text-white transition-colors">Inicio</a></li>
                <li><a className="hover:text-white transition-colors">Nuestra Clínica</a></li>
                <li><a className="hover:text-white transition-colors">Servicios</a></li>
                <li><a className="hover:text-white transition-colors">Herramientas</a></li>
                <li><a className="hover:text-white transition-colors">Arriendo Box</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-sm font-semibold uppercase tracking-wider mb-4 text-neutral-content/80">Contacto</h6>
              <ul className="space-y-3 text-sm text-neutral-content/60">
                <li className="flex items-center gap-2"><MapPin size={16} className="text-accent shrink-0" /> Concepción, Chile</li>
                <li className="flex items-center gap-2"><Mail size={16} className="text-accent shrink-0" /> contacto@espacioamukan.cl</li>
                <li className="flex items-center gap-2"><Phone size={16} className="text-accent shrink-0" /> +56 9 8818 6522</li>
                <li>
                  <a href="https://www.instagram.com/espacioamukan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <AtSign size={16} className="text-accent shrink-0" /> @espacioamukan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-content/10 py-4 text-center text-sm text-neutral-content/40">
          &copy; {new Date().getFullYear()} Amukan. Todos los derechos reservados.
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP ─── */}
      <a href="https://wa.me/56988186522" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 btn btn-circle btn-lg bg-green-500 hover:bg-green-600 border-0 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all">
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default Demo;
