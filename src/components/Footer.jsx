import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer id="contact" className="footer-sec">
      <div className="container">

        <div className="footer-grid">

          {/* Column 1: Corporate Bio */}
          <div className="footer-col">
            <div className="logo-wrap footer-logo">
              <svg className="logo-icon" viewBox="0 0 24 24">
                <path d="M12 2C11.5 4 10 7 10 10c0 3 1.5 6 2 8 .5-2 2-5 2-8 0-3-1.5-6-2-8zm-3 4C8.5 7.5 7 10 7 12c0 2.5 1.5 5 2 6.5.3-1.5 1.3-4 1.3-6.5S9.3 7.5 9 6zm6 0c-.3 1.5-1.3 4-1.3 6.5s1 5 1.3 6.5c.5-1.5 2-4 2-6.5 0-2-1.5-4.5-2-6.5z" />
              </svg>
              <span>AVSR RICE TRADERS</span>
            </div>
            <p className="footer-text">
              Your trusted local rice store in Kotanguruvayapalli, Khajipet. Supplying premium quality rice bags to households, caterers, and events since 2015.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#varieties">Rice Varieties</a></li>
              <li><a href="#calculator">Order Calculator</a></li>
              <li><a href="#contact">Store Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Varieties Links */}
          <div className="footer-col">
            <h4 className="footer-title">Our Grains</h4>
            <ul className="footer-links">
              <li><a href="#varieties">Traditional Aged Basmati</a></li>
              <li><a href="#varieties">1121 Golden Sella Basmati</a></li>
              <li><a href="#varieties">Nellore Sona Masoori</a></li>
              <li><a href="#varieties">Jilakara</a></li>
              <li><a href="#varieties">Chittimuthyalu</a></li>
              <li><a href="#varieties">Broken Rice / Nukalu</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info & Newsletter */}
          <div className="footer-col">
            <h4 className="footer-title">Store Desk</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="footer-contact-text">
                  <strong>Location:</strong> 4/53-A, KOTANGURUVAYAPALLI, KHAJIPET, YSR KADAPA.
                </span>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="footer-contact-text">
                  <strong>Store Email:</strong> avsrricetraders@gmail.com
                </span>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="footer-contact-text">
                  <strong>Store Phone / WhatsApp:</strong>{' '}
                  <a
                    href="https://wa.me/919949632072?text=Hello%20AVSR%20Rice%20Traders%2C%20I%20want%20to%20inquire%20about%20rice%20bags."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'underline' }}
                  >
                    +91 9949632072 (WhatsApp Inquiry)
                  </a>
                </span>
              </li>
            </ul>

            {/* Newsletter input */}
            <div className="mt-4">
              <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Get Store Price Updates
              </span>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <div className="newsletter-input-group">
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="newsletter-input"
                    />
                    <button type="submit" className="newsletter-btn">
                      Subscribe
                    </button>
                  </div>
                </form>
              ) : (
                <p className="newsletter-success">
                  ✓ Successfully subscribed to store price updates.
                </p>
              )}
            </div>

          </div>

        </div>

        {/* Bottom copyright strip */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AVSR Rice Traders. All Rights Reserved. Premium Rice Bag Supplier, Khajipet, Andhra Pradesh.</p>
        </div>

      </div>
    </footer>
  );
}
