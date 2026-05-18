import React, { useState } from 'react';

// 1. Crea una cuenta en https://formspree.io
// 2. Crea un nuevo form y copia el ID (ej: "xpwzabcd")
// 3. Reemplaza FORMSPREE_FORM_ID con ese valor
const FORMSPREE_FORM_ID = 'REEMPLAZAR_CON_TU_ID';

const LeadCaptureForm = ({ testName }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;

    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, test: testName }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
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
          style={{ width: '100%', maxWidth: '300px' }}
        />
        <button
          type="submit"
          className="btn-primary"
          style={{ width: '100%', maxWidth: '300px', padding: '0.6rem 1.2rem' }}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar guía gratuita'}
        </button>
        {status === 'error' && (
          <p style={{ fontSize: '0.85rem', color: 'var(--color-accent)', margin: 0 }}>
            Hubo un error al enviar. Intenta de nuevo.
          </p>
        )}
      </form>
      <p style={{ fontSize: '0.75rem', marginTop: '1rem', color: '#888' }}>
        Prometemos no llenar tu bandeja de spam. Respetamos tu privacidad.
      </p>
    </div>
  );
};

export default LeadCaptureForm;
