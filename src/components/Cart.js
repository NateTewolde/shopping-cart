import uniqid from "uniqid";

const formatCurrency = (price) => {
  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return price.toLocaleString(undefined, currencyOptions);
};

// Takes cart state and returns the total price formatted for currency
const getTotal = (cart) => {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return formatCurrency(total);
};

const getCartSummary = (cart) => {
  const cartCopy = cart.slice(0);
  const cartSum = [];

  cartCopy.forEach((item) => {
    let itemId = cartSum.findIndex((itemSum) => itemSum.title === item.title);
    if (itemId === -1) {
      cartSum.push({
        ...item,
        quantity: 1,
        sumPrice: item.price,
      });
    } else {
      cartSum[itemId].quantity = cartSum[itemId].quantity + 1;
      cartSum[itemId].sumPrice += cartSum[itemId].price;
    }
  });
  return cartSum;
};

const Cart = ({ cart }) => {
  //Adjusts cart when quantity input field is changed
  const handleInputQuantityChange = (e) => {
    let itemCopy = cart.slice(0).find((item) => item.title === e.target.id);
    removeAllFromCart(e.target.id);
    for (let i = 0; i < e.target.value; i++) {
      itemCopy.addItem();
    }
  };

  const removeAllFromCart = (unwantedItem) => {
    cart.forEach((item) => {
      if (item.title === unwantedItem) {
        item.removeItem();
      }
    });
  };

  return (
    <div className="cart">
      <div className="cart-title">Cart</div>
      <div className="cart-list">
        {getCartSummary(cart).map((item) => {
          return (
            <div className="cart-list-item" key={uniqid()}>
              <div className="cart-list-item-desc">
                <div>{`${item.title}`}</div>
                <div>{`${formatCurrency(item.price)}`}</div>
              </div>
              <div className="cart-list-item-btns">
                <button onClick={item.addItem}>+</button>
                <span>
                  <input
                    type="text"
                    defaultValue={item.quantity}
                    onBlur={handleInputQuantityChange}
                    id={item.title}
                  ></input>
                </span>
                <button onClick={item.removeItem}>-</button>
              </div>
              <div className="cart-list-item-total">
                {formatCurrency(item.sumPrice)}
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-totals">
        <div className="cart-items-total">Items: {cart.length}</div>
        <div className="cart-sum-total">Total: {getTotal(cart)}</div>
      </div>
    </div>
  );
};

export default Cart;
