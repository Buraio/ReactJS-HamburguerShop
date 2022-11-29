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
  }

  @media (min-width: 600px) {
    margin: 0 60px;
  }

  @media (min-width: 800px) {
    margin: 0 100px;
  }

  @media (min-width: 1000px) {
    margin: 0 115px;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1600px) {
    max-width: 1450px;
    margin: 0 auto;
  }
`;

export default StyledContainer;
