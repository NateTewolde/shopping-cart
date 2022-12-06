import React, { useEffect, useReducer, useState } from "react";
import uniqid from "uniqid";
import Nav from "../components/NavBar";
import CategoriesBar from "../components/CategoriesBar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import Cart from "../components/Cart";
import { getAllProducts, getAllCategories } from "../data";

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
next steps:  
1. add categories with routers
2. ability to filter by rating and by price
3. product page when the image is clicked on

last. style -> make home in nav a logo, make cart a dropdown, 
add item quantity next to cart image,
maybe add an error page when card checkout is clicked.
*/

const Shop = () => {
  const [cart, setCart] = useReducer(cartReducer, []);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  //Handles mounting asynchronous product data
  useEffect(() => {
    getAllProducts().then((productsArr) => setProducts(productsArr));
    getAllCategories().then((categoriesArr) => setCategories(categoriesArr));
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
      <CategoriesBar categories={categories} />
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
