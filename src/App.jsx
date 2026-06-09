import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Calculator from './components/Calculator';
import About from './components/About';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import './App.css';



export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Calculator />
      <About />
      <MapSection />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
