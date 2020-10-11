import React from "react";
import Badge from "../../components/BadgeCompact/BadgeCompact";
import './BadgeList.scss'

const BadgeList = props => {
  const cssClassName = "BadgeList";

  return(
   <div className={cssClassName}>
    {
      props.badges.map(badge => {
        return(
          <Badge
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
