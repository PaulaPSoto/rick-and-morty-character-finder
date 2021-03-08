import { Link } from "react-router-dom";
const FilterByName = (props) => {
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
    <>
      <span className="return">
        <Link className="link" to="/about/">
          {" "}
          {"\u003c"} about{" "}
        </Link>
      </span>
      <form onSubmit={handleForm}>
        <label className="form" htmlFor="name">
          Filtrar por nombre:
        </label>
        <input
          className="input"
          value={props.filterByName}
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
        />
      </form>
    </>
  );
};
export default FilterByName;
