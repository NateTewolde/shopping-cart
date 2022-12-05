const formatCurrency = (price) => {
  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return price.toLocaleString(undefined, currencyOptions);
};

const ItemCard = ({ product, addItem, removeItem }) => {
  return (
    <div className="item-card">
      <p>{`${product.title}: ${formatCurrency(product.price)}`}</p>
      <div className="item-btns">
        <button onClick={product.addItem}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
