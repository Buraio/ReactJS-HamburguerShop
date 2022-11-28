import React, { useEffect, useState } from "react";
import { burgerKenzieApi } from "../../services/api/api";
import ProductCard from "../ProductCard";
import Button from "../Button";
import StyledProductList from "./style";

const ProductList = ({
  productArray,
  cartProductArray,
  setProduct,
  setCartProduct,
  setTotalPrice,
}) => {
  useEffect(() => {
    const getProdutcList = async () => {
      try {
        const request = await burgerKenzieApi.get("products");
        console.log(request.data);

        setProduct(request.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProdutcList();
  }, []);

  return (
    <StyledProductList>
      {productArray.map((product, index) => {
        return (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            imgSrc={product.img}
          >
            <Button
              cartProductArray={cartProductArray}
              setCartProduct={setCartProduct}
              setTotalPrice={setTotalPrice}
            ></Button>
          </ProductCard>
        );
      })}
    </StyledProductList>
  );
};

export default ProductList;
