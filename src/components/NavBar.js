import { Link } from "react-router-dom";
import stopSign from "../assets/images/stop-sign.svg";

const NavBar = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">
            <div className="home-logo">
              <img src={stopSign} alt="stop sign" />
              <div className="logo-text">ONE</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
