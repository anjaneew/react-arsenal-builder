import { useState, useEffect } from 'react';

// useEffect - Dependency List
const Role3 = () => {
  const [value, setValue] = useState(0);

  useEffect(()=> {
    console.log("call useEffect");
    if(value > 0){
      document.title = `Increment (${value})`;
    }
  }, [value]);

  return (
    <div>
      <div className="flexItem">
      <p>3. useEffect - Dependency List</p>
      <h2>{value}</h2>
      <button onClick={()=> setValue(value + 1)}>Click me</button>
      </div>
    </div>
  );
};

export default Role3;