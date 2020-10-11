import React from "react";
import "./BadgeCompact.scss";

const BadgeCompact = (props) => {
  const cssClassName = "BadgeCompact";

  const { firstName, lastName, jobTitle, twitter, avatar } = props;
  return (
    <div className={`${cssClassName}`}>
      <img
        className={`${cssClassName}__avatar`}
        src={avatar ? avatar : "https://en.gravatar.com/avatar?d=identicon"}
        alt="Avatar"
      />
      <div className={`${cssClassName}__section-name`}>
        <h4 className={`${cssClassName}__section-name--name`}>
          {firstName} {lastName}
        </h4>
        <h5>{jobTitle}</h5>
        <p className="p--twitter">@{twitter}</p>
      </div>
    </div>
  );
};

export default BadgeCompact;
