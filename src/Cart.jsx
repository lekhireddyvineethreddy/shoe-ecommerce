import React, { useState, useEffect } from 'react';

const Cart = ({ cart }) => {
  const [totalQuantities, setTotalQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalQuantities = () => {
      const quantities = cart.reduce((accumulator, currentItem) => {
        const key = `${currentItem.shoeName}_${currentItem.size}`;
        const quantity = parseInt(currentItem.quantity) || 0;
        accumulator[key] = (accumulator[key] || 0) + quantity;
        return accumulator;
      }, {});

      setTotalQuantities(quantities);

      let price = 0;
      cart.forEach((item) => {
        price += parseFloat(item.price) * (parseInt(item.quantity) ||0);
      });
      setTotalPrice(price);
    };

    calculateTotalQuantities();
  }, [cart]);

  const uniqueCartItems = Array.from(new Set(cart.map((item) => `${item.shoeName}_${item.size}`)));

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {uniqueCartItems.map((uniqueItem, index) => {
        const [shoeName, size] = uniqueItem.split('_');
        const item = cart.find((item) => item.shoeName === shoeName && item.size === size);

        return (
          <div key={index} className="cart-item">
            <h3>{shoeName}</h3>
            <p>Size: {size}</p>
            <p>Price: ${item.price}</p>
            <p>Total Quantity: {totalQuantities[uniqueItem]}</p>
          </div>
        );
      })}
      <div className="total-price">
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      <div className="cart-footer">
        <button className="place-order-button">Place Order</button>
        <button className="cancel-button">Cancel</button>
      </div>
    </div>
  );
};

export default Cart;
