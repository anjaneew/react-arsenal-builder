import Chefs from './Chefs.jsx';

import { createContext } from 'react';

export const Surprise1 = createContext();
export const Surprise2 = createContext();

const Bakery = () => {

  const cake = "Birthday Cake 🎂";
  const singing = "Happy Birthday to you!!!\n Happy Birthday to you!!!\n Happy Birthday dear customer!!!\n Happy Birthday to you!!!";

  return (
    <div>Bakery 🧑‍🍳 🎈🥳
      <Surprise1.Provider value={cake}>
        <Surprise2.Provider value={singing}>
            <Chefs />
        </Surprise2.Provider>
      </Surprise1.Provider>
    </div>
  );
};

export default Bakery;