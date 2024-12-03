// src/components/ProductList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.css'; // Importa o arquivo CSS

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h4>{product.title}</h4>
          <p>R${product.price}</p>
          <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductList;
