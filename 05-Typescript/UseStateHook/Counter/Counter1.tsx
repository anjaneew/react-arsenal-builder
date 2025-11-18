"use client";
/*"use client" is for Next.js app router - 
marks this as a client component since it uses React hooks.**/

import { useState } from 'react';

const Counter1 = () => {

    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount( c => c + 1);
    };

    const reset = () => {setCount(0)};

    const decrement = () => {
        setCount( c => c - 1);
    };

  return (
    <div>
        <h1>Counter version 1</h1>
        <h2> Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter1;