import { Link } from "react-router-dom";
import StarsRating from "./StarsRating";

const formatCurrency = (price) => {
  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return price.toLocaleString(undefined, currencyOptions);
};

const ItemCard = ({ product }) => {
  return (
    <div className="item-card">
      <Link
        to={`/shop/${product.category.replace(
          /\s+/g,
          "-"
        )}/${product.title.replace(/\s+/g, "-")}`}
      >
        <img
          className="item-img"
          src={product.image}
          alt={product.description}
        />
      </Link>
      <div className="item-card-attributes">
        <div className="item-title">{`${product.title}`}</div>
        <div className="item-price">${formatCurrency(product.price)}</div>
        <div className="item-card-rating">
          <StarsRating rate={product.rating.rate} />
          <div className="item-card-rate">{`(${product.rating.rate})`}</div>
        </div>

        <div className="item-add-btn">
          <button onClick={product.addItem}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
