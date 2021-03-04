import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Filters from "./FilterByName";
import CharacterList from "./CharacterList";
import CaracterDetail from "./CaracterDetail";
import getDataFromApi from "../services/getDataFromApi";
import "../stylesheets/index.css";
import logo from "../images/logo.png";

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

  const renderDetail = (routerProps) => {
    console.log("Id del producto de la ruta", routerProps.match.params.id);
    const routerCartoonId = parseInt(routerProps.match.params.id);
    const cartoonFound = cartoons.find(
      (cartoon) => cartoon.id === routerCartoonId
    );
    console.log("console", routerProps.match.params.id);
    if (cartoonFound) {
      return <CaracterDetail cartoon={cartoonFound} />;
    }
  };

  return (
    <div>
      <img className="logo" src={logo} alt="logo" title="logo de la serie" />
      <Switch>
        <Route path="/" exact>
          <Filters handleFilter={handleFilter} />
          <CharacterList cartoons={filterCartoons} />
        </Route>
        <Route path="/cartoon/:id" render={renderDetail} />
      </Switch>
    </div>
  );
};

export default App;
