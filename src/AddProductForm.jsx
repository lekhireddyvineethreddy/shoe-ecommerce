import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [shoeName, setShoeName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantityS, setQuantityS] = useState('');
  const [quantityM, setQuantityM] = useState('');
  const [quantityL, setQuantityL] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      shoeName: shoeName,
      description: description,
      price: price,
      quantities: {
        S: parseInt(quantityS, 10),
        M: parseInt(quantityM, 10),
        L: parseInt(quantityL, 10)
      }
    };

    onAddProduct(newProduct);
    setShoeName('');
    setDescription('');
    setPrice('');
    setQuantityS('');
    setQuantityM('');
    setQuantityL('');
  };

  return (
    <div className="add-product">
      <input type="text" placeholder="Shoe Name" value={shoeName} onChange={(e) => setShoeName(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="number" placeholder="Quantity S" value={quantityS} onChange={(e) => setQuantityS(e.target.value)} />
      <input type="number" placeholder="Quantity M" value={quantityM} onChange={(e) => setQuantityM(e.target.value)} />
      <input type="number" placeholder="Quantity L" value={quantityL} onChange={(e) => setQuantityL(e.target.value)} />
      <button onClick={handleAddProduct}>Add to Products</button>
    </div>
  );
};

export default AddProductForm;
