import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  return (
    <section className="sectionLook">
      <FilterByName
        handleFilter={props.handleFilter}
        filterByName={props.filterByName}
      />
      <FilterBySpecies handleFilter={props.handleFilter} />
    </section>
  );
};
export default Filters;
