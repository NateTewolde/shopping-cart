import { useEffect, useState } from "react";
import uniqid from "uniqid";
import CategoriesBar from "../components/CategoriesBar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import SortBy from "../components/SortBy";

const getSortedBy = (products, sort) => {
  if (sort === "Rate (lower to higher)") {
    return products.sort((a, b) => (a.rating.rate > b.rating.rate ? 1 : -1));
  }
  if (sort === "Rate (higher to lower)") {
    return products.sort((a, b) => (a.rating.rate < b.rating.rate ? 1 : -1));
  }
  if (sort === "Price (lower to higher)") {
    return products.sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  if (sort === "Price (higher to lower)") {
    return products.sort((a, b) => (a.price < b.price ? 1 : -1));
  }
};

const getCategoryItems = (products, category) => {
  return products.filter((product) => product.category === category);
};

const Shop = ({ products, categories, category }) => {
  const [shopProducts, setShopProducts] = useState([]);

  useEffect(() => {
    if (category !== undefined) {
      setShopProducts(getCategoryItems(products, category));
    } else {
      setShopProducts(products.slice(0));
    }
  }, [category, products]);

  const sortProducts = (e) => {
    setShopProducts(getSortedBy(shopProducts.slice(0), e.target.value));
  };

  return (
    <div className="shop-wrapper">
      <CategoriesBar categories={categories} />
      <SortBy sortProducts={(e) => sortProducts(e)} />
      <div className="shop-items">
        {shopProducts.map((product) => {
          return <ItemCard key={uniqid()} product={product} />;
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Shop;
