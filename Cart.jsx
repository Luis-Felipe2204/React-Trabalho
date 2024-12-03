// src/components/Cart.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './cart.css'; 
const Cart = ({ cartItems }) => {
  if (cartItems.length === 0) {
    return <p>O carrinho está vazio.</p>;
  }

  return (
    <div className="cart-container">
      <h2>Carrinho</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.thumbnail} alt={item.title} className="product-image" />
          <div className="product-details">
            <h3>{item.title}</h3>
            <p>Preço: R${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  })).isRequired,
};

export default Cart;
