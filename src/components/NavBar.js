import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="home-logo">
        <Link to="/shopping-cart/one-stop">ONE STOP</Link>
      </div>
      <ul>
        <li>
          <Link to="/shopping-cart/one-stop/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
