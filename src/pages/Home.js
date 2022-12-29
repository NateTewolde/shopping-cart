import { Link } from "react-router-dom";
import { LazyMotion, domAnimation, m } from "framer-motion";

const Home = () => {
  return (
    <div className="home-wrapper content-wrapper">
      <div className="home-content">
        <div className="home-slogan">Your One Stop Shop</div>
        <div className="home-description">Trendy. Affordable. Convenient.</div>
        <div className="home-shop-now-button">
          <LazyMotion features={domAnimation}>
            <m.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/one-stop/shop">Shop</Link>
            </m.button>
          </LazyMotion>
        </div>
      </div>
    </div>
  );
};
export default Home;
