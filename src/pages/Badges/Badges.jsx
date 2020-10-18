import React, {useEffect, useState} from "react";
import './Badges.scss'
import Hero from "../../components/Hero/Hero";
import BadgeList from "../../components/BadgeList/BadgeList";
import { Link } from "react-router-dom";
import fetchCharacter from "../../components/utils/fetchCharacter";

const Badges = () => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  useEffect( () => {
    fetchCharacter(characters, page)
    .then( data => {
      setCharacters(data)
    }
    )
  }, [page]);
  

  const cssClassName = 'Badges';
  
  return (
    <>
      <Hero />
      <div className="grid">
        <div className={`${cssClassName}__button`}>
            <Link to="badges/new" className="btn btn--primary">Add</Link>
        </div>
        <div className={`${cssClassName}__badgeList`} >
          <BadgeList badges={characters}/>
          <button onClick= {() => setPage(page+1)} className={`btn btn--terciary btn--full-width`}>Load more</button>
        </div>
      </div>
    </>
  );
};

export default Badges;
