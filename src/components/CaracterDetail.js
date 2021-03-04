import React from "react";
import { Link } from "react-router-dom";

const CaracterDetail = (props) => {
  return (
    <div>
      <span className="return">Volver</span>
      <div>
        <article className="cardDetail">
          <img
            src={props.cartoon.image}
            alt={`Foto de ${props.cartoon.name}`}
            title={`Foto de ${props.cartoon.name}`}
          />
          <h2 className="name">{props.cartoon.name}</h2>
          <h2>Status:{props.cartoon.status}</h2>
          <h2>Origin:{props.cartoon.origin}</h2>
          <h2>Episodes{props.cartoon.episode}</h2>

          <Link to="/">
            <span></span>
          </Link>
        </article>
      </div>
    </div>
  );
};

export default CaracterDetail;
