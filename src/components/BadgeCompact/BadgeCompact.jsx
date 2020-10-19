import React from "react";
import { Link } from "react-router-dom";
import "./BadgeCompact.scss";

const BadgeCompact = (props) => {
  const cssClassName = "BadgeCompact";

  const { firstName, lastName, jobTitle, twitter, avatar, loading, id } = props;

  if (loading) {
    return (
      <div className={`${cssClassName}`}>
        <div className={`${cssClassName}__avatar loading`} />
        <div className={`${cssClassName}__section-name`}>
          <div className={`${cssClassName}__section-name--name loading`} />
          <div className={`${cssClassName}__section-name--jobTitle loading`} />
          <div className={`${cssClassName}__section-name--twitter loading`} />
        </div>
      </div>
    );
  }
   
  return (
    <Link to={`/badges/${id}`} className={`${cssClassName} text-decoration-none`}>
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
    </Link>
  );  
};

export default BadgeCompact;
