import React from "react";
import "./Badge.scss";
import confLogo from "../../images/badge-header.webp";
import Gravatar from "../Gravatar";

const Badge = (props) => {
  const { firstName, lastName, jobTitle, twitter, mail } = props;
  return (
    <div className="badge">
      <div className="badge__header">
        <img src={confLogo} alt="logo of component" />
      </div>
      <div className="badge__section-name">
        <Gravatar className="badge__avatar" mail={mail} />
        <h2>
          {firstName} <br />
          {lastName}
        </h2>
      </div>
      <div className="badge__section-info">
        <h5>{jobTitle}</h5>
        <p className="p--twitter">@{twitter}</p>
      </div>
      <p className='p--gray'>#InterConf</p>
    </div>
  );
};

export default Badge;
