import { useState } from "react";
import uniqid from "uniqid";

const SortBy = ({ sortProducts }) => {
  const sortOptions = [
    "",
    "Price (higher to lower)",
    "Price (lower to higher)",
    "Rate (higher to lower)",
    "Rate (lower to higher)",
  ];

  const [selectValue, setSelectValue] = useState("");

  const handleChange = (e) => {
    // if (e.target.value === "") {
    //   return -1;
    // }
    setSelectValue(e.target.value);
    sortProducts(e);
  };

  return (
    <div className="sort">
      <label htmlFor="sort-options">Sort by: </label>
      <select
        value={selectValue}
        id="sort-options"
        name="sort-options"
        onChange={handleChange}
      >
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
