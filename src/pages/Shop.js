import { useEffect, useState } from "react";
import uniqid from "uniqid";
import CategoriesBar from "../components/CategoriesBar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";

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
