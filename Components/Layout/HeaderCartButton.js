//import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import Classes from "./HeaderCartButton.module.css";
//import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  //const crtCtx = useContext(CartContext);
  //const numberOfCartItems = crtCtx.item.reduce((current, item) => {
  // return current + item.amount;
  //}, 0);
  return (
    <button className={Classes.button} onClick={props.onClick}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Classes.badge}>{3}</span>
    </button>
  );
};
export default HeaderCartButton;
