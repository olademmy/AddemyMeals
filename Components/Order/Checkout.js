import React from "react";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartItem from "../Cart/CartItem";
import Input from "../Meal/MealItem/Input";
import Modal from "../UI/Modal";
import Address from "./Address";
import classes from "./Checkout.module.css";
import CheckoutItem from "./CheckoutItem";

const Checkout = () => {
  const crtCtxt = useContext(CartContext);
  const cartItems = (
    <ul className={classes.items}>
      {crtCtxt.items.map((item) => (
        <li>
          <CheckoutItem
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      <div>{cartItems}</div>
      <div className={classes.sumreport}>
        <div>Total Amount</div>
        <div>{crtCtxt.totalAmount}</div>
      </div>
      <div>
        <Input label="Name" input={{ id: `{Math.random}`, type: "text" }} />
        <Address
          label="Address"
          input={{ id: "Address", name: "Address", rows: "4", cols: "50" }}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </Modal>
  );
};
export default Checkout;
