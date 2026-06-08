import React, { useState } from 'react';

export default function Calculator() {
  const [variety, setVariety] = useState('basmati-aged');
  const [quantity, setQuantity] = useState('10');
  const [unit, setUnit] = useState('mt'); // mt (Metric Tons) or bags
  const [bagSize, setBagSize] = useState('50'); // 25kg or 50kg
  const [submitted, setSubmitted] = useState(false);

  // Calculate outputs
  const qtyNum = parseFloat(quantity) || 0;
  let totalMT = 0;
  let totalBags = 0;

  if (unit === 'mt') {
    totalMT = qtyNum;
    totalBags = (totalMT * 1000) / parseFloat(bagSize);
  } else {
    totalBags = qtyNum;
    totalMT = (totalBags * parseFloat(bagSize)) / 1000;
  }

  // Tier categorization logic
  let tierText = "";
  let alertClass = "";

  if (totalMT < 5) {
    tierText = "Minimum wholesale delivery is 5 MT. Smaller orders are Ex-Warehouse pickup only (Ex-Works).";
    alertClass = "alert-warning";
  } else if (totalMT >= 5 && totalMT <= 20) {
    tierText = "Tier 2 Wholesale Pricing Applies (Standard Truckload Delivery - 10-Wheeler / Flatbed).";
    alertClass = "alert-info";
  } else {
    tierText = "Tier 1 Contract Pricing Eligible (Full Container Load / Multi-Axle Truck Delivery - High volume discount).";
    alertClass = "alert-success";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (qtyNum <= 0) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setQuantity('10');
  };

  return (
    <section id="calculator" className="section">
      <div className="container">
        
        <div className="section-title-wrap">
          <span className="section-subtitle">FOB & Logistics Calculator</span>
          <h2 className="section-title">Calculate Your Wholesale Shipping Tier</h2>
        </div>

        <div className="calc-container">
          
          {/* Left Panel: Information & Tiers explanation */}
          <div className="calc-info-pane">
            <h3 className="calc-info-title">Wholesale Order Thresholds</h3>
            <p className="calc-info-text">
              We process B2B purchase agreements starting from 5 Metric Tons. Logistics coordination depends on volume thresholds. Use the calculator to estimate requirements for cargo shipping.
            </p>

            <ul className="calc-features-list">
              <li className="calc-feat-item">
                <svg className="calc-feat-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span><strong>Ex-Warehouse (Under 5 MT):</strong> Buyer handles packaging transport from mill gate.</span>
              </li>
              <li className="calc-feat-item">
                <svg className="calc-feat-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span><strong>Wholesale Tier 2 (5–20 MT):</strong> Standard domestic truck dispatch or partial container loading.</span>
              </li>
              <li className="calc-feat-item">
                <svg className="calc-feat-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span><strong>Contract Tier 1 (Over 20 MT):</strong> Direct container loading (FCL / 20ft Cargo) with mill discount.</span>
              </li>
            </ul>
          </div>

          {/* Right Panel: Interactive Form */}
          <div className="calc-form-pane">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="calc-form-wrap">
                
                <div className="form-group">
                  <label className="form-label">Select Rice Variety</label>
                  <select 
                    value={variety} 
                    onChange={(e) => setVariety(e.target.value)}
                    className="form-select"
                  >
                    <option value="basmati-aged">Aged Traditional Basmati</option>
                    <option value="basmati-1121">1121 Sella Basmati</option>
                    <option value="sona-masoori">Premium Sona Masoori</option>
                    <option value="ponni">Ponni Raw Rice</option>
                    <option value="parboiled">Premium Parboiled Rice</option>
                    <option value="broken">100% Broken White Rice</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Quantity</label>
                    <input 
                      type="number" 
                      min="1" 
                      required
                      value={quantity} 
                      onChange={(e) => setQuantity(e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Unit</label>
                    <select 
                      value={unit} 
                      onChange={(e) => setUnit(e.target.value)}
                      className="form-select"
                    >
                      <option value="mt">Metric Tons (MT)</option>
                      <option value="bags">Bags</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Packaging Bag Size</label>
                  <select 
                    value={bagSize} 
                    onChange={(e) => setBagSize(e.target.value)}
                    className="form-select"
                  >
                    <option value="25">25 kg bags</option>
                    <option value="50">50 kg bags</option>
                  </select>
                </div>

                {/* Live calculated outputs */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2 mt-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Total Calculated Weight:</span>
                    <span className="font-bold text-slate-800">{totalMT.toFixed(2)} MT</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Equivalent Bags Count:</span>
                    <span className="font-bold text-slate-800">{Math.ceil(totalBags).toLocaleString()} Bags</span>
                  </div>
                </div>

                {/* Dynamic warning / advice tier */}
                {qtyNum > 0 && (
                  <div className={`calc-alert ${alertClass}`}>
                    {tierText}
                  </div>
                )}

                <button type="submit" className="btn btn-primary w-full mt-2">
                  Generate Quotation Enquiry
                </button>

              </form>
            ) : (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 text-2xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Enquiry Successfully Logged</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    We have compiled your logistics estimates ({totalMT.toFixed(1)} MT / {Math.ceil(totalBags).toLocaleString()} bags of {variety.replace("-", " ")}). A wholesale representative will contact you with specific container/freight pricing rates.
                  </p>
                </div>
                <button onClick={handleReset} className="btn btn-outline w-full">
                  Create Another Estimate
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
