import styled from "styled-components";

const StyledCartProduct = styled.li`

  height: 80px;
  display: flex;
  justify-content: space-around;


  & > img {
    max-width: 80px;
    background-color: var(--gray-3);
    border-radius: 5px;
  }

  & > button {
    
  }


`;

export default StyledCartProduct;