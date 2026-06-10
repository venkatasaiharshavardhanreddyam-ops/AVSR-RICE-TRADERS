import React, { useState } from 'react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemove,
  onClear
}) {
  const [delivery, setDelivery] = useState('local'); // pickup, local, district

  if (!isOpen) return null;

  // Totals calculations
  const totalBags = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalWeight = cart.reduce((sum, item) => sum + (item.bagSize * item.quantity), 0);
  const riceCost = cart.reduce((sum, item) => sum + (item.pricePerKg * item.bagSize * item.quantity), 0);

  let deliveryCost = 0;
  let tierText = "";
  let alertClass = "";

  if (delivery === 'pickup') {
    deliveryCost = 0;
    tierText = "Self-Pickup Selected. Please visit our shop at 4/53-A, Kotanguruvayapalli, Khajipet for collection.";
    alertClass = "alert-info";
  } else if (delivery === 'local') {
    if (totalBags >= 3) {
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
    deliveryCost = 150 + (totalBags * 20);
    tierText = `Kadapa District Delivery: ₹${deliveryCost} (Flat ₹150 + ₹20/bag dispatch cost).`;
    alertClass = "alert-info";
  }

  const totalCost = riceCost + deliveryCost;

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const deliveryLabel = {
      pickup: 'Store Pickup (Khajipet)',
      local: 'Khajipet Local Delivery',
      district: 'Kadapa District Delivery'
    }[delivery];

    // Format WhatsApp inquiry text
    let itemsText = '';
    cart.forEach((item, index) => {
      const itemWeight = item.bagSize * item.quantity;
      const itemCost = item.pricePerKg * item.bagSize * item.quantity;
      itemsText += `${index + 1}. ${item.title} (${item.bagSize} kg bag)\n   Qty: ${item.quantity} bags | Weight: ${itemWeight} kg | Cost: ₹${itemCost.toLocaleString()}\n`;
    });

    const message = `Hello AVSR Rice Traders,\n\nI want to place an order for the following rice bags:\n\n${itemsText}\nOrder Summary:\n- Total Bags: ${totalBags} bags\n- Total Weight: ${totalWeight} kg\n- Delivery Mode: ${deliveryLabel}\n- Estimated Cost: ₹${totalCost.toLocaleString()} (Rice: ₹${riceCost.toLocaleString()} + Delivery: ₹${deliveryCost})\n\nPlease confirm availability and delivery time.`;

    const whatsappUrl = `https://wa.me/919949632072?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="cart-header">
          <div className="cart-header-title">
            <h3 className="cart-title">Your Order Cart</h3>
            {cart.length > 0 && (
              <span className="cart-count-pill">{totalBags} {totalBags === 1 ? 'Bag' : 'Bags'}</span>
            )}
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {/* Drawer Content */}
        <div className="cart-content-wrapper">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <svg className="cart-empty-icon" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              <h4 className="empty-title">Your Cart is Empty</h4>
              <p className="empty-subtitle">Browse our premium varieties and add bag orders to your cart.</p>
              <button className="btn btn-primary mt-4" onClick={onClose}>
                Continue Browsing
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="cart-items-list">
                {cart.map((item, idx) => {
                  const itemCost = item.pricePerKg * item.bagSize * item.quantity;
                  return (
                    <div key={`${item.id}-${item.bagSize}`} className="cart-item-card">
                      <div className="cart-item-img-wrap">
                        <img src={item.image} alt={item.title} className="cart-item-img" />
                      </div>
                      <div className="cart-item-details">
                        <h4 className="cart-item-title">{item.title}</h4>
                        <div className="cart-item-meta">
                          <span>Size: <strong>{item.bagSize} kg Bag</strong></span>
                          <span>Price: <strong>₹{(item.pricePerKg * item.bagSize).toLocaleString()} / bag</strong></span>
                        </div>
                        <div className="cart-item-actions">
                          <div className="qty-picker">
                            <button
                              onClick={() => onUpdateQty(item.id, item.bagSize, item.quantity - 1)}
                              className="qty-btn"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              className="qty-input-field"
                              value={item.quantity}
                              onChange={(e) => {
                                const val = parseInt(e.target.value, 10);
                                if (!isNaN(val) && val > 0) {
                                  onUpdateQty(item.id, item.bagSize, val);
                                }
                              }}
                            />
                            <button
                              onClick={() => onUpdateQty(item.id, item.bagSize, item.quantity + 1)}
                              className="qty-btn"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => onRemove(item.id, item.bagSize)}
                            className="cart-remove-btn"
                            title="Remove item"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-price-col">
                        <span className="cart-item-cost">₹{itemCost.toLocaleString()}</span>
                        <span className="cart-item-weight">{item.bagSize * item.quantity} kg</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cart Footer / Actions */}
              <div className="cart-footer">
                <div className="cart-clear-bar">
                  <button onClick={onClear} className="cart-clear-all-btn">
                    Clear All Items
                  </button>
                </div>

                <div className="cart-footer-grid">
                  {/* Left Column: Delivery Mode & Info */}
                  <div className="cart-footer-left">
                    <div className="form-group mb-2">
                      <label className="form-label text-xs">Delivery Mode</label>
                      <select
                        value={delivery}
                        onChange={(e) => setDelivery(e.target.value)}
                        className="form-select text-xs py-2"
                      >
                        <option value="pickup">Self-Pickup at Shop (Free)</option>
                        <option value="local">Khajipet Local Delivery (Free for 3+ bags)</option>
                        <option value="district">Kadapa District Doorstep Delivery</option>
                      </select>
                    </div>

                    {/* Delivery message */}
                    <div className={`calc-alert ${alertClass} text-xs py-2 px-3 rounded`}>
                      {tierText}
                    </div>
                  </div>

                  {/* Right Column: Pricing Summary */}
                  <div className="cart-footer-right">
                    <div className="cart-pricing-summary">
                      <div className="summary-row">
                        <span>Bags / Weight:</span>
                        <strong>{totalBags} bags ({totalWeight} kg)</strong>
                      </div>
                      <div className="summary-row">
                        <span>Rice Subtotal:</span>
                        <strong>₹{riceCost.toLocaleString()}</strong>
                      </div>
                      <div className="summary-row">
                        <span>Delivery:</span>
                        <strong>{deliveryCost === 0 ? 'FREE' : `₹${deliveryCost}`}</strong>
                      </div>
                      <div className="summary-row total-row">
                        <span>Est. Total:</span>
                        <strong className="final-total">₹{totalCost.toLocaleString()}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <button onClick={handleCheckout} className="btn btn-primary w-full mt-3">
                  Send Cart Enquiry to WhatsApp
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
