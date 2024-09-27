import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ShoppingCartPage.css';  // Import the CSS file

const ShoppingCartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <div>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <h3 className="total-cost">Total: ${totalCost}</h3>
      <div className="actions">
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;