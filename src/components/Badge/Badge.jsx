import React from "react";
import "./Badge.scss";
import confLogo from "../../images/badge-header.webp";
import Gravatar from "../Gravatar";

const Badge = (props) => {
  const { firstName, lastName, jobTitle, twitter, mail, imageUrl, loading } = props;
  const cssClassName = 'badge'
  const avatar = imageUrl 
    ? <img className="badge__section-name--avatar" src={imageUrl} alt="Avatar" /> : <Gravatar className="badge__section-name--avatar" mail={mail} />
  

  return (
    <div className={`${cssClassName}`}>
      <div className={`${cssClassName}__header`}>
        <img src={confLogo} alt="logo of component" />
      </div>
      {loading 
      ?
      <>
        <div className={`${cssClassName}__section-name`}>
          <div className={`${cssClassName}__section-name--avatar loading`} />
          <div className={`${cssClassName}__section-name--name loading`} />
        </div>
        <div className={`${cssClassName}__section-info`}>
          <div className={`${cssClassName}__job-title loading`} />
          <div className={`${cssClassName}__twitter loading`} />
        </div>
      </>
      :
      <>
        <div className={`${cssClassName}__section-name`}>
          {avatar}
          <h2>
            {firstName} <br />
            {lastName}
          </h2>
        </div>
        <div className={`${cssClassName}__section-info`}>
          <h5>{jobTitle}</h5>
          <p className="p--twitter">@{twitter}</p>
        </div>
      </>
      } 
      <p className='p--gray'>#InterConf</p>
    </div>
  );
};

export default Badge;
