import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <NavLink to="/" className="nav-brand" onClick={close}>
          <img src="/logos/amukanlogofinal-degradado.png" alt="Amukan Logo" style={{ height: '110px' }} />
        </NavLink>

        {/* Hamburger */}
        <button
          className={`nav-toggle${isOpen ? ' open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <div className={`nav-menu${isOpen ? ' open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={close}>
            Inicio
          </NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={close}>
            Nuestra Clínica
          </NavLink>
          <NavLink to="/servicios" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={close}>
            Servicios
          </NavLink>
          <NavLink to="/herramientas" className={({ isActive }) => isActive ? 'nav-link highlight active' : 'nav-link highlight'} onClick={close}>
            Herramientas
          </NavLink>
          <NavLink to="/arriendo" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={close}>
            Arriendo Box
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
