import React from 'react';

export default function Features() {
  const featuresList = [
    {
      title: "100% Sortex Clean",
      text: "Advanced optical color sorters analyze every grain to remove stones, discolored seeds, and field impurities.",
      // Clean target SVG
      svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7 h2v2z"
    },
    {
      title: "Moisture Controlled",
      text: "Rigorous dry-aging stabilization controls humidity, ensuring grains maintain texture and have maximum shelf life.",
      // Water droplet / moisture control SVG
      svgPath: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
    },
    {
      title: "Bag Sizes for All",
      text: "Convenient options for everyone. Available in 10kg, 20kg, 25kg, and 50kg bags, perfect for household kitchens, catering, and local events.",
      // Package box SVG
      svgPath: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 12H9v-2h6v2zm0-4H9V10h6v2z"
    },
    {
      title: "Best Local Prices",
      text: "Direct sourcing. By bringing rice directly from local mills, we offer the best retail prices for premium quality bags.",
      // Price tag / coin SVG
      svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"
    }
  ];

  return (
    <section className="section">
      <div className="container">

        <div className="section-title-wrap">
          <span className="section-subtitle">Our Commitments</span>
          <h2 className="section-title">Premium Quality Rice For Your Home & Events</h2>
        </div>

        <div className="features-grid">
          {featuresList.map((item, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-box">
                <svg className="feature-icon" viewBox="0 0 24 24">
                  <path d={item.svgPath} />
                </svg>
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-text">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
