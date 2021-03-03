// import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import getDataFromApi from '../services/getDataFromApi';

console.log("app", getDataFromApi());
const App = () => {
  
  return (
    <>
      <h1></h1>
      <div >
     <CharacterList />
      </div>
    </>
  );
};
export default App;
