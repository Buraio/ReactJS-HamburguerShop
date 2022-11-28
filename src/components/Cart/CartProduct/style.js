import styled from "styled-components";

const StyledCartProduct = styled.li`

  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    transform: translateX(-30px);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & > img {
    max-width: 80px;
    background-color: var(--gray-3);
    border-radius: 5px;
  }

  & > button {
    color: var(--gray-2);
  }

`;

export default StyledCartProduct;