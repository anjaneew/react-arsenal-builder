import { useState, useEffect } from 'react';

const Role2 = () => {
    //useEffect - Conditional
    const [value, setValue] = useState(0);
    useEffect(()=> {
        console.log("call useEffect");
        if(value > 0){
            document.title = `Increment (${value})`;
        }
    });

  return (
    <div>
      <div className="flexItem">
        <p>2. useEffect - Conditional</p>
        <h2>{value}</h2>
        <button onClick={()=> setValue(value + 1)}>Click me</button>
      </div>
    </div>
  );
};

export default Role2;