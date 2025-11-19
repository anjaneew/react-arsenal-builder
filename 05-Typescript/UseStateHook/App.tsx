import UserProfile from "./components/UserProfile.tsx";
import TodoList from "./components/TodoList.tsx";

const App = () => {
  return (
    <div>
      <h1>UseState Types</h1>
      <UserProfile/>
      <TodoList/>
    </div>
  );
};

export default App;