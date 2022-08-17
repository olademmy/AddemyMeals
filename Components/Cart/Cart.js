import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const isEmpty = cartCtx.items.length === 0;
  const totalAmount = `$${cartCtx.totalAmount}`;
  const itemAddHandler = (item) => cartCtx.addItem({ ...item, amount: 1 });
  const itemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={itemAddHandler.bind(null, item)}
            onRemove={itemRemoveHandler.bind(null, item.id)}
          />
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {!isEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
