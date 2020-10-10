import React from "react";
import "../styles/components/Hero.scss";
import Stars from "../images/stars.svg";

const Hero = () => (
  <div className="hero">
    <img src={Stars} alt="stars" className="hero__image" />
  </div>
);

export default Hero;
