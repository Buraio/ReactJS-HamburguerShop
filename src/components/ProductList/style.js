import styled from "styled-components";

const StyledProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  @media (min-width: 1300px) {

    max-width: 790px;
    flex-direction: column;
    overflow-y: visible;

  }

`;

export default StyledProductList;
