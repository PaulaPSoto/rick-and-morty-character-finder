const FilterBySpecies = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      key: "species",
      value: e.target.value,
    });
  };
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm}>
      <label className="form" htmlFor="species">
        Filtrar por especie:
      </label>
      <input
        className="input"
        type="text"
        name="species"
        id="species"
        onChange={handleChange}
      />
    </form>
  );
};
export default FilterBySpecies;
