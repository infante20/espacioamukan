import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MapPin, Phone, Menu, X, ArrowRight } from 'lucide-react';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/nosotros', label: 'Nuestra Clínica' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/arriendo', label: 'Arriendo Box' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-secondary text-secondary-content text-sm py-2 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2"><MapPin size={14} /> Concepción, Chile</span>
          <a href="tel:+56988186522" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone size={14} /> +56 9 8818 6522</a>
        </div>
      </div>

      <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm px-4 lg:px-8 border-b border-base-300/40">
        <div className="navbar-start">
          <Link to="/"><img src="/logos/amukanlogofinal-degradado.png" alt="Amukan" className="h-14" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 text-[15px] font-medium text-base-content/70">
            {links.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={({ isActive }) => `hover:text-primary transition-colors ${isActive ? 'text-primary font-semibold' : ''}`}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <Link to="/herramientas" className="btn btn-primary btn-sm rounded-full px-6 gap-2 shadow-md shadow-primary/20">
            Herramientas Gratuitas <ArrowRight size={16} />
          </Link>
        </div>
        <div className="navbar-end lg:hidden">
          <button className="btn btn-ghost btn-square" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-base-100 pt-28 px-8 lg:hidden">
          <ul className="menu menu-lg gap-2 text-lg">
            {links.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} onClick={() => setMenuOpen(false)}>{l.label}</NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/herramientas" onClick={() => setMenuOpen(false)} className="text-primary font-semibold">
                Herramientas Gratuitas
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
