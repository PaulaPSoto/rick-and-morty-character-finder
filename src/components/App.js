import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CaracterDetail from "./CaracterDetail";
import getDataFromApi from "../services/getDataFromApi";
import "../stylesheets/index.css";

const App = () => {
  const [cartoons, setCartoons] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  console.log("Cartoons", cartoons);
  //loading true o false
  useEffect(() => {
    getDataFromApi().then((data) => setCartoons(data));
    // setLoading(false);
  }, []);
  //Este es el móvil que le paso a filter para que se lo de
  //a FilterByName y a FilterBySpecies
  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    } else if (inputChange.key === "species") {
      setSpecies(inputChange.value);
    }
  };
  //el que realmente hace la búsqueda
  const filterCartoons = cartoons
    .filter((cartoon) => {
      return cartoon.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((cartoon) => {
      return cartoon.species.toUpperCase().includes(species.toUpperCase());
    });
  //esta relacionado con:import { Route, Switch } from "react-router-dom";
  //es como un proops, que usas con: import { Route, Switch } from "react-router-dom";
  //
  const renderDetail = (routerProps) => {
    console.log("routerProps", routerProps);
    const routerCartoonId = parseInt(routerProps.match.params.id);
    const cartoonFound = cartoons.find(
      (cartoon) => cartoon.id === routerCartoonId
    );
    console.log("routerCartoonId", routerCartoonId);
    console.log("cartoonFound", cartoonFound);
    if (cartoonFound) {
      return <CaracterDetail cartoon={cartoonFound} />;
    }
  };

  const renderAbout = () => {
    return (
      <section>
        <p className="textnot">soyyyy adalab </p>
      </section>
    );
  };

  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Filters handleFilter={handleFilter} filterByName={name} />
          <CharacterList
            // loading={loading}
            cartoons={filterCartoons}
            filterByName={name}
          />
        </Route>
        {/* //path es una proops en si misma, ya tiene info */}
        <Route path="/cartoon/:id" render={renderDetail} />
        <Route path="/about/" render={renderAbout} />
      </Switch>
    </div>
  );
};

export default App;
