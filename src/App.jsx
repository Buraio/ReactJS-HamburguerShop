import React, { useState } from "react";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CartList from "./components/CartList";
import StyledContainer from "./styles/container";

function App() {
  const [productArray, setProduct] = useState([]);
  const [cartProductArray, setCartProduct] = useState([]);
  const [cartTotalPrice, setTotalPrice] = useState(0);

  return (
    <div className="App">
      <Header>
        <InputSearch></InputSearch>
      </Header>

      <StyledContainer>
        <ProductList
          productArray={productArray}
          cartProductArray={cartProductArray}
          setProduct={setProduct}
          setCartProduct={setCartProduct}
          setTotalPrice={setTotalPrice}
        ></ProductList>

        <Cart
          cartProductArray={cartProductArray}
          setCartProduct={setCartProduct}
          totalPrice={cartTotalPrice}
          setTotalPrice={setTotalPrice}
        >
          <CartList
            productArray={cartProductArray}
            setCartProduct={setCartProduct}
          />
        </Cart>
      </StyledContainer>
    </div>
  );
}

export default App;
