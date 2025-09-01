import { createContext } from 'react';
import Staff from './Staff.jsx';

//instance of (createContext)
export const Food = createContext();
export const Price = createContext();


const KitchenBelt = () => {

    const dish1 = "pork sandwich 🥪";
    const dish1price = 3.99;


    //Provider component
  return (
    <div>KitchenBelt - prepared the dish 🍽️
        <Food.Provider value={dish1}>
            <Price.Provider value={dish1price}>
              <Staff />  
            </Price.Provider>
        </Food.Provider>
    </div>
  );
};

export default KitchenBelt;