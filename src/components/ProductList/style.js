import styled from "styled-components";

const StyledProductList = styled.ul`
  width: 100%;
  padding-right: 30px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;

  @media (min-width: 1100px) {
    min-width: 300px;
    max-width: 350px;
    height: 100%;
    max-height: 775px;
    flex-direction: row;
    overflow-x: visible;
    overflow-y: auto;
    flex-wrap: wrap;
  }

  @media (min-width: 1275px) {
    max-width: 670px;
  }

  @media (min-width: 1600px) {
    max-width: 1000px;
  }
`;

export default StyledProductList;
