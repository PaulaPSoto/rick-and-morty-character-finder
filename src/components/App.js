import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import getDataFromApi from "../services/getDataFromApi";

console.log("app", getDataFromApi());

const App = () => {
  const [cartoons, setCartoons] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => setCartoons(data));
  }, []);

  return (
      <div>
        <CharacterList cartoons={cartoons} />
      </div>
  );
};

export default App;
