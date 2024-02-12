import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
