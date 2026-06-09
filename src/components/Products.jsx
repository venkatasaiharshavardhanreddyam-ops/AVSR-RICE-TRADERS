import React, { useState } from 'react';

export default function Products() {
  const [activeTab, setActiveTab] = useState('basmati');

  const categories = [
    { id: 'basmati', label: 'Basmati & Long Grain' },
    { id: 'non-basmati', label: 'Non-Basmati Grains' },
    { id: 'parboiled-broken', label: 'Parboiled & Broken' }
  ];

  const productsList = {
    'basmati': [
      {
        title: "Traditional Aged Basmati",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
        tag: "Aged 2 Years",
        length: "8.40 mm Average",
        moisture: "12.0% Maximum",
        packing: "10kg, 20kg, 50kg Bags",
        origin: "Himalayan Foothills"
      },
      {
        title: "1121 Golden Sella Basmati",
        image: "https://grainvilleindia.com/wp-content/uploads/2023/07/pusa-golden-sella-basmati-rice.png",
        tag: "Parboiled Sella",
        length: "8.35 mm+ Average",
        moisture: "11.5% Maximum",
        packing: "25kg, 50kg Bags",
        origin: "Indo-Gangetic Plain"
      },
      {
        title: "Super Kernel Fragrant Basmati",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMKyzpl-tb2SP9AYK8QsZ2uEe3sG4357WSQ&s",
        tag: "Premium Fragrant",
        length: "7.40 mm Average",
        moisture: "12.5% Maximum",
        packing: "10kg, 25kg, 50kg Bags",
        origin: "Punjab Region"
      }
    ],
    'non-basmati': [
      {
        title: "Premium Sona Masoori",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
        tag: "Southern Classic",
        length: "5.20 mm Average",
        moisture: "13.0% Maximum",
        packing: "25kg, 50kg Bags",
        origin: "Deccan Plateau"
      },
      {
        title: "Traditional Ponni Raw Rice",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
        tag: "Traditional Raw",
        length: "5.00 mm Average",
        moisture: "13.0% Maximum",
        packing: "20kg, 50kg Bags",
        origin: "Kaveri River Basin"
      },
      {
        title: "Long-Grain White Rice",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
        tag: "Utility / Catering",
        length: "6.20 mm Average",
        moisture: "14.0% Maximum",
        packing: "25kg, 50kg Bags",
        origin: "Central Plains"
      },
      {
        title: "Thai Jasmine Rice",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
        tag: "Aromatic Import",
        length: "6.80 mm Average",
        moisture: "13.5% Maximum",
        packing: "10kg, 25kg Bags",
        origin: "Thailand Valleys"
      }
    ],
    'parboiled-broken': [
      {
        title: "Premium Parboiled Sella",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
        tag: "High Yielding",
        length: "6.00 mm Average",
        moisture: "13.5% Maximum",
        packing: "25kg, 50kg Bags",
        origin: "Coastal Delta"
      },
      {
        title: "Short Grain Idli Specialty",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
        tag: "Fermentation Grade",
        length: "4.80 mm Average",
        moisture: "13.2% Maximum",
        packing: "25kg, 50kg Bags",
        origin: "Southern Delta"
      },
      {
        title: "100% Broken White Rice",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
        tag: "Industrial / Flour Mills",
        length: "Broken Grits",
        moisture: "14.5% Maximum",
        packing: "50kg, Jumbo Bulk Bags",
        origin: "Milling Byproducts"
      }
    ]
  };

  const handleRequestPrice = (productName) => {
    // Scroll smoothly to calculator section and populate variety if needed
    const calcSec = document.getElementById('calculator');
    if (calcSec) {
      calcSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="varieties" className="section section-alt">
      <div className="container">

        <div className="section-title-wrap">
          <span className="section-subtitle">Our Grain Portfolio</span>
          <h2 className="section-title">Commercial Rice Varieties for Bulk Buyers</h2>
        </div>

        {/* Tab Selection buttons */}
        <div className="tabs-container">
          {categories.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {productsList[activeTab].map((product, idx) => (
            <div key={idx} className="product-card">
              <div className="product-img-wrap">
                <img src={product.image} alt={product.title} className="product-img" />
                <span className="product-tag">{product.tag}</span>
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-title">{product.title}</h3>
                  <div className="product-specs">
                    <div className="spec-row">
                      <span className="spec-label">Avg Grain Length:</span>
                      <span className="spec-value">{product.length}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Moisture Content:</span>
                      <span className="spec-value">{product.moisture}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Packing Standard:</span>
                      <span className="spec-value">{product.packing}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Origin Region:</span>
                      <span className="spec-value">{product.origin}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRequestPrice(product.title)}
                  className="btn btn-secondary btn-card-cta"
                >
                  Request Container / Truckload Price
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
