import React, { useState } from 'react';

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
          <svg className="logo-icon" viewBox="0 0 24 24">
            {/* Custom SVG Rice Husk/Grain Ear icon representing harvest */}
            <path d="M12 2C11.5 4 10 7 10 10c0 3 1.5 6 2 8 .5-2 2-5 2-8 0-3-1.5-6-2-8zm-3 4C8.5 7.5 7 10 7 12c0 2.5 1.5 5 2 6.5.3-1.5 1.3-4 1.3-6.5S9.3 7.5 9 6zm6 0c-.3 1.5-1.3 4-1.3 6.5s1 5 1.3 6.5c.5-1.5 2-4 2-6.5 0-2-1.5-4.5-2-6.5z" />
          </svg>
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
