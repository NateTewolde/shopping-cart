import { useState } from "react";
import StarsRating from "../components/StarsRating";

const ItemPage = ({ product }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const handleChange = (e) => {
    setItemQuantity(e.target.value);
    console.log(itemQuantity);
  };

  const addQuantity = () => {
    console.log(itemQuantity);
    for (let i = 0; i < itemQuantity; i++) {
      product.addItem();
    }
  };

  return (
    <div className="item-page-wrapper">
      <img
        className="item-page-img"
        src={product.image}
        alt={product.description}
      />
      <div className="item-page-name">{product.title}</div>
      <div className="item-page-rating">
        <StarsRating rate={product.rating.rate} />
        <div>{`(${product.rating.rate})`}</div>
        <div className="item-page-rating-count">{`${product.rating.count} customer ratings`}</div>
      </div>
      <div className="item-desc">{product.description}</div>
      <div className="item-page-add">
        <input
          id="item-quantity"
          onChange={handleChange}
          type="number"
          min={1}
          value={itemQuantity}
        ></input>
        <button onClick={addQuantity}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemPage;
