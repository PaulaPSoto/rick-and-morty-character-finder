import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const uElements = props.cartoons.map((cartoon) => {
    return (
      <li key={cartoon.id}>
        <CharacterCard cartoon={cartoon} />
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
