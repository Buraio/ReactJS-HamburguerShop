import React from "react";

const Header = ({ children }) => {
  return (
    <header>
      <div className="">
        <img src={"./src/assets/logo.svg"} />
        {children}
      </div>
    </header>
  );
};

export default Header;
