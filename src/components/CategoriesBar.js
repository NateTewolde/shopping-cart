import { Link } from "react-router-dom";

const CategoriesBar = ({ categories }) => {
  return (
    <ul className="categories-bar">
      {categories.map((category) => {
        return (
          <li key={category}>
            <Link to={`/shop/${category.replace(/\s+/g, "-")}`}>
              {category
                .split(" ")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ")}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesBar;
