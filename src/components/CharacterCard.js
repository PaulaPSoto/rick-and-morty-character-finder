import React from "react";

const CharacterCard = (props) => {
  const isDead = props.cartoon.status;
  return (
    <div className="card">
      <img
        className="photo"
        src={props.cartoon.image}
        alt={`Foto de ${props.cartoon.name}`}
        title={`Foto de ${props.cartoon.name}`}
      />
      <article>
        <h4 className="name">{props.cartoon.name}</h4>
        <p className="species">{props.cartoon.species}</p>
        {isDead === "Dead" ? (
          <>
            <p className="species">
              {props.cartoon.status} <i className="fas fa-skull myicon"></i>
            </p>
          </>
        ) : (
          <p className="species">{props.cartoon.status}</p>
        )}
      </article>
    </div>
  );
};

export default CharacterCard;
