 const getDataFromApi = () => {
  //  return fetch('//rickandmortyapi.com/api/character')
  return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
     .then(response => response.json())
      .then(data => {
         return data.results.map((cartoon) => {
           console.log("data", data);
           return {
               id: cartoon.id,
               name: cartoon.name,
               species: cartoon.species,
               image: cartoon.image 
           };
         });
       });
   };
   
   export default getDataFromApi;