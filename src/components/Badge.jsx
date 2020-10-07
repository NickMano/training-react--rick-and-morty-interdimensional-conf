import React from "react";
import confLogo from "../images/badge-header.svg";

const Badge = () => (
  <>
    <div>
      <img src={confLogo} alt="logo of component" />
      <div>
        <img src="https://en.gravatar.com/avatar?d=identicon" alt="Avatar" />
        <h1>
          Nicolas <br />
          Manograsso
        </h1>
      </div>
      <h2>Engeneer Manager</h2>
      <p>@NicoMano</p>
      <div>
        <p>#PlatziConf</p>
      </div>
    </div>
  </>
);

export default Badge;
