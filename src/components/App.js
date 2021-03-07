import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CaracterDetail from "./CaracterDetail";
import getDataFromApi from "../services/getDataFromApi";
import "../stylesheets/index.css";
import logo from "../images/logo.png";

console.log("app", getDataFromApi());

const App = () => {
  const [cartoons, setCartoons] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");

  //loading true o false
  useEffect(() => {
    getDataFromApi().then((data) => setCartoons(data));
    // setLoading(false);
  }, []);

  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    } else if (inputChange.key === "species") {
      setSpecies(inputChange.value);
      console.log("inputde la especie", inputChange.value);
    }
  };

  const filterCartoons = cartoons
    .filter((cartoon) => {
      return cartoon.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((cartoon) => {
      return cartoon.species.toUpperCase().includes(species.toUpperCase());
    });

  const renderDetail = (routerProps) => {
    console.log("Id del producto de la ruta", routerProps.match.params.id);
    const routerCartoonId = parseInt(routerProps.match.params.id);
    const cartoonFound = cartoons.find(
      (cartoon) => cartoon.id === routerCartoonId
    );

    if (cartoonFound) {
      return <CaracterDetail cartoon={cartoonFound} />;
    }
  };

  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" exact>
          <img
            className="logo"
            src={logo}
            alt="logo"
            title="logo de la serie"
          />
          <Filters handleFilter={handleFilter} filterByName={name} />
          <CharacterList
            // loading={loading}
            cartoons={filterCartoons}
            filterByName={name}
          />
        </Route>
        <Route path="/cartoon/:id" render={renderDetail} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
