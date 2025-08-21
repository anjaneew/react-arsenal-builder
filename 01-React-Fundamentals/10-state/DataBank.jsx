import { useState } from 'react';
import Storage from './Storage.jsx';

const DataBank = () => {

    //5.1 method - function to set inital value - only run in initial render:
    const [ packages, setPackages ] = useState(()=> {
        const initalPackages = 100;
        return initalPackages;
    });

    const handlePackagePurchase = () => setPackages((p) => p - 1);

    //5.2 method - function on click and on load

    const [dice, setDice] = useState(()=> (Math.floor(Math.random() * 6) + 1 ));

    const handleDice = () => {
        const newDice = (Math.floor(Math.random() * 6) + 1);
        setDice(newDice);
    }

  return (
    <div className="container">
        <div>
        <h2>~ Example 5 ~</h2>
        <h1>DataBank</h1>
        <h3>Method #1</h3>
        <h2>Packages available {packages}</h2>
        <button onClick={handlePackagePurchase}>Add to Cart 🛒</button>
        <br/>
        <h3>Method #2</h3>
        <h1>DiceRoll:{dice}</h1>
        <button onClick={handleDice}>Roll Dice 🎲</button>
        <h3>Method #3</h3>
        <Storage />
        </div>
        
    </div>
  )
}

export default DataBank;