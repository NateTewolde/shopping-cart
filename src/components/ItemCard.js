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
      <div className="item-title">{`${product.title}`}</div>
      <div className="item-price">${formatCurrency(product.price)}</div>
      <div className="item-add-btn">
        <button onClick={product.addItem}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
