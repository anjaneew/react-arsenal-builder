import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function Home(){
  return <h1>Home Page</h1>
}

function About(){
  return <h1>About us</h1>
}

function Contact(){
  return <h1>Contact us</h1>
}

const App = () => {
  return (
    <BrowserRouter>
      <>
      <h1>App</h1>

      {/*Navigation */}
      <nav>
        <Link to="/">Home</Link>|{" "}
        <Link to="/about">About us</Link>|{" "}
        <Link to="/contact">Contact</Link>|{" "}
      </nav>

      {/*Routes*/}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;