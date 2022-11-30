import styled from "styled-components";

const StyledNoProductDiv = styled.div`
  width: 100%;
  height: 160px;
  background-color: var(--gray-4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  & h2 {
    font-size: var(--font-size-3);
    color: var(--gray-1);
  }

  & p {
    font-size: var(--font-size-5);
    color: var(--gray-2);
  }
`;

export default StyledNoProductDiv;
