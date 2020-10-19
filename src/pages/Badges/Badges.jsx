import React, {useEffect, useState} from "react";
import './Badges.scss'
import Hero from "../../components/Hero/Hero";
import BadgeList from "../../components/BadgeList/BadgeList";
import { Link } from "react-router-dom";
import fetchCharacters from "../../components/utils/fetchCharacters";
import BadgeCompact from "../../components/BadgeCompact/BadgeCompact";

const Badges = () => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect( () => {
    setLoading(true);
    fetchCharacters(page)
    .then( data => {
      setCharacters([].concat(characters, data))
      setLoading(false)
    }
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  

  const cssClassName = 'Badges';
  
  return (
    <>
      <Hero />
      <div className="grid">
        <div className={`${cssClassName}__button`}>
            <Link to="/badges/new" className="btn btn--primary">Add</Link>
        </div>
        <div className={`${cssClassName}__badgeList`} >
          <BadgeList badges={characters}/>
          {loading && <BadgeCompact loading />}
          <button onClick= {() => setPage(page+1)} className={`btn btn--terciary btn--full-width`}>Load more</button>
        </div>
      </div>
    </>
  );
};

export default Badges;
