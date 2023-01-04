import { Link } from "react-router-dom";

const CategoriesBar = ({ categories, currentCategory }) => {
  return (
    <ul className="categories-bar">
      {categories.map((category) => {
        return (
          <li
            key={category}
            className={
              category === currentCategory ? "current-category" : "category"
            }
          >
            <Link to={`/one-stop/shop/${category.replace(/\s+/g, "-")}`}>
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
