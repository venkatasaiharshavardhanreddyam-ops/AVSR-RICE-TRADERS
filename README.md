# AVSR Rice Traders - Local Rice Bags Store Website

A responsive, premium promotional website built for AVSR Rice Traders, a local rice bags shop in Kotanguruvayapalli, Khajipet, Kadapa. It helps local households, catering services, events, and retail customers explore premium rice varieties, calculate order weights and pricing, and place orders directly via WhatsApp.

Built using **React (Functional components with Hooks)**, **semantic HTML5**, and **highly styled Vanilla CSS3** configured with responsive Flexbox/Grid structures and fluid typography.

## 📁 File Structure

```
rice-bags-store-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation header (mobile-toggle drawer, logo, WhatsApp CTA button)
│   │   ├── Hero.jsx        # Value presentation, dark-navy overlay with harvest imagery
│   │   ├── Features.jsx    # 4-column value proposition grid with custom SVG graphics
│   │   ├── Products.jsx    # State-filtered categories (Aged Basmati, Andhra Sona Masoori, Boiled & Broken)
│   │   ├── Calculator.jsx  # Interactive bag calculator for order weight, pricing, and WhatsApp orders
│   │   ├── About.jsx       # Local store description and stats block
│   │   └── Footer.jsx      # Contact info, WhatsApp messaging widget, price updates newsletter
│   ├── App.jsx             # Aggregator layouts
│   ├── App.css             # Root CSS variables, grids, and flex parameters
│   ├── main.jsx            # Mount hook
│   └── index.css           # Global browser resets
├── index.html              # HTML shell loading Playfair Display & Poppins fonts
├── package.json            # React + Vite dependencies
└── vite.config.js          # Port configuration
```

## 🚀 Setup & Launch

1. Navigate to the project folder:
   ```bash
   cd wholesale-rice-website
   ```
2. Install npm packages:
   ```bash
   npm install
   ```
3. Launch the development compiler:
   ```bash
   npm run dev
   ```
   The website will compile and open at `http://localhost:3000`.

4. Build for production compilation:
   ```bash
   npm run build
   ```
