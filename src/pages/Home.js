import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-wrapper content-wrapper">
      <div className="home-content">
        <div className="home-slogan">Your One Stop Shop</div>
        <div className="home-description">Trendy. Affordable. Convenient.</div>
        <div className="home-shop-now-button">
          <button>
            <Link to="/shop">Shop</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
