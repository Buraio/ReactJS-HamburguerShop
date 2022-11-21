import { useState } from "react";
import Header       from "./components/Header";
import InputSearch  from "./components/InputSearch";
import ProductList  from "./components/ProductList";
import ProductCard  from "./components/ProductCard";
import Button       from "./components/Button";
import Cart         from "./components/Cart";
import CartList     from "./components/CartList";
import CartProduct  from "./components/CartProduct";
import TotalCart    from "./components/TotalCart";

function App() {
  return (
    <div className="App">
      <Header>
        <InputSearch></InputSearch>
      </Header>

      <ProductList>
        <ProductCard>
          <Button></Button>
        </ProductCard>
      </ProductList>

      <Cart>
        <CartList>
          <CartProduct></CartProduct>
        </CartList>
        <TotalCart></TotalCart>
      </Cart>
    </div>
  );
}

export default App;
