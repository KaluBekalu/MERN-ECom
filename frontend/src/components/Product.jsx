import "./Product.css";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <div className="product">
      <img 
        src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
        alt="product name"
      />
      <div className="product__info">
        <p className="info__name">PlayStation 5</p>
        <p className="info__description">
          PlayStation 5 (PS5) is a home video game console developed by Sony
          Interactive Entertainment. Announced in 2019 as the successor to the
          PlayStation 4, the PS5 was released on November 12, 2020 in Ethiopia.
        </p>
        <p className="info_price">$499.99</p>
        <Link to={`/product/${3421}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
