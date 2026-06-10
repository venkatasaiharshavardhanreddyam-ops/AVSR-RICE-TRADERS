import React from 'react';

export default function Hero() {
  const handleDownloadCatalog = (e) => {
    e.preventDefault();
    alert("AVSR Rice Traders Product Catalog & Price List inquiry initiated. Contact us via WhatsApp for instant pricing.");
  };

  return (
    <header className="hero-sec">
      {/* Background illustration overlay */}
      <div className="hero-bg-overlay"></div>

      <div className="container hero-content">
        <span className="hero-tagline">Premium Local Rice Bags Store in KHAJIPET

        </span>
        <h1 className="hero-title">Premium Quality Rice Bags.<br />For Home, Catering & Events.</h1>
        <p className="hero-subtitle">
          Direct local sourcing from top mills. We stock premium Sortex-cleaned, moisture-controlled rice bags. Ideal for household kitchens, local restaurants, functions, and retail customers across Khajipet and YSR Kadapa district.
        </p>
        <div className="hero-actions">
          <a href="#varieties" className="btn btn-primary">
            View Varieties
          </a>
          <a href="#calculator" className="btn btn-outline">
            Order Calculator
          </a>
        </div>
      </div>
    </header>
  );
}
