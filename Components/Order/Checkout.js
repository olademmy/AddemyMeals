import React from "react";
import Input from "../Meal/MealItem/Input";

const Checkout = () => {
  return (
    <div>
      <Input label="Name" input={{ id: `{Math.random}`, type: "text" }} />
      <Input label="Address" input={{ id: `{Math.random}`, type: "text" }} />
    </div>
  );
};
export default Checkout;
