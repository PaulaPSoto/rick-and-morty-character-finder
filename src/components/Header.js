import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <header>
      <div className="bigheader">
        <img className="logo" src={logo} alt="logo" title="logo de la serie" />
      </div>
    </header>
  );
}

export default Header;
