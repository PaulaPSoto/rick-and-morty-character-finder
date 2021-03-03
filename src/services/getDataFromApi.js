 const getDataFromApi = () => {
   return fetch('//rickandmortyapi.com/api/character')
     .then(response => response.json())
      .then(data => {
         return data.results.map((cartoon) => {
           return {
               name: cartoon.name,

             
           };
           
         });
       });
      
   };
   export default getDataFromApi;