import React from "react";
import BadgeCompact from "../../components/BadgeCompact/BadgeCompact";
import './BadgeList.scss'

const BadgeList = props => {
  const cssClassName = "BadgeList";

  return(
   <div className={cssClassName}>
    {
      props.badges.map(badge => {
        return(
          <BadgeCompact
            key={badge.id}
            firstName={badge.firstName}
            lastName={badge.lastName}
            jobTitle={badge.jobTitle}
            twitter={badge.twitter}
            avatar={badge.avatarUrl}
          />
        )
      })
    }
   </div>
  )
}

export default BadgeList;
