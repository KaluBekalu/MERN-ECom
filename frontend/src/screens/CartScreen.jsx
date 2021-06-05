import CartItem from "../components/CartItem";
import CartItemInfo from "../components/CartItemInfo";
import("./CartScreen.css");

const CartScreen = () => {
  return (
    <div className="cartscreen">
      <h2>Shopping Cart</h2>
      <div className="cartbody">
        <div className="cartbody__left">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cartbody__right">
          <CartItemInfo/>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
