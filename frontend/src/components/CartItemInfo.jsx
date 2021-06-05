import '../components/CartItemInfo.css'

const CartItemInfo = () => {
  return (
    <div className="cartscreen__info_container">
      <div className="cartscreen__info">
        <p>Subtitle (0)</p>
        <p>Price $499.99</p>
      </div>
      <div>
        <button>Proceede To Checkout</button>
      </div>
    </div>
  );
};

export default CartItemInfo;
