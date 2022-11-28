import React from "react";
import TotalCart from "./TotalCart";
import StyledCart from "./style";

const Cart = ({ setCartProduct, setTotalPrice, totalPrice, children }) => {
  return (
    <StyledCart>
      <h2 className="">Carrinho de compras</h2>
      {children}
      <TotalCart
        setCartProduct={setCartProduct}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
    </StyledCart>
  );
};

export default Cart;
