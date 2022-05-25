import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        { id: 1, name: "IphoneX", amount: 3, price: 5000 },
        //{ id: 2, name: "Ipod5", amount: 2, price: 2500 },
        //{ id: 3, name: "GalaxyS6", amount: 4, price: 6500 },
        //{ id: 4, name: "Ps5", amount: 3, price: 8000 },
      ].map((obj) => (
        <li>{obj.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
