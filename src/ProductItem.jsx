import React from 'react';

const ProductItem = ({ product, handleAddToCart }) => {
  return (
    <div className="product">
      <h3>{product.shoeName}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div>
        <button onClick={() => handleAddToCart(product, 'S')} disabled={product.quantities.S === 0}>Add S to Cart ({product.quantities.S} available)</button>
        <button onClick={() => handleAddToCart(product, 'M')} disabled={product.quantities.M === 0}>Add M to Cart ({product.quantities.M} available)</button>
        <button onClick={() => handleAddToCart(product, 'L')} disabled={product.quantities.L === 0}>Add L to Cart ({product.quantities.L} available)</button>
      </div>
    </div>
  );
};

export default ProductItem;
