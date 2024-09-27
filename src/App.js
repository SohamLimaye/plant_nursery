import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CartProvider from './context/CartContext';
import './App.css';  // Import the CSS file

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;