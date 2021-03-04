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

  return (
    <section>
      <ul className="list">{uElements}</ul>
    </section>
  );
};

export default CharacterList;
