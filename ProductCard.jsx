// src/components/ProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Preço: R${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
