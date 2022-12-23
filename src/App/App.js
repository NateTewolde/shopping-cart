import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useReducer, useState } from "react";
import { getAllProducts, getAllCategories } from "../data";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ItemPage from "../pages/ItemPage";
import About from "../pages/About";
import Cart from "../components/Cart";
import NavBar from "../components/NavBar";
import uniqid from "uniqid";
import "./App.css";

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
1. ability to filter by rating and by price
2. product page when the image is clicked on 
    with more info like the desc

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
    <div id="wrapper">
      <BrowserRouter>
        <header>
          <NavBar />
          <Cart shopCart={shopCart} />
        </header>

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
          {products.map((product) => {
            return (
              <Route
                key={uniqid()}
                path={`/shop/${product.category.replace(
                  /\s+/g,
                  "-"
                )}/${product.title.replace(/\s+/g, "-")}`}
                element={<ItemPage product={product} />}
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
