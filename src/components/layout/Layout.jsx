import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '../FloatingWhatsApp';

const Layout = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-content fade-in">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
