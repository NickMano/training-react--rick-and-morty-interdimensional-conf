import React from "react";
import "./Badge.scss";
import confLogo from "../../images/badge-header.png";

const Badge = (props) => {
  const { firstName, lastName, jobTitle, twitter } = props;
  return (
    <div className="badge">
      <div className="badge__header">
        <img src={confLogo} alt="logo of component" />
      </div>
      <div className="badge__section-name">
        <img
          className="badge__avatar"
          src="https://i.pinimg.com/originals/6e/51/32/6e5132a90812ad1abf3711135a5cf406.png"
          alt="Avatar"
        />
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
