import React, { useReducer } from "react";
import uniqid from "uniqid";
import Nav from "../components/NavBar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import Cart from "../components/Cart";
import products from "../data";

/*
1. Create Cart component and Product component. When + on product
cart goes up and keeps track of whats in it. 
/shop/cart
*/

// Reducer function to add and remove items from cart state
function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.product];
    case "remove":
      const productIndex = state.findIndex(
        (item) => item.name === action.product.name
      );
      if (productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1);
      return update;
    default:
      return state;
  }
}

const Shop = () => {
  const [cart, setCart] = useReducer(cartReducer, []);

  function add(product) {
    setCart({ product, type: "add" });
  }

  function remove(product) {
    setCart({ product, type: "remove" });
  }

  return (
    <div className="shop-wrapper">
      <Nav />
      <Cart cart={cart} />
      {products.map((product) => {
        return (
          <ItemCard
            key={uniqid()}
            product={product}
            addItem={() => add(product)}
            removeItem={() => remove(product)}
          />
        );
      })}
      <Footer />
    </div>
  );
};
export default Shop;
