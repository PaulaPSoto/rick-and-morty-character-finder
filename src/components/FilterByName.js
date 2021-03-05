const FilterByName = (props) => {
  console.log(props.filterByName);
  const handleChange = (e) => {
    props.handleFilter({
      key: "name",
      value: e.target.value,
    });
  };

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleForm}>
      <label htmlFor="name">Filtrar por nombre:</label>
      <input
        value={props.filterByName}
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </form>
  );
};
export default FilterByName;
