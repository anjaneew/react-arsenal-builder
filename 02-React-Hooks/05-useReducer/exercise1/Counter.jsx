import { useReducer, useState } from 'react';
import { initalState, counterReducer } from './counterReducer.jsx'; 

const Counter = () => {

    const [ state, dispatch ] = useReducer(counterReducer, initalState);
    const [ inputValue, setInputValue ] = useState(0);

    const handleIncrement = () => dispatch({ type: "increment" });
    const handleDecrement = () => dispatch({ type: "decrement" });
    const handleReset = () => dispatch({ type: "reset"});

    const handleIncrementByAmount = () => {
        dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
        setInputValue(0);
    }

    const handleDecrementByAmount = () => {
        dispatch({ type: "decrementByAmount", payload: Number(inputValue)});
        setInputValue(0);
    }

  return (
    <div className="flexItem">
        <h1>Exercise 1</h1>
        <h2>{state.count}</h2>
        <button onClick={handleIncrement}>Increment ➕</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement ➖</button>
        <input 
            type="number" 
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
        />
        <button onClick={handleIncrementByAmount}>Add ➕</button>
        <button onClick={handleDecrementByAmount}>Subtract ➖</button>
    </div>
  )
}

export default Counter;