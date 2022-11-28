import React from "react";
import { burgerKenzieApi } from "../../services/api/api";
import StyledAddButton from "./style";

const Button = ({ cartProductArray, setCartProduct, setTotalPrice }) => {
  const addToCart = async (event) => {
    const parentId = parseInt(event.target.parentElement.id);
    const getProducts = async () => {
      try {
        const request = await burgerKenzieApi.get("products");

        await request.data.map((product) => {
          if (product.id === parentId) {
            setCartProduct((oldProductArray) => {
              const validateSameItemArray = oldProductArray.filter(
                (oldProduct) => {
                  if (parentId === oldProduct.id) {
                    return oldProduct;
                  }
                }
              );

              if (validateSameItemArray.length === 0) {
                return [...oldProductArray, product];
              } else {
                return [...oldProductArray];
              }
            });
          }
        });

        // setTotalPrice(async () => {
        //   setTimeout(() => {
        //     cartProductArray.reduce((previous, current) => {
        //       console.log(previous)
        //     }, 0)
        //   }, 2000);
        // })
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  };

  return (
    <>
      <StyledAddButton onClick={addToCart}>Adicionar</StyledAddButton>
    </>
  );
};

export default Button;