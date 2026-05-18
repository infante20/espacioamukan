import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/56988186522"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 btn btn-circle btn-lg bg-green-500 hover:bg-green-600 border-0 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all"
  >
    <MessageCircle size={28} />
  </a>
);

export default FloatingWhatsApp;
