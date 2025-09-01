import { useState, useEffect } from 'react';

const CounterEffect = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(c => c + 1);
    };

    useEffect(()=>{

      document.title = `Count is ${count}`;
        // document.getElementById("title").textContent = `Count is ${count}`;
    }, [count]);

  return (
    <>
        <h1 id="title"></h1>
        <div>CounterEffect</div>
        <span>{count}</span>
    <button onClick={handleIncrement}>+</button>
    </>
  );
};

export default CounterEffect;