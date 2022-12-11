const Filter = ({ filterProducts }) => {
  return (
    <div className="filter">
      <span>Filter by</span>
      <div className="filter-options">
        <div className="filter-choice">
          <label htmlFor="price-descending">Price (higher to lower)</label>
          <input
            type="radio"
            name="filter-option"
            title="price"
            value="descending"
            onClick={filterProducts}
          />
        </div>
        <div className="filter-choice">
          <label htmlFor="price-ascending">Price (lower to higher)</label>
          <input
            type="radio"
            name="filter-option"
            title="price"
            value="ascending"
            onClick={filterProducts}
          />
        </div>
        <div className="filter-choice">
          <label htmlFor="rate-descending">Rate (higher to lower)</label>
          <input
            type="radio"
            name="filter-option"
            title="rate"
            value="descending"
            onClick={filterProducts}
          />
        </div>
        <div className="filter-choice">
          <label htmlFor="rate-ascending">Rate (lower to higher)</label>
          <input
            type="radio"
            name="filter-option"
            title="rate"
            value="ascending"
            onClick={filterProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
