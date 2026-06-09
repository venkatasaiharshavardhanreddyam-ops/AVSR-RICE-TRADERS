import React from 'react';

export default function MapSection() {
  const addressQuery = "4/53-A,%20KOTANGURUVAYAPALLI,%20KHAJIPET,%20YSR%20KADAPA";
  const embedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=4/53-A,+KOTANGURUVAYAPALLI,+KHAJIPET,+YSR+KADAPA`;

  return (
    <section className="section map-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">DIRECTION GUIDANCE</span>
          <h2 className="section-title">Our Operational Location</h2>
        </div>

        <div className="map-card-wrapper">
          <div className="map-info-overlay">
            <h4 className="map-info-title">AVSR Rice Traders</h4>
            <p className="map-info-text">
              4/53-A, Kotanguruvayapalli,<br />
              Khajipet, YSR Kadapa,<br />
              Andhra Pradesh, India.
            </p>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary map-directions-btn"
            >
              <svg className="directions-icon" viewBox="0 0 24 24">
                <path d="M22.43 10.43L13.57 1.57c-.78-.78-2.05-.78-2.83 0l-8.86 8.86c-.78.78-.78 2.05 0 2.83l8.86 8.86c.78.78 2.05.78 2.83 0l8.86-8.86c.78-.78.78-2.05 0-2.83zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
              </svg>
              Navigate / Get Directions
            </a>
          </div>

          <div className="map-iframe-container">
            <iframe
              title="AVSR Rice Traders Location Map"
              src={embedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
