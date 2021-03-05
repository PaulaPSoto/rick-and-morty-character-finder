import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  console.log(props.filterByName);
  return (
    <section>
      <form>
        <FilterByName
          handleFilter={props.handleFilter}
          filterByName={props.filterByName}
        />
        <FilterBySpecies handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
export default Filters;
