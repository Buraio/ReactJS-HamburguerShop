import React from "react";
import StyledTotalCart from "./style";

const TotalCart = ({ setCartProduct, totalPrice, setTotalPrice }) => {
  const removeAllFromCart = () => {
    setCartProduct([]);
    setTotalPrice(0);
  };

  if (totalPrice !== 0) {
    return (
      <StyledTotalCart>
        <div>
          <span>Total</span>
          <span>R$ {totalPrice}</span>
        </div>
        <button className="" onClick={removeAllFromCart}>
          Remover todos
        </button>
      </StyledTotalCart>
    );
  }
};

export default TotalCart;
