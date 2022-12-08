import { Link } from "react-router-dom";

const CategoriesBar = ({ categories }) => {
  return (
    <div>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category}>
              <Link to={`/shop/${category.replace(/\s+/g, "-")}`}>
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesBar;
