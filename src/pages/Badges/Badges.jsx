import React from "react";
import './Badges.scss'
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import BadgeList from "../../components/BadgeList/BadgeList";
import { Link } from "react-router-dom";

const data = [
  {
    id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
    firstName: "Morty",
    lastName: "Smith",
    email: "morty_smith@gmail.com",
    jobTitle: "Legacy Brand Director",
    twitter: "morty_smith_ok",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRjhSJREbUDNRsLLOYsfOYCCOFZLu1C2N-Mw&usqp=CAU"
  },
  {
    id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
    firstName: "Squanchy",
    lastName: "",
    email: "squanchy@hotmail.com",
    jobTitle: "Human Research Architect",
    twitter: "squanchy_ok",
    avatarUrl: "https://www.redwolf.in/image/catalog/artwork-Images/mens/Digital/squanchy-t-shirt-artwork.png"
  },
  {
    id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
    firstName: "Daphney",
    lastName: "Torphy",
    email: "Ron61@hotmail.com",
    jobTitle: "National Markets Officer",
    twitter: "DaphneyTorphy96105",
    avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
  }
]

const Badges = () => {
  const cssClassName = 'Badges';
  
  return (
    <>
      <Navbar />
      <Hero />
      <div className="grid">
        <div className={`${cssClassName}__button`}>

            <Link to="badges/new" className="btn--primary">Add</Link>

        </div>
        <div className={`${cssClassName}__badgeList`} >
          <BadgeList badges={data}/>
        </div>
      </div>
    </>
  );
};

export default Badges;
