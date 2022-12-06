import React, { useEffect, useReducer, useState } from "react";
import uniqid from "uniqid";
import Nav from "../components/NavBar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import Cart from "../components/Cart";
import getProducts from "../data";

// Reducer function to add and remove items from cart state
function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.product];
    case "remove":
      const productIndex = state.findIndex(
        (item) => item.title === action.product.title
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

/* 
next steps: add input field for quantity amount, then add categories,
then the ability to filter by rating and by price. 
*/

const Shop = () => {
  const [cart, setCart] = useReducer(cartReducer, []);
  const [products, setProducts] = useState([]);

  //Handles mounting asynchronous product data
  useEffect(() => {
    getProducts().then((productsArr) => setProducts(productsArr));
  }, []);

  const add = (product) => {
    setCart({ product, type: "add" });
  };

  const remove = (product) => {
    setCart({ product, type: "remove" });
  };

  return (
    <div className="shop-wrapper">
      <Nav />
      <Cart cart={cart} />
      <div className="shop-items">
        {products.map((product) => {
          product.addItem = () => add(product);
          product.removeItem = () => remove(product);
          return <ItemCard key={uniqid()} product={product} />;
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Shop;
