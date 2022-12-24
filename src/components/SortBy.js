import uniqid from "uniqid";

const SortBy = ({ sortProducts }) => {
  const sortOptions = [
    "none",
    "Price (higher to lower)",
    "Price (lower to higher)",
    "Rate (higher to lower)",
    "Rate (lower to higher)",
  ];

  return (
    <div className="sort">
      <label htmlFor="sort-options">Sort by: </label>
      <select id="sort-options" name="sort-options" onChange={sortProducts}>
        {sortOptions.map((sortOption) => (
          <option className="sort-option" value={sortOption} key={uniqid()}>
            {sortOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBy;
