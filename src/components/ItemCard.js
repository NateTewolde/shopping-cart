import { Link } from "react-router-dom";
import StarsRating from "./StarsRating";
import itemPlusSign from "../assets/images/plus-circle.svg";
import { LazyMotion, domAnimation, m, useCycle } from "framer-motion";

const formatCurrency = (price) => {
  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return price.toLocaleString(undefined, currencyOptions);
};

const variants = {
  open: {
    scale: 1.1,
  },
  closed: {},
};

const ItemCard = ({ product }) => {
  const [hovered, toggleHovered] = useCycle(false, true);

  return (
    <LazyMotion features={domAnimation}>
      <div className="item-card">
        <Link
          to={`/one-stop/shop/${product.category.replace(
            /\s+/g,
            "-"
          )}/${product.title.replace(/\s+/g, "-")}`}
        >
          <m.div
            className="item-card-img"
            initial={false}
            animate={hovered ? "open" : "closed"}
            onMouseEnter={() => toggleHovered()}
            onMouseLeave={() => toggleHovered()}
          >
            <m.img
              className="item-img"
              src={product.image}
              alt={product.description}
              variants={variants}
            />
          </m.div>
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
          <m.img
            onClick={product.addItem}
            src={itemPlusSign}
            alt="Plus sign"
            initial={{ scale: 8 }}
            animate={{ scale: 8 }}
            whileHover={{ scale: 8.5 }}
            whileTap={{ scale: 7.5 }}
          />
        </div>
      </div>
    </LazyMotion>
  );
};

export default ItemCard;
