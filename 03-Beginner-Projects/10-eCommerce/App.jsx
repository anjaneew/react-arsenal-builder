import { useState } from 'react';

import Navigation from './components/navigation/Nav.jsx';
import Product from './components/products/Product.jsx';
import products from './db/data.jsx';
import Recommended from './components/recommended/Recommended.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Card from './components/Card.jsx';
import './index.css'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //--------------Input Filter------------------
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //--------------Radio Filtering------------------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  //--------------Button Filtering------------------ 
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  }

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) => 
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }, index) => (
        <Card 
          key={index}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
    <h2>React Monster</h2>
    <h2>Project 10</h2>
    <h1>~E-Commerce Website~</h1>
    <Sidebar handleChange={handleChange} />
    <Navigation query={query} handleInputChange={handleInputChange} />
    <Recommended handleClick={handleClick} />
    <Product  result={result} />
    </>
  );
};

export default App;
