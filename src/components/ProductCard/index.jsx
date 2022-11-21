import React from "react";

const ProductCard = ({ children }) => {
  return (
    <li className="">
      <img src="./src/assets/product1.png" alt="" />
      <div className="">
        <h2>Hamburguer</h2>
        <span className="">Sanduiches</span>
        <span className="">R$ 14.00</span>
        {children}
      </div>
    </li>
  );
};

export default ProductCard;
