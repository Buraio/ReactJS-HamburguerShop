import React from "react";
import StyledProductCard from "./style";

const ProductCard = ({ id, name, price, category, imgSrc, children }) => {
  return (
    <StyledProductCard id={id}>
      <img src={imgSrc} alt="" />
      <div className="">
        <h2>{name}</h2>
        <small className="">{category}</small>
        <span className="">R$ {price}</span>
      </div>
      {children}
    </StyledProductCard>
  );
};

export default ProductCard;
