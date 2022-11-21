import React from "react";

const ProductCard = ({ Children }) => {
  return (
    <li className="">
      <img src="" alt="" />
      <div className="">
        <h2></h2>
        <span className=""></span>
        <span className=""></span>
        {Children}
      </div>
    </li>
  );
};

export default ProductCard;
