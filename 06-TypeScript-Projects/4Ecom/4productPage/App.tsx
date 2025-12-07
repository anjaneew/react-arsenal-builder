import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar/>
        <div>
          <Routes>
            <Route path="/" element={<MainContent/>}/>
            <Route path="/product/:id" element={<ProductPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;