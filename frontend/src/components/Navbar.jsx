import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ click }) => {
  return (
    <div className="navcontainer">
      <nav className="navabar">
        <Link to="/" className="navbar_logo">
          <i class="fas fa-shopping-cart"> </i>
          <h2>MERN Shopping Cart</h2>
        </Link>

        <ul className="navbar_links">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link className="cart__link" to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span>Cart</span>
              <span className="cartlogo__badge">0</span>
            </Link>
          </li>
        </ul>

        <div className="hamburger__menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
