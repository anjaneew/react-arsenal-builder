import { useState } from 'react';
import './styles.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(c => c + 1);
    };

    const handleDecrease = () => {
        setCount(c => c - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

  return (
    <div className="box">
        <div>
            <h2>Project 1: </h2>
            <h1>~Counter~</h1>
        </div>

        <div className="container">
            <h2 className="number">{count}</h2>
        </div>
        
        <div className="container btns-container">
            <button onClick={handleDecrease} className="btn">-</button>  
            <button onClick={handleReset} className="btn">Reset</button>
            <button onClick={handleIncrease} className="btn">+</button>
            
        </div>
    </div>
  );
};

export default Counter;