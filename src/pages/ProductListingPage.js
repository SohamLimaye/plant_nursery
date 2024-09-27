import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import fiddleLeafFig from '../assets/images/fiddle_leaf_fig.jpeg';
import snakePlant from '../assets/images/snake_plant.jpeg';
import aloeVera from '../assets/images/aloe_vera.jpeg';
import jadePlant from '../assets/images/jade_plant.jpeg';
import peaceLily from '../assets/images/peace_lily.jpeg';
import spiderPlant from '../assets/images/spider_plant.jpeg';
import PopupMessage from '../components/PopupMessage';
import './ProductListingPage.css';  // Import the CSS file

const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 50, thumbnail: fiddleLeafFig, category: 'low light' },
  { id: 2, name: 'Snake Plant', price: 30, thumbnail: snakePlant, category: 'low light' },
  { id: 3, name: 'Aloe Vera', price: 20, thumbnail: aloeVera, category: 'succulents' },
  { id: 4, name: 'Jade Plant', price: 25, thumbnail: jadePlant, category: 'succulents' },
  { id: 5, name: 'Peace Lily', price: 35, thumbnail: peaceLily, category: 'air purifying' },
  { id: 6, name: 'Spider Plant', price: 15, thumbnail: spiderPlant, category: 'air purifying' },
];

const ProductListingPage = () => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useContext(CartContext);
  const [popupMessage, setPopupMessage] = useState('');
  
  const handleAddToCart = (product) => {
    addToCart(product);
    setPopupMessage('Product added successfully');
  };

  const handleClosePopup = () => {
    setPopupMessage('');
  };

  const categories = ['low light', 'air purifying', 'succulents'];

  return (
    <div className="product-listing-page">
      <h2>Products</h2>
      {categories.map(category => (
        <div key={category} className="category-section">
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div className="product-list">
            {products
              .filter(product => product.category === category)
              .map(product => {
                const cartItem = cart.find(item => item.id === product.id);
                return (
                  <div key={product.id} className="product-item">
                    <img src={product.thumbnail} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    {cartItem ? (
                      <div>
                        <button onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}>-</button>
                        <span>{cartItem.quantity}</span>
                        <button onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}>+</button>
                        <button onClick={() => removeFromCart(product.id)}>Remove</button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      ))}
      {popupMessage && <PopupMessage message={popupMessage} onClose={handleClosePopup} />}
    </div>
  );
};

export default ProductListingPage;