import React from "react";
import StyledInputSearch from "./style";

const InputSearch = ({ productArray, setFilter }) => {
  const filterProductsByButton = async (event) => {
    event.preventDefault();
    const formElements = [...event.target.elements];
    const searchInput = formElements[0];

    setFilter(() => {
      return productArray.filter((product) => {
        if (product.name.toLowerCase() === searchInput.value.toLowerCase()) {
          return product;
        }
      });
    });
  };

  const filterProductsByInput = async (event) => {
    const inputValue = event.target.value;
    setFilter(() => {
      return productArray.filter((product) => {
        return product.name.toLowerCase().match(inputValue.toLowerCase());
      });
    });
  };

  return (
    <StyledInputSearch onSubmit={filterProductsByButton}>
      <input
        type="text"
        className=""
        placeholder="Digitar pesquisa"
        onChange={filterProductsByInput}
      />
      <button className="">Pesquisar</button>
    </StyledInputSearch>
  );
};

export default InputSearch;
