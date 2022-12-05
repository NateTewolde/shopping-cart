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
    let itemId = cartSum.findIndex((itemSum) => itemSum.name === item.name);
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
  return (
    <div className="cart">
      <div>cart</div>
      <div className="cart-list">
        {getCartSummary(cart).map((item) => {
          return (
            <div key={uniqid()}>
              {`${item.name} ${item.emoji}: ${formatCurrency(item.price)}`}
              <button onClick={item.addItem}>add</button>
              <span>{item.quantity}</span>
              <button onClick={item.removeItem}>subtract</button>
              <span>{formatCurrency(item.sumPrice)}</span>
            </div>
          );
        })}
        <div>Shopping Cart: {cart.length} total items.</div>
        <div>Total: {getTotal(cart)}</div>
      </div>
    </div>
  );
};

export default Cart;
