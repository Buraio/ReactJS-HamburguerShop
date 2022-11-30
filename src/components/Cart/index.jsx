import React from "react";
import TotalCart from "./TotalCart";
import StyledCart from "./style";

const Cart = ({ setCartProduct, setTotalPrice, totalPrice, totalValue, children }) => {
  return (
    <StyledCart>
      <h2 className="">Carrinho de compras</h2>
      {children}
      <TotalCart
        setCartProduct={setCartProduct}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        totalValue={totalValue}
      />
    </StyledCart>
  );
};

export default Cart;
