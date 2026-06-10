export const PRODUCTS_DATA = {
  'Basmati': [
    {
      id: 'basmati-aged',
      title: "Traditional Aged Basmati",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      tag: "Aged 2 Years",
      length: "8.40 mm Average",
      moisture: "12.0% Maximum",
      packing: "10kg, 20kg, 50kg Bags",
      packingOptions: [10, 20, 50],
      pricePerKg: 100
    },
    {
      id: 'basmati-1121',
      title: "1121 Golden Sella Basmati",
      image: "https://grainvilleindia.com/wp-content/uploads/2023/07/pusa-golden-sella-basmati-rice.png",
      tag: "Parboiled Sella",
      length: "8.35 mm+ Average",
      moisture: "11.5% Maximum",
      packing: "25kg, 50kg Bags",
      packingOptions: [25, 50],
      pricePerKg: 110
    },
    {
      id: 'super-kernel',
      title: "Super Kernel Fragrant Basmati",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMKyzpl-tb2SP9AYK8QsZ2uEe3sG4357WSQ&s",
      tag: "Premium Fragrant",
      length: "7.40 mm Average",
      moisture: "12.5% Maximum",
      packing: "10kg, 25kg, 50kg Bags",
      packingOptions: [10, 25, 50],
      pricePerKg: 95
    }
  ],
  'Andhra Brands': [
    {
      id: 'sona-masoori',
      title: "Sona Masoori",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQWWvty86VvvFjnFpEqDjXtUjscQV8LfHxw&s",
      tag: "Southern Classic",
      length: "5.20 mm Average",
      moisture: "13.0% Maximum",
      packing: "25kg, 50kg Bags",
      packingOptions: [25, 50],
      pricePerKg: 50
    },
    {
      id: 'nellore-sona',
      title: "Nellore Sona Masoori",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLTsfTD-jUDdASlLE4BqqxWTn89RpklJFfw&s",
      tag: "Traditional Raw",
      length: "5.00 mm Average",
      moisture: "13.0% Maximum",
      packing: "20kg, 50kg Bags",
      packingOptions: [20, 50],
      pricePerKg: 55
    },
    {
      id: 'ndlr7',
      title: "NDLR7",
      image: "https://tiimg.tistatic.com/fp/1/007/665/long-grain-white-rice-in-hard-texture-and-high-in-protein-for-human-consumption-784.jpg",
      tag: "Utility / Catering",
      length: "6.20 mm Average",
      moisture: "14.0% Maximum",
      packing: "25kg, 50kg Bags",
      packingOptions: [25, 50],
      pricePerKg: 45
    },
    {
      id: 'jilakara',
      title: "Jilakara",
      image: "https://ametheus.com/wp-content/uploads/2025/08/jeerakashala_rice_tulsidas_close_up-e1756450091910.webp",
      tag: "Aromatic Import",
      length: "6.80 mm Average",
      moisture: "13.5% Maximum",
      packing: "10kg, 25kg Bags",
      packingOptions: [10, 25],
      pricePerKg: 75
    }
  ],
  'Boiled & Broken': [
    {
      id: 'boiled-rice',
      title: "Boiled Rice",
      image: "https://m.media-amazon.com/images/I/41SOexK0b0L._AC_UF894,1000_QL80_.jpg",
      tag: "High Yielding",
      length: "6.00 mm Average",
      moisture: "13.5% Maximum",
      packing: "25kg, 50kg Bags",
      packingOptions: [25, 50],
      pricePerKg: 40
    },
    {
      id: 'chittimuthyalu',
      title: "Chittimuthyalu",
      image: "https://5.imimg.com/data5/SELLER/Default/2025/1/479469759/JQ/KK/YT/180338471/small-grain-basmati-rice.jpg",
      tag: "Fermentation Grade",
      length: "4.80 mm Average",
      moisture: "13.2% Maximum",
      packing: "25kg, 50kg Bags",
      packingOptions: [25, 50],
      pricePerKg: 80
    },
    {
      id: 'broken-nukalu',
      title: "Broken Rice / Nukalu",
      image: "https://cpimg.tistatic.com/05980105/b/4/100-Broken-Rice.jpg",
      tag: "Industrial / Flour Mills",
      length: "Broken Grits",
      moisture: "14.5% Maximum",
      packing: "50kg, Jumbo Bulk Bags",
      packingOptions: [50],
      pricePerKg: 30
    }
  ]
};

// Helper to get all products as a flat list
export const getAllProducts = () => {
  return Object.values(PRODUCTS_DATA).flat();
};

// Helper to find a product by ID
export const findProductById = (id) => {
  return getAllProducts().find(p => p.id === id);
};

// Helper to find a product by Title
export const findProductByTitle = (title) => {
  return getAllProducts().find(p => p.title.toLowerCase() === title.toLowerCase());
};
