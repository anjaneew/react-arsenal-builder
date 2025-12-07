import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar/>
        <div>
          <Routes>
            <Route path="/" element={<MainContent/>}/>
      
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;