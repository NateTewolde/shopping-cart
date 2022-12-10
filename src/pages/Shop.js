import { useEffect, useState } from "react";
import uniqid from "uniqid";
import CategoriesBar from "../components/CategoriesBar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import Filter from "../components/Filter";

const getFilteredBy = (products, filter, direction) => {
  if (filter === "rate" && direction === "ascending") {
    return products.sort((a, b) => (a.rating.rate > b.rating.rate ? 1 : -1));
  }
  if (filter === "rate" && direction === "descending") {
    return products.sort((a, b) => (a.rating.rate < b.rating.rate ? 1 : -1));
  }
  if (filter === "price" && direction === "ascending") {
    return products.sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  if (filter === "price" && direction === "descending") {
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

  const filterProducts = (filter, direction) => {
    setShopProducts(getFilteredBy(products.slice(0), filter, direction));
  };

  return (
    <div className="shop-wrapper">
      <CategoriesBar categories={categories} />

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
