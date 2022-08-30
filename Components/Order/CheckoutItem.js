import React from "react";
import classes from "./CheckoutItem.module.css";
const CheckoutItem = (props) => {
  return (
    <div className={classes.items}>
      <div>{props.name}</div>
      <div className={classes.summary}>
        <div>{props.price}</div>
        <div>{props.amount}</div>
      </div>
    </div>
  );
};
export default CheckoutItem;
