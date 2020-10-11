import React from "react";
import "./Hero.scss";
import heroImage from "../../images/hero.png";

const Hero = () => (
  <div className="hero">
    <img src={heroImage} alt="stars" className="hero__image" />
  </div>
);

export default Hero;
