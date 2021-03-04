import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import getDataFromApi from "../services/getDataFromApi";
import Filters from './FilterByName';

console.log("app", getDataFromApi());

const App = () => {
  const [cartoons, setCartoons] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getDataFromApi().then((data) => setCartoons(data));
    
  }, []);
  

  const handleFilter = (inputChange) =>{
    console.log('el objeto o mensaje que le llega a App desde fiterByName', inputChange);
    if(inputChange.key ==='name'){
      setName(inputChange.value);
    }
   }
       
   const filterCartoons = cartoons.filter(cartoon => {return cartoon.name.toUpperCase().includes(name.toUpperCase())})

  

  return (
      <div>
        <Filters handleFilter ={handleFilter} />
        <CharacterList  cartoons={filterCartoons} />
      </div>
  );
};

export default App;
