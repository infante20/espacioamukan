import React, { useState } from 'react';

const LeadCaptureForm = ({ testName }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      // Future integration with Supabase, Mailchimp or Formspree
      console.log(`Lead saved for ${testName}: ${email}`);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="fade-in">
        <h4 className="text-accent mb-2" style={{ fontSize: '1.2rem' }}>¡Gracias por confiar en nosotros!</h4>
        <p className="text-main" style={{ fontSize: '0.95rem' }}>Pronto recibirás nuestras guías y sugerencias en tu correo.</p>
      </div>
    );
  }

  return (
    <div>
      <h4 className="text-accent mb-2" style={{ fontSize: '1.2rem' }}>Profundiza en tus resultados</h4>
      <p className="text-main mb-3" style={{ fontSize: '0.95rem' }}>
        Déjanos tu correo y te enviaremos sugerencias prácticas y un manual completo para acompañarte.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <input 
          type="email" 
          placeholder="tu@correo.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            maxWidth: '300px',
            padding: '0.8rem 1rem',
            borderRadius: '10px',
            border: '1px solid var(--color-bg-darker)',
            fontFamily: 'var(--font-body)',
            outline: 'none'
          }}
        />
        <button type="submit" className="btn-primary" style={{ width: '100%', maxWidth: '300px', padding: '0.6rem 1.2rem' }}>
          Enviar guía gratuita
        </button>
      </form>
      <p style={{ fontSize: '0.75rem', marginTop: '1rem', color: '#888' }}>
        Prometemos no llenar tu bandeja de spam. Respetamos tu privacidad.
      </p>
    </div>
  );
};

export default LeadCaptureForm;
