import React from "react";
import { Link } from "react-router-dom";
const CaracterDetail = (props) => {
  return (
    <div>
      <span className="return">
        <Link className="link" to="/">
          {" "}
          {"\u003c"} Volver{" "}
        </Link>
      </span>

      <div>
        <article className="cardDetail">
          <img
            className="cartoonImg"
            src={props.cartoon.image}
            alt={`Foto de ${props.cartoon.name}`}
            title={`Foto de ${props.cartoon.name}`}
          />
          <div className="cartoonDetailText">
            <h4>{props.cartoon.name}</h4>
            <p className="nameD">Status: {props.cartoon.status}</p>
            <p className="nameD">Origin: {props.cartoon.origin}</p>
            <p className="nameD">Episodes: {props.cartoon.episode}</p>
          </div>

          <Link to="/">
            <span></span>
          </Link>
        </article>
      </div>
    </div>
  );
};

export default CaracterDetail;
