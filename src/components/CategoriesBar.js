const CategoriesBar = ({ categories }) => {
  return (
    <div>
      <ul>
        {categories.map((category) => {
          return (
            <li>
              <a href={`http://localhost:3000/${category}`}>{category}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesBar;
