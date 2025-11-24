// import Counter from "./components/Counter";
import BakeryProvider from "./context/BakeryContext";
import Kitchen from "./context/Kitchen";

const App = () => {
  return (
    <BakeryProvider>
      <Kitchen/>
    </BakeryProvider>
  );
};

export default App;