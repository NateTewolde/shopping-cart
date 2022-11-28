const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

// Takes cart state and returns the total price formatted for currency
const getTotal = (cart) => {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, currencyOptions);
};

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <div>cart</div>
      <div className="cart-list">
        <div>Shopping Cart: {cart.length} total items.</div>
        <div>Total: {getTotal(cart)}</div>
        {cart.map((item) => {
          return <div>{item.name + ": " + item.price}</div>;
        })}
      </div>
    </div>
  );
};

export default Cart;
