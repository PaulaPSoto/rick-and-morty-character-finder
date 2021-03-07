import React from "react";

const CharacterCard = (props) => {
  const isDead = props.cartoon.status;
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
        {isDead === "Dead" ? (
          <>
            <h5 className="species">
              {props.cartoon.status} <i className="fas fa-skull myicon"></i>
            </h5>
          </>
        ) : (
          <h5 className="species">{props.cartoon.status}</h5>
        )}
      </article>
    </div>
  );
};

export default CharacterCard;
