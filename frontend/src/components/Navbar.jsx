import "./Navbar.css";
import { Link, BrowserRoute as Router } from "react-router-dom";

const Navbar = ({ click }) => {
  return (
    <nav className="navabar">
      <div className="navbar_logo">
        <h2>MERN Shopping Cart</h2>
      </div>

      <ul className="navbar_links">
        <li>
          <Link className="cart__link" to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
