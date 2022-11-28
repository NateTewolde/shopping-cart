const ItemCard = ({ product, addItem, removeItem }) => {
  return (
    <div className="item-card">
      <p>{product.name + ":" + product.price}</p>
      <div className="item-btns">
        <button onClick={addItem}>add</button>
        <button onClick={removeItem}>subtract</button>
      </div>
    </div>
  );
};

export default ItemCard;
