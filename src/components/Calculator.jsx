import React, { useState } from 'react';

const RICE_VARIETIES = {
  'basmati-aged': { name: 'Traditional Aged Basmati', pricePerKg: 100 },
  'basmati-1121': { name: '1121 Golden Sella Basmati', pricePerKg: 110 },
  'super-kernel': { name: 'Super Kernel Fragrant Basmati', pricePerKg: 95 },
  'sona-masoori': { name: 'Sona Masoori', pricePerKg: 50 },
  'nellore-sona': { name: 'Nellore Sona Masoori', pricePerKg: 55 },
  'ndlr7': { name: 'NDLR7', pricePerKg: 45 },
  'jilakara': { name: 'Jilakara', pricePerKg: 75 },
  'boiled-rice': { name: 'Boiled Rice', pricePerKg: 40 },
  'chittimuthyalu': { name: 'Chittimuthyalu', pricePerKg: 80 },
  'broken-nukalu': { name: 'Broken Rice / Nukalu', pricePerKg: 30 }
};

export default function Calculator() {
  const [variety, setVariety] = useState('basmati-aged');
  const [bagSize, setBagSize] = useState('25'); // 10, 20, 25, 50 kg
  const [quantity, setQuantity] = useState('5');
  const [delivery, setDelivery] = useState('local'); // pickup, local, district
  const [submitted, setSubmitted] = useState(false);

  // Calculations
  const qtyNum = parseInt(quantity, 10) || 0;
  const sizeNum = parseInt(bagSize, 10) || 0;
  const totalWeight = qtyNum * sizeNum;

  const selectedVariety = RICE_VARIETIES[variety] || RICE_VARIETIES['basmati-aged'];
  const pricePerBag = selectedVariety.pricePerKg * sizeNum;
  const riceCost = pricePerBag * qtyNum;

  let deliveryCost = 0;
  let tierText = "";
  let alertClass = "";

  if (delivery === 'pickup') {
    deliveryCost = 0;
    tierText = "Self-Pickup Selected. Please visit our shop at 4/53-A, Kotanguruvayapalli, Khajipet for collection.";
    alertClass = "alert-info";
  } else if (delivery === 'local') {
    if (qtyNum >= 3) {
      deliveryCost = 0;
      tierText = "Eligible for FREE home delivery within Khajipet!";
      alertClass = "alert-success";
    } else {
      deliveryCost = 50;
      tierText = "Standard Khajipet Delivery: ₹50. Tip: Add more bags to get FREE delivery!";
      alertClass = "alert-warning";
    }
  } else {
    // district delivery
    deliveryCost = 150 + (qtyNum * 20);
    tierText = `Kadapa District Delivery: ₹${deliveryCost} (Flat ₹150 + ₹20/bag dispatch cost).`;
    alertClass = "alert-info";
  }

  const totalCost = riceCost + deliveryCost;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (qtyNum <= 0) return;

    // Build pre-filled WhatsApp message
    const deliveryLabel = {
      pickup: 'Store Pickup (Khajipet)',
      local: 'Khajipet Local Delivery',
      district: 'Kadapa District Delivery'
    }[delivery];

    const message = `Hello AVSR Rice Traders,\n\nI want to order rice bags:\n- Variety: ${selectedVariety.name}\n- Bag Size: ${sizeNum} kg\n- Quantity: ${qtyNum} bags\n- Total Weight: ${totalWeight} kg\n- Delivery: ${deliveryLabel}\n- Est. Cost: ₹${totalCost.toLocaleString()} (Rice: ₹${riceCost.toLocaleString()} + Delivery: ₹${deliveryCost})\n\nPlease confirm availability and delivery time.`;
    
    const whatsappUrl = `https://wa.me/919949632072?text=${encodeURIComponent(message)}`;
    
    // Redirect
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setQuantity('5');
  };

  return (
    <section id="calculator" className="section">
      <div className="container">

        <div className="section-title-wrap">
          <span className="section-subtitle">Bag Estimator & Order Tool</span>
          <h2 className="section-title">Calculate Your Rice Bag Order</h2>
        </div>

        <div className="calc-container">

          {/* Left Panel: Information */}
          <div className="calc-info-pane">
            <h3 className="calc-info-title">Store Pickup & Delivery</h3>
            <p className="calc-info-text">
              We supply high-quality rice bags directly to households, catering groups, weddings, and local shops in Khajipet and YSR Kadapa district. Use this calculator to plan your purchase.
            </p>

            <ul className="calc-features-list">
              <li className="calc-feat-item">
                <svg className="calc-feat-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span><strong>Store Pickup:</strong> Free pickup at Kotanguruvayapalli, Khajipet.</span>
              </li>
              <li className="calc-feat-item">
                <svg className="calc-feat-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span><strong>Local Delivery:</strong> Free local delivery inside Khajipet on orders of 3+ bags.</span>
              </li>
              <li className="calc-feat-item">
                <svg className="calc-feat-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span><strong>District Delivery:</strong> Pocket-friendly transport charges for villages across Kadapa.</span>
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
                    <option value="basmati-aged">Traditional Aged Basmati (₹100/kg)</option>
                    <option value="basmati-1121">1121 Golden Sella Basmati (₹110/kg)</option>
                    <option value="super-kernel">Super Kernel Fragrant Basmati (₹95/kg)</option>
                    <option value="sona-masoori">Sona Masoori (₹50/kg)</option>
                    <option value="nellore-sona">Nellore Sona Masoori (₹55/kg)</option>
                    <option value="ndlr7">NDLR7 (₹45/kg)</option>
                    <option value="jilakara">Jilakara (₹75/kg)</option>
                    <option value="boiled-rice">Boiled Rice (₹40/kg)</option>
                    <option value="chittimuthyalu">Chittimuthyalu (₹80/kg)</option>
                    <option value="broken-nukalu">Broken Rice / Nukalu (₹30/kg)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Bag Size</label>
                    <select
                      value={bagSize}
                      onChange={(e) => setBagSize(e.target.value)}
                      className="form-select"
                    >
                      <option value="10">10 kg Bag</option>
                      <option value="20">20 kg Bag</option>
                      <option value="25">25 kg Bag</option>
                      <option value="50">50 kg Bag</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Quantity (Bags)</label>
                    <input
                      type="number"
                      min="1"
                      required
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Delivery Mode</label>
                  <select
                    value={delivery}
                    onChange={(e) => setDelivery(e.target.value)}
                    className="form-select"
                  >
                    <option value="pickup">Self-Pickup at Shop (Free)</option>
                    <option value="local">Khajipet Local Delivery (Free for 3+ bags)</option>
                    <option value="district">Kadapa District Doorstep Delivery</option>
                  </select>
                </div>

                {/* Live calculated outputs */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2 mt-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Total Weight:</span>
                    <span className="font-bold text-slate-800">{totalWeight} kg</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Price per Bag:</span>
                    <span className="font-bold text-slate-800">₹{pricePerBag.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Rice Cost:</span>
                    <span className="font-bold text-slate-800">₹{riceCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Delivery Charge:</span>
                    <span className="font-bold text-slate-800">
                      {deliveryCost === 0 ? 'FREE' : `₹${deliveryCost}`}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-2 text-sm">
                    <span className="font-semibold text-slate-600">Estimated Total:</span>
                    <span className="font-extrabold text-slate-900 text-base">₹{totalCost.toLocaleString()}</span>
                  </div>
                </div>

                {/* Dynamic warning / advice tier */}
                {qtyNum > 0 && (
                  <div className={`calc-alert ${alertClass}`}>
                    {tierText}
                  </div>
                )}

                <button type="submit" className="btn btn-primary w-full mt-2">
                  Send Order Inquiry via WhatsApp
                </button>

              </form>
            ) : (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 text-2xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Inquiry Sent to WhatsApp</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    We have generated your order details: {qtyNum} bags of {selectedVariety.name} ({totalWeight} kg total). Your browser has opened WhatsApp to send this message to us.
                  </p>
                </div>
                <button onClick={handleReset} className="btn btn-outline w-full">
                  Estimate Another Order
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
