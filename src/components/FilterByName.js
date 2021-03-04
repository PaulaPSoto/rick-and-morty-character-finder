
const FilterByName = props =>{
    const handleChange = (e) =>{
        console.log("consolo de e.target.value", e.target.value)
     
      props.handleFilter({
        key:'name',
        value:e.target.value
      });
    }
    return (
            
        <>
        <label  htmlFor="name">
        Filtrar por nombre:</label>
        <input  type="text" name="name" id="name" onChange={handleChange}/>
        </>
    )
  }
  export default FilterByName;
  