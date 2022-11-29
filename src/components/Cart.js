import uniqid from "uniqid";

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

// Takes cart state and returns the total price formatted for currency
const getTotal = (cart) => {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, currencyOptions);
};

const getCartSummary = (cart) => {
  const cartCopy = cart.slice(0);
  const cartSum = [];

  cartCopy.forEach((item) => {
    let itemId = cartSum.findIndex((itemSum) => itemSum.name === item.name);
    if (itemId === -1) {
      cartSum.push({
        name: item.name,
        price: item.price,
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
        <div>Shopping Cart: {cart.length} total items.</div>
        <div>Total: {getTotal(cart)}</div>

        {getCartSummary(cart).map((item) => {
          return (
            <div key={uniqid()}>
              {"name: " +
                item.name +
                ", price: " +
                item.price +
                ", quantity: " +
                item.quantity +
                ", total: " +
                item.sumPrice}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
