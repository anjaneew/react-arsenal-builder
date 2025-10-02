import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import './components/styles.css';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Fiction from './components/books/Fiction.jsx';
import NonFiction from './components/books/NonFiction.jsx';


//style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive? 'bold' : 'normal',
  padding: '5px 10px'
});

function Books(){
  return(
    <div>
      <p>📚📔📕📗📘📙📑🔖📖🔖🧾</p>
      <h1>Books</h1>
      <nav>
        <NavLink to="/books/fiction">Fiction</NavLink>|{" "}
        <NavLink to="/books/nonfiction">Non-Fiction</NavLink>
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
      {/*Navigation with NavLink for active styling*/}
      <nav style={{marginBottom: '20px'}}>
        <NavLink to="/" style={navLinkStyles}>Home</NavLink>|{" "}
        <NavLink to="/about" style={navLinkStyles}>About us</NavLink>|{" "}
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>|{" "}
        <NavLink to="/books" style={navLinkStyles}>Books</NavLink>
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