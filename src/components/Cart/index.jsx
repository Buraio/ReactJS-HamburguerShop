import React from "react";

const Cart = ({ children }) => {
  return (
    <div className="">
      <h2 className="">Carrinho de compras</h2>
      {children}
    </div>
  );
};

export default Cart;
