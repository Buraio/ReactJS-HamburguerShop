import styled from "styled-components";

const StyledInputSearch = styled.div`

  width: 100%;
  height: 60px;
  padding: 0 10px;
  background-color: #fff;
  border-radius: 8px;
  border: 2px solid var(--gray-3);
  display: flex;
  justify-content: space-between;
  align-items: center;

  & input {
    background-color: #fff;
    border: none;
    font-size: 1rem;
  }

  & input::placeholder {
    color: var(--gray-2);
  }

  & input:focus {
    outline: none;
  }

  & button {
    padding: 11.5px 20px;
    background-color: var(--color-primary);
    color: #fff;
    border-radius: 8px;
    font-size: 0.875rem;
  }

  @media (min-width: 800px) {

    max-width: 365px;

    & input {
      max-width: 220px;
    }

  }

`;

export default StyledInputSearch;