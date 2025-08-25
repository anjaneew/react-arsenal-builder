import { useState } from 'react';
import './MyStyles.css';

const BasicCounter = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = (e) => {
        setCount(c => c + 1);
        e.target.style.backgroundColor = "#74e8a2";
    }    

    const handleReset = (e) => {
        setCount(0);
        e.target.style.backgroundColor = "#74e0e8";
    } 


    const handleDecrement = (e) => {
        setCount(c => c - 1);
        e.target.style.backgroundColor = "#d9746c";
    } 

    return(
        <div className="container">
            <div className="flexItem">
            <h2>~Example 1~</h2>
            <h1>Basic Counter</h1>
            <h1>{count}</h1>
            <button className={"big"} onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>Reset</button>
            <button className={"big"} onClick={handleDecrement}>-</button> 
        </div>

        </div>
    );
}

export default BasicCounter;