import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Filters from "./FilterByName";
import CharacterList from "./CharacterList";
import CaracterDetail from "./CaracterDetail";
import getDataFromApi from "../services/getDataFromApi";

console.log("app", getDataFromApi());

const App = () => {
  const [cartoons, setCartoons] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => setCartoons(data));
  }, []);

  const handleFilter = (inputChange) => {
    console.log(
      "el objeto o mensaje que le llega a App desde fiterByName",
      inputChange
    );
    if (inputChange.key === "name") {
      setName(inputChange.value);
    }
  };

  const filterCartoons = cartoons.filter((cartoon) => {
    return cartoon.name.toUpperCase().includes(name.toUpperCase());
  });

  const renderDetail = (props) => {
    const id = props.match.params.id;
    const selectCartoon = cartoons.find((cartoon) => {
      return cartoon.id === id;
    });
    return <CaracterDetail cartoon={selectCartoon} />;
  };

  return (
    <div>
      <Filters handleFilter={handleFilter} />
      <CharacterList cartoons={filterCartoons} />
      <Switch>
        <Route path="cartoon/:id" render={renderDetail} />
      </Switch>
    </div>
  );
};

export default App;
