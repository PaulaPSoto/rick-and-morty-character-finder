import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
const CharacterList = (props) => {
  const uElements = props.cartoons.map((cartoon) => {
    return (
      <li key={cartoon.id}>
        <Link to={`/cartoon/${cartoon.id}`}>
          <CharacterCard cartoon={cartoon} />
        </Link>
      </li>
    );
  });

  return (
    <section>
      <ul>{uElements}</ul>
    </section>
  );
};

export default CharacterList;
