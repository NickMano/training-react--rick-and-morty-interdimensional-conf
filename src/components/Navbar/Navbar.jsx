import React from "react";
import "./Navbar.scss";
import Logo from "../../images/logo.svg";

const Navbar = () => (
  <div className="navbar">
    <img src={Logo} alt="spacemen head" /> <p>Interdimencional <span>Conf</span></p>
  </div>
);

export default Navbar;
