"use client";

import MyComponent from "./components/MyComponent";
import MyProvider from "./context/MyContext";

const App = () => {
  return (
    <MyProvider>
      <MyComponent/>
    </MyProvider>
  );
};

export default App;