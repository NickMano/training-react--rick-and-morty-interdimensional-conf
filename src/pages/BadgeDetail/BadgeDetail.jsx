import React, {useState, useEffect} from "react";
import './BadgeDetail.scss'
import Hero from "../../components/Hero/Hero";
import Badge from "../../components/Badge/Badge";
import fetchCharacter from "../../components/utils/fetchCharacter"
import { Link } from "react-router-dom";

const BadgeDetail = props => {
  const cssClassName = "BadgeDetail";

  const [character, setCharacter] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect( () => {
    setLoading(true);
    fetchCharacter(props.match.params.badgeId)
    .then( data => {
      setCharacter(data)
      setLoading(false)
    }
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <div className={`grid`}>
        <div className={`${cssClassName}__badge`}>
        {loading 
        ?
          <Badge loading/>
        :
          <Badge
            firstName={character.firstName || "Rick Sanchez"}
            jobTitle={character.jobTitle || "Viajero interdimensional"}
            twitter={character.twitter || "RickSanchez_C137_ok"}
            mail={character.mail || ""}
            imageUrl={character.avatarUrl}
          />
        }
          
        </div>
        <div className={`${cssClassName}__actions`}>
          <h2>Actions</h2>
          <Link className="btn btn--primary btn--full-width">Edit</Link>
          <Link className="btn btn--terciary btn--full-width">Delete</Link>
        </div>
      </div>
    </>
  );
};

export default BadgeDetail;
