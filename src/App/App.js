import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useReducer, useState } from "react";
import { getAllProducts, getAllCategories } from "../data";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Cart from "../components/Cart";
import "./App.css";
import NavBar from "../components/NavBar";
import uniqid from "uniqid";

// Reducer function to add and remove items from shopCart state
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

const App = () => {
  const [shopCart, setShopCart] = useReducer(cartReducer, []);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  //Handles mounting asynchronous product data
  useEffect(() => {
    getAllProducts().then((productsArr) => {
      productsArr.forEach((product) => {
        product.addItem = () => add(product);
        product.removeItem = () => remove(product);
      });

      setProducts(productsArr);
    });
  }, []);

  //Handles mounting asynchronous category data
  useEffect(() => {
    getAllCategories().then((categoriesArr) => setCategories(categoriesArr));
  }, []);

  const add = (product) => {
    setShopCart({ product, type: "add" });
  };

  const remove = (product) => {
    setShopCart({ product, type: "remove" });
  };

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Cart shopCart={shopCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop products={products} categories={categories} />}
          />
          {categories.map((category) => {
            return (
              <Route
                key={uniqid()}
                path={`/shop/${category.replace(/\s+/g, "-")}`}
                element={
                  <Shop
                    products={products}
                    categories={categories}
                    category={category}
                  />
                }
              />
            );
          })}

          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
