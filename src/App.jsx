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
  const [filteredProducts, setFilter] = useState([]);
  const [cartTotalPrice, setTotalPrice] = useState(0);

  const totalValue = () => {
    setTotalPrice(() => {
        return cartProductArray.reduce((previous, current) => {
          return previous + current.price;
        }, 0);
    });
  };

  return (
    <div className="App">
      <Header>
        <InputSearch
          productArray={productArray}
          setFilter={setFilter}
        ></InputSearch>
      </Header>

      <StyledContainer>
        <ProductList
          productArray={productArray}
          filteredProducts={filteredProducts}
          cartProductArray={cartProductArray}
          setProduct={setProduct}
          setCartProduct={setCartProduct}
          totalValue={totalValue}
        ></ProductList>

        <Cart
          cartProductArray={cartProductArray}
          setCartProduct={setCartProduct}
          totalPrice={cartTotalPrice}
          setTotalPrice={setTotalPrice}
          totalValue={totalValue}
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
