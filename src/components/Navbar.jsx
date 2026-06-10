import React, { useState } from 'react';
import logo from '../logo.png';

export default function Navbar({ cartCount, onCartClick }) {
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
          <li><a href="#calculator" className="nav-link">Order Calculator</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        {/* Action button CTA & Cart icon */}
        <div className="nav-actions">
          <button className="cart-nav-btn" onClick={onCartClick} aria-label="Open Cart">
            <svg className="cart-nav-icon" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            {cartCount > 0 && (
              <span className="cart-nav-badge">{cartCount}</span>
            )}
          </button>

          <a href="#calculator" className="btn btn-primary nav-cta">
            Order Bags
          </a>
        </div>

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
        <a href="#calculator" className="nav-link" onClick={toggleMenu}>Order Calculator</a>
        <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
        
        {/* Mobile Cart Button */}
        <button 
          className="btn btn-outline w-full mt-2 flex justify-center gap-2 items-center" 
          onClick={() => { toggleMenu(); onCartClick(); }}
        >
          <svg className="cart-nav-icon" style={{fill: 'currentColor', width: '18px', height: '18px'}} viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          <span>View Cart ({cartCount})</span>
        </button>

        <a href="#calculator" className="btn btn-primary w-full mt-2" onClick={toggleMenu}>
          Order Bags
        </a>
      </div>
    </nav>
  );
}
