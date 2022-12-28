import { Link } from "react-router-dom";
import StarsRating from "./StarsRating";
import itemPlusSign from "../assets/images/plus-circle.svg";

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
        to={`/one-stop/shop/${product.category.replace(
          /\s+/g,
          "-"
        )}/${product.title.replace(/\s+/g, "-")}`}
      >
        <div className="item-card-img">
          <img
            className="item-img"
            src={product.image}
            alt={product.description}
          />
        </div>
      </Link>
      <div className="item-card-attributes">
        <div className="item-title">
          <Link
            to={`/one-stop/shop/${product.category.replace(
              /\s+/g,
              "-"
            )}/${product.title.replace(/\s+/g, "-")}`}
          >{`${product.title}`}</Link>
        </div>
        <div className="item-card-rating">
          <StarsRating rate={product.rating.rate} />
          <div className="item-card-rate">{`(${product.rating.rate})`}</div>
        </div>
        <div className="item-price">${formatCurrency(product.price)}</div>
        <img onClick={product.addItem} src={itemPlusSign} alt="Plus sign" />
      </div>
    </div>
  );
};

export default ItemCard;
