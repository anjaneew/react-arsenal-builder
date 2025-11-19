"use client";
/*"use client" is for Next.js app router - 
marks this as a client component since it uses React hooks.

The 'use client' directive declares an entry point for the components to be rendered on the client side and should be used when creating interactive user interfaces (UI) that require client-side JavaScript capabilities, such as state management, event handling, and access to browser APIs. This is a React feature.

"use client" is used to declare a boundary between the Server and Client module graphs (trees). Once a file is marked with "use client" , all its imports and child components are considered part of the client bundle. This means you don't need to add the directive to every component that is intended for the client.**/

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