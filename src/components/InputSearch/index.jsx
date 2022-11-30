import React from "react";
import StyledInputSearch from "./style";

const InputSearch = ({ productArray, setFilter }) => {
  const filterProducts = async (event) => {
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

  return (
    <StyledInputSearch onSubmit={filterProducts}>
      <input type="text" className="" placeholder="Digitar pesquisa" />
      <button className="">Pesquisar</button>
    </StyledInputSearch>
  );
};

export default InputSearch;
