import axios from 'axios';
import {useState, useEffect } from 'react';
import './styles.css';

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(()=> {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
      .then(res => {
        console.log(res.data.meals);
        setItems(res.data.meals)
      }).catch(err => {
        console.log(err);
      });
  }, []);

  const itemsList = items.map(({strMeal, strMealThumb, idMeal}) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <div>
      <h3>Desserts</h3>
      <div className="items-container">
        {itemsList}
      </div>
    </div>
  );
};

export default Meals;