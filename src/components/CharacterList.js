import CharacterCard from "./CharacterCard";
import CartoonNotFound from "./CartoonNotFound";
import { Link } from "react-router-dom";

const CharacterList = (props) => {
  console.log("Proops.cartoon", props.cartoons);
  const uElements = props.cartoons.map((cartoon) => {
    return (
      <li key={cartoon.id}>
        <Link className="link" to={`/cartoon/${cartoon.id}`}>
          <CharacterCard cartoon={cartoon} />
        </Link>
      </li>
    );
  });
  if (props.cartoons.length === 0) {
    return <CartoonNotFound />;
  } else {
    return (
      <section>
        <ul className="list">{uElements}</ul>
      </section>
    );
  }
};

export default CharacterList;
