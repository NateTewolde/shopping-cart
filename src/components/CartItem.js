import plusSign from "../assets/images/plus.svg";
import minusSign from "../assets/images/minus.svg";
import * as React from "react";

const formatCurrency = (price) => {
  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return price.toLocaleString(undefined, currencyOptions);
};

const CartItem = ({ item, handleInputQuantityChange }) => {
  return (
    <li className="cart-list-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-title">{`${item.title}`}</div>
      <div className="cart-item-price">{`$${formatCurrency(item.price)}`}</div>
      <div className="cart-list-item-btns">
        <img
          src={minusSign}
          alt="Subtract from cart"
          onClick={item.removeItem}
        />
        <span>
          <input
            type="text"
            defaultValue={item.quantity}
            onBlur={handleInputQuantityChange}
            id={item.title}
          ></input>
        </span>
        <img src={plusSign} alt="Add to cart" onClick={item.addItem} />
      </div>
      <div className="cart-list-item-total">
        {`$${formatCurrency(item.sumPrice)}`}
      </div>
    </li>
  );
};

export default CartItem;
