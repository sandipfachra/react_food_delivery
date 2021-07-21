import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Vada Pav',
    description: 'Finest and testy',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Sandwich',
    description: 'Sweet and Tested',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Pizza',
    description: 'Hot and Testy',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Pav Bhaji',
    description: "Using lot's of butter",
    price: 25.00,

  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;