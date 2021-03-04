import React from "react";
// import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <div className="card">
      <img
        src={props.cartoon.image}
        alt={`Foto de ${props.cartoon.name}`}
        title={`Foto de ${props.cartoon.name}`}
      />
      <article>
        <h4 className="name">{props.cartoon.name}</h4>
        <h5 className="species">{props.cartoon.species}</h5>
      </article>
    </div>
  );
};

export default CharacterCard;
