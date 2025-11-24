import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
//.. = go up one folder level
//. = current folder level

const MyComponent: React.FC = () => {

  const { count, increment, decrement } =  useContext(MyContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;