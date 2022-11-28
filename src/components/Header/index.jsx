import React from "react";
import StyledContainer from "../../styles/container";
import StyledHeader from "./style";

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <img src={"./src/assets/logo.svg"} />
        {children}
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
