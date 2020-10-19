import React from "react";
import "./Navbar.scss";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="navbar">
    <Link to='/'>
      <img src={Logo} alt="spacemen head" /> 
    </Link>
    <p>Interdimencional <span>Conf</span></p>
  </div>
);

export default Navbar;
