import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  margin: 0 115px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 375px) {

    width: 100%;
    margin: 0 15px;
    flex-direction: column;


    & > ul {
      width: 100%;
      flex-wrap: nowrap;
      overflow-y: auto;
    }

  }

`;

export default StyledContainer;
