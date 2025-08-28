import { useState, useEffect } from 'react';

//1. Without the empty array
const Role1 = () => {

  const [value, setValue] = useState(0);
  
  useEffect(()=> {
    console.log("call useEffect");
    document.title = `Increment (${value})`;
  })

  return (
    <div>
      <div className="flexItem">
        <p>1. Without the empty array</p>
        <h2>{value}</h2>
        <button onClick={()=> setValue(value + 1)}>Click me</button>
      </div>
    </div>
  );
};

export default Role1;