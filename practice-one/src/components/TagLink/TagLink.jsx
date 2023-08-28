import React from "react";
import { NavLink } from "react-router-dom";
import "./TagLink.css";

const TagLink = ({ icon, name, path }) => {
  return (
    <NavLink
      to={path}
      className={({isActive}) => isActive ? 'link__wrapper active' : 'link__wrapper'}
    >
      <img className="link__icon" src={icon} alt={name}/>
      <span className="link__name">{name}</span>
    </NavLink>
  );
};

export default TagLink;
