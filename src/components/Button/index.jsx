import React from "react";
import { burgerKenzieApi } from "../../services/api/api";
import StyledAddButton from "./style";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Button = ({ setCartProduct, totalValue }) => {

  const cartErrorToast = () => toast.error('Não é possível adicionar mais itens');

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
                cartErrorToast();
                return [...oldProductArray];
              }
            });
          }
        });
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
