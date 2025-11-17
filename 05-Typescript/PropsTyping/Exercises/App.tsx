import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <h1>Exercises</h1>
      <Button label="Roadblock" onClick={() => console.log("This course sucks cz he doesn't know how to teach")} disabled={false}/>
    </div>
  );
};

export default App;