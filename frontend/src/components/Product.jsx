import "./Product.css";
import { Link } from "react-router-dom";
const Product = ({ imageUrl, name, description, price, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt="product name" />
      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description.substring(0, 100)}...</p>
        <p className="info_price">${price}</p>
        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
