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
`;

export default StyledHeader;
