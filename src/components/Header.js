import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';  // Import the CSS file
import cartIcon from '../assets/images/shopping_cart_icon.png';  // Import the cart icon image

const Header = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Link to="/cart" className="cart-icon">
        <img src={cartIcon} alt="Cart" className="cart-icon-image" /> 
        Cart ({totalItems})
      </Link>
    </header>
  );
};

export default Header;