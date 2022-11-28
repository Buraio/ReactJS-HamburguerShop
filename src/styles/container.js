import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 375px) {

    margin: 0 15px;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;

    & > ul {
      width: 100%;
      padding-right: 30px;
      justify-content: flex-start;
      flex-wrap: nowrap;
      overflow-x: auto;
    }

  }

  @media (min-width: 1000px) {

    margin: 0 115px;

  }

`;

export default StyledContainer;
