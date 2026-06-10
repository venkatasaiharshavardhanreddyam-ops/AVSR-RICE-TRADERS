import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Calculator from './components/Calculator';
import About from './components/About';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import CartDrawer from './components/CartDrawer';
import './App.css';

export default function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('avsr_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('avsr_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, bagSize, quantity) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.bagSize === bagSize
      );

      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            title: product.title,
            image: product.image,
            pricePerKg: product.pricePerKg,
            bagSize: bagSize,
            quantity: quantity
          }
        ];
      }
    });
    setCartOpen(true); // Open cart drawer on add for immediate feedback
  };

  const updateCartQty = (id, bagSize, quantity) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => !(item.id === id && item.bagSize === bagSize));
      }
      return prevCart.map((item) =>
        item.id === id && item.bagSize === bagSize
          ? { ...item, quantity: quantity }
          : item
      );
    });
  };

  const removeFromCart = (id, bagSize) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.bagSize === bagSize))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalBags = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-wrapper">
      <Navbar cartCount={totalBags} onCartClick={() => setCartOpen(true)} />
      
      <Hero />
      <Features />
      
      <Products onAddToCart={addToCart} />
      <Calculator onAddToCart={addToCart} />
      
      <About />
      <MapSection />
      <Footer />
      <WhatsAppWidget />

      {/* Sliding Shopping Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQty={updateCartQty}
        onRemove={removeFromCart}
        onClear={clearCart}
      />

      {/* Floating Cart Button (visible if cart has items) */}
      {totalBags > 0 && !cartOpen && (
        <button
          className="cart-float-btn"
          onClick={() => setCartOpen(true)}
          aria-label="Open shopping cart"
        >
          <svg className="cart-float-icon" viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          <span className="cart-float-badge">{totalBags}</span>
        </button>
      )}
    </div>
  );
}
