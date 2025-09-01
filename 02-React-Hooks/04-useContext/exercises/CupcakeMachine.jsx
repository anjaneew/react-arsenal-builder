import { createContext, useState } from 'react';

// Create a Context
const CupcakeContext = createContext();

//Creat a provider component
const CupcakeMachineProvider = ({ children }) => {

  const [ flavor, setFlavor ] = useState({ flavor: "Vanilla"});

  const updateFlavor = (newFlavor) => {
    setFlavor({ flavor: newFlavor });
  };

  return (
    <CupcakeContext.Provider value={{ flavor, updateFlavor}}>
      {children}
    </CupcakeContext.Provider>
  );
};

export { CupcakeContext, CupcakeMachineProvider};