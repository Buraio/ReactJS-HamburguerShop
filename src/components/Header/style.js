import styled from "styled-components";

const StyledHeader = styled.header`
  height: 80px;
  margin-bottom: 26px;
  background-color: var(--gray-4);

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div > img {
    max-width: 160px;
  }

  @media (min-width: 375px) {

    height: 130px;
    padding: 15px 0;

  }

  @media (min-width: 1000px) {

    & > div {
      flex-direction: row;
    }

  }

`;

export default StyledHeader;
