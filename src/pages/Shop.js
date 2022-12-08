import uniqid from "uniqid";
import CategoriesBar from "../components/CategoriesBar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";

const Shop = ({ products, categories }) => {
  return (
    <div className="shop-wrapper">
      <CategoriesBar categories={categories} />
      <div className="shop-items">
        {products.map((product) => {
          return <ItemCard key={uniqid()} product={product} />;
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Shop;
