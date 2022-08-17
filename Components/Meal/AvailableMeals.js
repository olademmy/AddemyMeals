import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Amala & Gbegiri",
    description: "Yam Flour with local beans soup",
    price: 25,
  },
  {
    id: "m2",
    name: "Jollof Rice",
    description: "Nigerian Rice cuisine",
    price: 30,
  },
  {
    id: "m3",
    name: "Chicken Suya",
    description: "Nigerian, Spicy, Chicken, Barbecue",
    price: 40,
  },
  {
    id: "m4",
    name: "Vegetable Salad ",
    description: "Fresh, Healthy...and green...",
    price: 20,
  },
];
const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
