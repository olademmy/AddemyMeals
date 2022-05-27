import Input from "./Input";
import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const amountInputref = useRef();
  const [isValid, setIsvalid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputref.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsvalid(false);
      return;
    }
    props.onEnterAmount(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputref}
        label="Amount"
        input={{
          id: "Amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!isValid && (
        <p>Invalid Input, please enter a valid amount from 1 to 5</p>
      )}
    </form>
  );
};
export default MealItemForm;
