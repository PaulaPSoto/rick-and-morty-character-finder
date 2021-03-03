const CharacterList = (props) => {
  const uElements = props.cartoons.map((cartoon) => {
    return (
      <li key={cartoon.id}>
        <img
          src={cartoon.image}
          alt={`Foto de ${cartoon.image}`}
          title={`Foto de ${cartoon.name}`}
        />
        <h4>{cartoon.name}</h4> 
        <h3>{cartoon.species}</h3>
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
