import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import getDataFromApi from "../services/getDataFromApi";
import FilterByName from './FilterByName';

console.log("app", getDataFromApi());

const App = () => {
  const [cartoons, setCartoons] = useState([]);
  const [name, setName] = useState('');
  useEffect(() => {
    getDataFromApi().then((data) => setCartoons(data));
  }, []);

  const handleFilter = (inputChange) =>{
    
    if(inputChange.key ==='name'){
      setName(inputChange.value);
    }
   }
       
   const filterCartoons = cartoons.filter(cartoon => {return cartoon.name.toUpperCase().includes(name.toUpperCase())})

  

  return (
      <div>
        <FilterByName handleFilter ={handleFilter} />
        <CharacterList  cartoons={filterCartoons} />
      </div>
  );
};

export default App;
