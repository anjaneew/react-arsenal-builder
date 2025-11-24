import { createContext, useState, type ReactNode, type FC } from "react";

// Step 1: Create a context
interface MyContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const MyContext = createContext<MyContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

// Step 2: Create a provider component
interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( c => c + 1);
  }

  const decrement = () => {
    setCount( c => c - 1);
  }

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;

/**
 * Context API needs 2 things:
 * 
 * MyContext = the "data channel" (like a radio frequency)
 * MyProvider = wraps your app, puts data into the channel
 * MyComponent = tunes into the channel with 
 * useContext(MyContext) to get data
 * 
 * Why both?
 * Provider goes in App.tsx (wraps everything)
 * Context goes in components (to read data)
 * 
 * Think: 
 * Provider = broadcaster, 
 * Context = radio station, 
 * Components = listeners
*/