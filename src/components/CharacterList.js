import CharacterCard from "./CharacterCard";

import { Link } from "react-router-dom";

const CharacterList = (props) => {
  console.log("Proops.cartoon", props.cartoons);
  // console.log("Proops.loading", props.loading);
  const uElements = props.cartoons.map((cartoon) => {
    return (
      <li key={cartoon.id}>
        <Link className="link" to={`/cartoon/${cartoon.id}`}>
          <CharacterCard cartoon={cartoon} />
        </Link>
      </li>
    );
  });

  if (props.filterByName !== "" && props.cartoons.length === 0) {
    return (
      <section>
        <p>Este personaje no existe{props.filterByName}</p>
      </section>
    );
  } else {
    console.log("llen000");
    return (
      <section>
        <ul className="list">{uElements}</ul>
      </section>
    );
  }
};

export default CharacterList;
