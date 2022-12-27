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
    <div className="item-page-wrapper content-wrapper">
      <div className="item-page-img-container">
        <img src={product.image} alt={product.description} />
      </div>

      <div className="item-page-attributes">
        <div className="item-page-category">{product.category}</div>
        <div className="item-page-name">{product.title}</div>
        <div className="item-page-rating">
          <StarsRating rate={product.rating.rate} />
          <div className="item-page-rate">{`(${product.rating.rate})`}</div>
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
          <div className="item-page-price">{product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
