import React from 'react';

export default function About() {
  const stats = [
    { num: "5,000+", lbl: "Happy Families" },
    { num: "100%", lbl: "Pure Quality Rice" },
    { num: "Fast Delivery", lbl: "Across Kadapa" },
    { num: "10+", lbl: "Premium Varieties" }
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        
        {/* Left Side: Copywriting */}
        <div className="about-content-pane">
          <span className="section-subtitle">Local Rice Store</span>
          <h2 className="about-heading">Serving Khajipet & YSR Kadapa District</h2>
          <p className="about-paragraph">
            Located in Kotanguruvayapalli, Khajipet, AVSR Rice Traders is your trusted local destination for the finest quality rice bags. We source our rice directly from premium mills, ensuring that only the cleanest, pest-free, and best-tasting grains reach your kitchen.
          </p>
          <p className="about-paragraph">
            Whether you need standard Sona Masoori for daily meals, premium Basmati for special occasions, or boiled rice for catering, we stock them in various bag sizes (10kg, 20kg, 25kg, and 50kg) to suit your needs. We pride ourselves on transparent pricing, top quality, and friendly customer service.
          </p>
        </div>

        {/* Right Side: Grid Stats */}
        <div className="about-stats-pane">
          {stats.map((stat, idx) => (
            <div key={idx} className="about-stat-card">
              <span className="about-stat-num">{stat.num}</span>
              <span className="about-stat-lbl">{stat.lbl}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
