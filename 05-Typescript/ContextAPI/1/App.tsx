"use client";

import MyComponent from "./components/MyComponent";
import { MyContextProvider } from "./context/MyContext";

const App = () => {
  return (
    <>
      <MyContextProvider>
        <MyComponent/>
      </MyContextProvider>
    </>
  );
};

export default App;

//export default function Home() is Next.js syntax