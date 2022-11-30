import React from "react";
import StyledContainer from "../../styles/container";
import StyledHeader from "./style";
import logoImg from "../../assets/logo.svg";

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <img src={logoImg} />
        {children}
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
