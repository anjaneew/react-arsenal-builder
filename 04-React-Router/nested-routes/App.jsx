import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './components/styles.css';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Fiction from './components/books/Fiction.jsx';
import NonFiction from './components/books/NonFiction.jsx';

function Books(){
  return(
    <div>
      <p>📚📔📕📗📘📙📑🔖📖🔖🧾</p>
      <h1>Books</h1>
      <nav>
        <Link to="/books/fiction">Fiction</Link>|{" "}
        <Link to="/books/nonfiction">Non-Fiction</Link>
      </nav>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <>
      <h1>~~BookHaven~~</h1>
      {/*Navigation */}
      <nav>
        <Link to="/">Home</Link>|{" "}
        <Link to="/about">About us</Link>|{" "}
        <Link to="/contact">Contact</Link>|{" "}
        <Link to="/books">Books</Link>
      </nav>

      {/*Routes*/}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/books" element={<Books />}>
          <Route path="fiction" element={<Fiction/>}/>
          <Route path="nonfiction" element={<NonFiction/>}/>
        </Route>
      </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;