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

  & > div > h3 {
    font-size: var(--font-size-5);
  }

  & > div > span {
    font-size: var(--font-size-6);
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