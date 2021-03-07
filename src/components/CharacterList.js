import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

const CharacterList = (props) => {
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
        <p className="textnot">
          No hay ningún personaje que coincida con la palabra{" "}
          {props.filterByName}
        </p>
      </section>
    );
  } else {
    return (
      <section>
        <ul className="list">{uElements}</ul>
      </section>
    );
  }
};

export default CharacterList;
