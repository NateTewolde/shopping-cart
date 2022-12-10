const Filter = ({ filterProducts }) => {
  return (
    <div className="filter">
      <span>Filter by:</span>
      <div className="filter-options"></div>
      <button onClick={filterProducts("price", "descending")}>
        Price (higher to lower)
      </button>
    </div>
  );
};

export default Filter;
