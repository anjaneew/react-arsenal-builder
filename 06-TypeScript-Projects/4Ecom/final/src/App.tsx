import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import TopSellers from "./components/TopSellers";
import PopularBlogs from "./components/PopularBlogs";

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar/>
        <div>
          <Routes>
            <Route path="/" element={<MainContent/>} />
            <Route path="/product/:id" element={<ProductPage/>} />
          </Routes>
          <div>
            <TopSellers />
            <PopularBlogs />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;