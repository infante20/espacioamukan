import React from 'react';
import { Leaf, MapPin, Mail, AtSign } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer section" style={{ paddingBottom: '40px', backgroundColor: 'var(--color-bg-base)', borderTop: '1px solid rgba(236, 200, 182, 0.5)', marginTop: '60px' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', justifyContent: 'space-between' }}>
        
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ marginBottom: '20px' }}>
            <img src="/logos/logotipofinal.png" alt="Espacio Amukan Footer Logo" style={{ height: '70px', opacity: 0.9 }} />
          </div>
          <p>Un centro de atención psicológica diseñado para la tranquilidad, el profesionalismo y el cuidado genuino de tu salud mental.</p>
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Contacto</h3>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', marginBottom: '10px' }}>
            <MapPin size={18} color="var(--color-accent)" /> 
            Concepción, Chile
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', marginBottom: '10px' }}>
            <Mail size={18} color="var(--color-accent)" /> 
            contacto@espacioamukan.cl
          </p>
          <a href="https://www.instagram.com/espacioamukan" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1rem', color: 'var(--color-text-main)', marginTop: '10px' }}>
            <AtSign size={18} /> @espacioamukan
          </a>
        </div>
        
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: '60px', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.05)', color: 'var(--color-text-soft)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Amukan. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
