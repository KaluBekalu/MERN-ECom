import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <div className="navcontainer">
      <nav className="navabar">
        <Link to="/" className="navbar_logo">
          <i className="fas fa-shopping-cart"> </i>
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
              <span className="cartlogo__badge">{getCartCount()}</span>
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
