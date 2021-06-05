import "../components/CartItemInfo.css";

const CartItemInfo = ({ getCartCount, getCartSubTotal }) => {
  return (
    <div className="cartscreen__info_container">
      <div className="cartscreen__info">
        <p>Subtotal ({getCartCount()}) items</p>
        <p>${getCartSubTotal()}</p>
      </div>
      <div>
        <button>Proceede To Checkout</button>
      </div>
    </div>
  );
};

export default CartItemInfo;
