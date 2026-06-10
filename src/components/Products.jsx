import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/products';

function ProductCard({ product, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(product.packingOptions[0]);
  const [quantity, setQuantity] = useState(5); // Default to 5 bags for bulk/wholesale representation

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
  };

  return (
    <div className="product-card">
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
          </div>
          
          {/* Card Selectors */}
          <div className="card-selectors">
            <div className="selector-group">
              <label className="selector-label">Bag Size</label>
              <select 
                value={selectedSize}
                onChange={(e) => setSelectedSize(Number(e.target.value))}
                className="card-select"
              >
                {product.packingOptions.map(size => (
                  <option key={size} value={size}>{size} kg Bag</option>
                ))}
              </select>
            </div>
            <div className="selector-group">
              <label className="selector-label">Quantity</label>
              <div className="card-qty-picker">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="card-qty-btn"
                  type="button"
                >
                  -
                </button>
                <input 
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="card-qty-input"
                />
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="card-qty-btn"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="card-price-info">
            <span className="price-label">Price per Bag:</span>
            <span className="price-value">₹{(product.pricePerKg * selectedSize).toLocaleString()}</span>
          </div>
        </div>

        <button
          onClick={handleAdd}
          className="btn btn-primary btn-card-cta mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function Products({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState('Basmati');

  const categories = [
    { id: 'Basmati', label: 'Basmati & Long Grain' },
    { id: 'Andhra Brands', label: 'Andhra Brand Grain' },
    { id: 'Boiled & Broken', label: 'Boiled & Broken Rice' }
  ];

  return (
    <section id="varieties" className="section section-alt">
      <div className="container">

        <div className="section-title-wrap">
          <span className="section-subtitle">Our Grain Portfolio</span>
          <h2 className="section-title">Premium Rice Varieties for Your Home & Catering</h2>
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
          {PRODUCTS_DATA[activeTab].map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
