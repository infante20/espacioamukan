import React from 'react';
import './index.css';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SpaceAndBox from './components/SpaceAndBox';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MicrotoolsContainer from './components/MicrotoolsContainer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <About />
      <Services />
      <MicrotoolsContainer />
      <SpaceAndBox />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
