import useFetch from './useFetch.jsx';
import './styles.css';

//Old school use of fetch using customhook
const Meals1 = () => {
    const {data, loading, error } = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;
    if(!data.meals) return <p>Data not found</p>;

    const itemslist = data.meals.map(({strMeal, strMealThumb, idMeal }) => {
        return (
            <section className="card">
              <img src={strMealThumb} /> 
              <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section> 
            </section>
        );
    });

  return <div className="items-container">
    <h3>Meals 1 using custom useFetch hook</h3>
     {itemslist} 
     </div>;
};

export default Meals1;