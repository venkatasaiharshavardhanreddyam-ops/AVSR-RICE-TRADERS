import React from 'react';

export default function Hero() {
  const handleDownloadCatalog = (e) => {
    e.preventDefault();
    alert("Imperial Grains B2B Product Catalog download initiated. (PDF Format)");
  };

  return (
    <header className="hero-sec">
      {/* Background illustration overlay */}
      <div className="hero-bg-overlay"></div>

      <div className="container hero-content">
        <span className="hero-tagline">Global Grain Exporters & Wholesale Millers</span>
        <h1 className="hero-title">Premium Quality Rice.<br />Unmatched Bulk Supply.</h1>
        <p className="hero-subtitle">
          Direct-from-mill wholesale sourcing. We implement state-of-the-art Sortex optical cleaning, rigorous moisture level stabilization, and clean dry-room storage to guarantee quality for supermarkets, export accounts, and large distribution networks statewide.
        </p>
        <div className="hero-actions">
          <a href="#varieties" className="btn btn-primary">
            View Varieties
          </a>
          <a href="#" className="btn btn-outline" onClick={handleDownloadCatalog}>
            Download Catalog
          </a>
        </div>
      </div>
    </header>
  );
}
