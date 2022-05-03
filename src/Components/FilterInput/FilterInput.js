const FilterInput = ({ handleChange }) => {
  return (
    <input type="text" className="input" onInput={handleChange} name="filter" />
  );
};

export default FilterInput;
