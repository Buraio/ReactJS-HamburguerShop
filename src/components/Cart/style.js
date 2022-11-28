import styled from "styled-components";

const StyledCart = styled.div`

  width: 365px;
  min-height: 225px;

  & > h2 {
    height: 65px;
    padding: 0 20px;
    background-color: var(--color-primary);
    color: #fff;
    border-radius: 5px 5px 0 0;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
  }

  & ul {
    max-height: 325px;
    overflow-y: auto;
  }


  @media (min-width: 375px) {

    width: 100%;

    & > ul {
      padding: 20px 10px;
      background-color: var(--gray-4);
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

  }

`;

export default StyledCart;