import React from "react";
// import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    // <Link to={`./cartoon/${props.cartoon.id}`}>
    <>
      <img
        src={props.cartoon.image}
        alt={`Foto de ${props.cartoon.name}`}
        title={`Foto de ${props.cartoon.name}`}
      />
      <h4>{props.cartoon.name}</h4>
      <h3>{props.cartoon.species}</h3>
    </>
    // </Link>
  );
};

export default CharacterCard;
