import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '../FloatingWhatsApp';

const Layout = () => {
  return (
    <div data-theme="amukan" className="min-h-screen bg-base-100 font-sans flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
