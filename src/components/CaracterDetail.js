import React from "react";
import { Link } from "react-router-dom";

const CaracterDetail = (props) => {
  if (props.cartoon === undefined) {
    return (
      <div>
        <div>
          <div>
            <header>
              <h2>Usuario no encontrado</h2>
              <Link to="/">
                <span></span>
              </Link>
            </header>
            <section>
              <p>Búscate la vida</p>
            </section>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <div>
            <header>
              <h2>{props.cartoon.name}</h2>
              <h2>{props.cartoon.origin}</h2>
              <h2>{props.cartoon.episode}</h2>
              <h2>{props.cartoon.status}</h2>
              <Link to="/">
                <span></span>
              </Link>
            </header>
            <section>
              <img src="" alt="" />
              <ul>
                <li>{props.cartoon.name} </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
};

export default CaracterDetail;
