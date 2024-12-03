// src/App.jsx
import React from 'react';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import Cart from './components/Cart';
import './App.css'; // Importa o arquivo CSS global
import fetchProducts from './api/fetchProducts';

const App = () => {
  const [products, setProducts] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  const handleSearch = async (query) => {
    const fetchedProducts = await fetchProducts(query);
    setProducts(fetchedProducts);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Alinha o título à esquerda */}
      <h1 style={{ textAlign: 'left', paddingLeft: '20px' }}>Mercado Facil</h1>
      <SearchBar onSearch={handleSearch} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ width: '70%' }}>
          <ProductList products={products} onAddToCart={handleAddToCart} />
        </div>
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
