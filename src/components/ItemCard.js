const ItemCard = ({ product, addItem, removeItem }) => {
  return (
    <div className="item-card">
      <p>{product.name + ":" + product.price}</p>
      <div className="item-btns">
        <button onClick={product.addItem}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
