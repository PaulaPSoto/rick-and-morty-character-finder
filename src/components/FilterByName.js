
const FilterByName = props =>{
    const handleChange = (e) =>{
     
      props.handleFilter({
        key:'name',
        value:e.target.value
      });
    }
    return (
        <>
        
        <input  type="text" name="name" id="name" onChange={handleChange}/>
        </>
    )
  }
  export default FilterByName;
  