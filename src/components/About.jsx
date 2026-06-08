import React from 'react';

export default function About() {
  const stats = [
    { num: "10K+ Tons", lbl: "Monthly Capacity" },
    { num: "500+", lbl: "B2B Partners" },
    { num: "0% Impurity", lbl: "Sortex Guarantee" },
    { num: "40+", lbl: "Global Destinations" }
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        
        {/* Left Side: Copywriting */}
        <div className="about-content-pane">
          <span className="section-subtitle">Milling Infrastructure</span>
          <h2 className="about-heading">Industrial-Scale Rice Milling & Supply Chains</h2>
          <p className="about-paragraph">
            Operating from the heart of fertile agricultural belts, Imperial Grains maintains an integrated supply chain that links directly to cooperative farms and state-owned storage silos. Our milling facilities run continuously, housing multiple lines of Buhler color sorters and grain cleaners.
          </p>
          <p className="about-paragraph">
            We operate fully certified HACCP and ISO 22000 facilities. Every batch undergoes rigorous quality inspections, checking grain moisture levels, kernel elongation index, and milling broken percentages, ensuring that our products meet high B2B buyer specifications without delay.
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
