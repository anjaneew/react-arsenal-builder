
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar/>
      </div>
    </Router>
  );
};

export default App;