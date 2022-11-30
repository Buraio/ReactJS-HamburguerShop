import React, { useEffect, useState } from "react";
import { burgerKenzieApi } from "../../services/api/api";
import ProductCard from "../ProductCard";
import Button from "../Button";
import StyledProductList from "./style";

const ProductList = ({
  productArray,
  filteredProducts,
  cartProductArray,
  setProduct,
  setCartProduct,
  totalValue,
}) => {
  useEffect(() => {
    const getProdutcList = async () => {
      try {
        const request = await burgerKenzieApi.get("products");
        setProduct(request.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProdutcList();
  }, []);

  const returnProductCard = (array) => {
    return array.map((product, index) => {
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
            totalValue={totalValue}
          ></Button>
        </ProductCard>
      );
    });
  };

  return (
    <StyledProductList>
      {filteredProducts.length === 0
        ? returnProductCard(productArray)
        : returnProductCard(filteredProducts)}
    </StyledProductList>
  );
};

export default ProductList;
