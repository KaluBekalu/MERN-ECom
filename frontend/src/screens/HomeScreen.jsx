import "./HomeScreen.css";
import Product from "../components/Product";

const CartScreen = () => {
  return (
    <div className="homescreen">
      <h2>Latest Products</h2>
      <div className="homescreen__body">
        <div className="homescreen__products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
