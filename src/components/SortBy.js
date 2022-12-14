const SortBy = ({ sortProducts }) => {
  return (
    <div className="sort">
      <label htmlFor="sort-options">Sort by: </label>

      <select id="sort-options" name="sort-options" onChange={sortProducts}>
        <option className="sort-option" value="none"></option>
        <option className="sort-option" value="Price (higher to lower)">
          Price (higher to lower)
        </option>
        <option className="sort-option" value="Price (lower to higher)">
          Price (lower to higher)
        </option>
        <option className="sort-option" value="Rate (higher to lower)">
          Rate (higher to lower)
        </option>
        <option className="sort-option" value="Rate (lower to higher)">
          Rate (lower to higher)
        </option>
      </select>
    </div>
  );
};

export default SortBy;
