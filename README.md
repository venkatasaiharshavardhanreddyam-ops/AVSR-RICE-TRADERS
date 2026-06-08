# Imperial Grains B2B Wholesale Rice Supply Website

A responsive, premium promotional B2B website built for bulk buyers (supermarkets, export houses, catering chains, and agricultural traders).

Built using **React (Functional components with Hooks)**, **semantic HTML5**, and **highly styled Vanilla CSS3** configured with responsive Flexbox/Grid structures and fluid typography.

## 📁 File Structure

```
wholesale-rice-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation header (mobile-toggle drawer, logo, B2B CTA button)
│   │   ├── Hero.jsx        # Value presentation, dark-navy overlay with harvest imagery
│   │   ├── Features.jsx    # 4-column value proposition grid with custom SVG graphics
│   │   ├── Products.jsx    # State-filtered commercial categories (Aged Basmati, Sona Masoori, Parboiled)
│   │   ├── Calculator.jsx  # Interactive weight calculator classifying shipping/freight tiers
│   │   ├── About.jsx       # Milling capacity description and stats block
│   │   └── Footer.jsx      # Contact info, WhatsApp export desk, newsletter sign-up
│   ├── App.jsx             # Aggregator layouts
│   ├── App.css             # Root CSS variables, variables, grids, and flex parameters
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
