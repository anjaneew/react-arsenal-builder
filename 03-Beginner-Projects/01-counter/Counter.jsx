import { useState } from 'react';

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
    <div>
        <h2>Project 1: </h2>
        <h1>~Counter~</h1>
        <div>
            <h2>{count}</h2>
        </div>
        
        <div>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    </div>
  );
};

export default Counter;