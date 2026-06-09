import React, { useState } from 'react';
import logo from '../logo.png';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-sticky">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="logo-wrap">
          <img src={logo} alt="AVSR Rice Traders Logo" className="logo-img" />
          <span>AVSR RICE TRADERS</span>
        </a>

        {/* Desktop Menu links */}
        <ul className="nav-links">
          <li><a href="#" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About Us</a></li>
          <li><a href="#varieties" className="nav-link">Rice Varieties</a></li>
          <li><a href="#calculator" className="nav-link">Bulk Calculator</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        {/* Action button CTA */}
        <a href="#calculator" className="btn btn-primary nav-cta">
          Request Bulk Quote
        </a>

        {/* Mobile menu Toggle */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile nav Drawer */}
      <div className={`mobile-nav-menu ${isOpen ? 'active' : ''}`}>
        <a href="#" className="nav-link" onClick={toggleMenu}>Home</a>
        <a href="#about" className="nav-link" onClick={toggleMenu}>About Us</a>
        <a href="#varieties" className="nav-link" onClick={toggleMenu}>Rice Varieties</a>
        <a href="#calculator" className="nav-link" onClick={toggleMenu}>Bulk Calculator</a>
        <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
        <a href="#calculator" className="btn btn-primary w-full mt-2" onClick={toggleMenu}>
          Request Bulk Quote
        </a>
      </div>
    </nav>
  );
}
