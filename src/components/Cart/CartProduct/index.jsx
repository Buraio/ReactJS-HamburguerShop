import React from "react";
import StyledCartProduct from "./style";

const CartProduct = ({ setCartProduct, id, imgSrc, name, category }) => {
  const removeFromCart = (event) => {
    const parentId = parseInt(event.target.parentElement.id);
    setCartProduct((oldProductArray) => {
      const filteredArray = oldProductArray.filter((product) => {
        if (product.id !== parentId) {
          return product;
        }
      });
      return filteredArray;
    });
  };

  return (
    <>
      <StyledCartProduct id={id}>
        <img src={imgSrc} alt="" />
        <div className="">
          <h3>{name}</h3>
          <span>{category}</span>
          {/* <span>Quantidade: {1}</span> */}
        </div>
        <button onClick={removeFromCart}>Remover</button>
      </StyledCartProduct>
    </>
  );
};

export default CartProduct;
