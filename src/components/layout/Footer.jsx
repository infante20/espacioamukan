import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, AtSign } from 'lucide-react';

const Footer = () => (
  <footer className="bg-neutral text-neutral-content">
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src="/logos/logotipoblancoynewgro.png" alt="Amukan" className="h-14 mb-4 brightness-0 invert opacity-70" />
          <p className="text-neutral-content/60 text-sm leading-relaxed">
            Un centro de atención psicológica diseñado para la tranquilidad, el profesionalismo y el cuidado genuino de tu salud mental.
          </p>
        </div>
        <div>
          <h6 className="text-sm font-semibold uppercase tracking-wider mb-4 text-neutral-content/80">Enlaces</h6>
          <ul className="space-y-2 text-sm text-neutral-content/60">
            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link to="/nosotros" className="hover:text-white transition-colors">Nuestra Clínica</Link></li>
            <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
            <li><Link to="/herramientas" className="hover:text-white transition-colors">Herramientas</Link></li>
            <li><Link to="/arriendo" className="hover:text-white transition-colors">Arriendo Box</Link></li>
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
);

export default Footer;
