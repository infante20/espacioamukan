import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      {/* Home Highlights / Navigation Cards instead of endless scroll */}
      <section className="section bg-glass" style={{position: 'relative', marginTop: '-100px', zIndex: 10, padding: '60px 24px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          <div className="card glass" style={{ textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: '2.5rem', color: 'var(--color-accent)' }}>Nuestra Visión</h3>
            <p>Descubre el enfoque humano y profesional detrás de nuestro equipo de psicólogos clínicos en Concepción.</p>
            <Link to="/nosotros" className="btn-outline">Conoce el equipo</Link>
          </div>

          <div className="card glass" style={{ textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: '2.5rem', color: 'var(--color-accent)' }}>Servicios Clínicos</h3>
            <p>Terapia individual, abordaje de ansiedad, desarrollo personal y acompañamiento sistémico.</p>
            <Link to="/servicios" className="btn-outline">Ver Especialidades</Link>
          </div>

          <div className="card glass" style={{ textAlign: 'center', background: 'rgba(236, 200, 182, 0.4)', border: '1px solid var(--color-accent)' }}>
            <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: '2.5rem', color: 'var(--color-text-main)' }}>Evalúa tu Estado</h3>
            <p>Accede de forma gratuita a nuestras pruebas clínicas y obtiene recomendaciones inmediatas validadas.</p>
            <Link to="/herramientas" className="btn-primary">Ir a Herramientas</Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
