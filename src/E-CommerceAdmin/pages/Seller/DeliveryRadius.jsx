import React, { useState } from 'react';
import './Seller.css';

const SellerDisable = () => {
  const [deliveryRadius, setDeliveryRadius] = useState(5); 

  const increaseRadius = () => {
    setDeliveryRadius(prevRadius => prevRadius + 1);
  };

  const decreaseRadius = () => {
    setDeliveryRadius(prevRadius => (prevRadius > 1 ? prevRadius - 1 : prevRadius));
  };

  return (
    <div className="container">
      <button className="button-number-container" onClick={increaseRadius}>+</button>
      <p className="km-container"> {deliveryRadius} km</p>
      <button className="button-number-container" onClick={decreaseRadius}>-</button>
    </div>
  );
};

export default SellerDisable;
