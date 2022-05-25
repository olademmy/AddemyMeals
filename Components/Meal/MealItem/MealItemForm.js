import Input from "./Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const item = {
    id: "Amount_" + props.id,
    type: "number",
    label: "Amount",
    min: "1",
    max: "5",
    step: "0.1",
    defaultValue: "1",
  };
  return (
    <form className={classes.form}>
      <Input input={item} />
      <button>+Add</button>
    </form>
  );
};
export default MealItemForm;
