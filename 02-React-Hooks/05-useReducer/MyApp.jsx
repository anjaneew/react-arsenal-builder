import './MyStyles.css';
import MyComponent from './MyComponent.jsx';
import LearnReducer from './LearnReducer.jsx';
import Counter from './exercise1/Counter.jsx';
import ShoppingCart from './myexercise/ShoppingCart.jsx';


const MyApp = () => {

    return(
        <div className="container">
            <h1>useReduce Hook: </h1>
            <div className="flexItem">
                <MyComponent />
                <LearnReducer />
                <Counter />
                <ShoppingCart />
            </div>
        </div>
    );
}

export default MyApp;