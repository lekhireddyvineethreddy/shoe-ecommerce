import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import AddProductForm from './AddProductForm';
import Cart from './Cart';
import ProductList from './ProductList';

const Header = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  const handleAddToCart = (product, size) => {
    const updatedProduct = { ...product };
    updatedProduct.quantities[size] -= 1;
    setCart(prevCart => [...prevCart, { ...updatedProduct, size }]);
  };

  return (
    <>
      <div className="header-container">
        <div className="header">
          <AddProductForm onAddProduct={handleAddProduct} />
          <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="cart-count">{cart.length}</div>
          </div>
        </div>
      </div>

      {showCart && <Cart cart={cart} />}
      <ProductList products={products} handleAddToCart={handleAddToCart} />
    </>
  );
};

export default Header;
