# React-Arsenal-Builder

## 01 React Fundamentals

### 01 Basic Syntax 
* function expressions
* arrow functions
* registering the component
* importing the component
* calling the component
  * with parantheses when wrapper elements  - multi-lined jsx
  * single jsx element

### 02 Website Components
 * JSX format
 * Header
 * Main
 * Footer

 ### 03 JSX Rules
* return single parent element
* all tags must be closed
* camelCase
* class > className
* forms - for > htmlFor 
* Expressions in JSX
    * inside `{}`
    * can be used to run js 
    * variables, functions 

### 04 Lists
* rendered with loops
* `map()` method recommended
* Note: 1:
within the return expression, inside callback functions, we do not use `{}`

 ex: `{users.map(()=> ( HERE ))}`
 instead of     `() => {} ` 

 * Note: 2:

object destructring:
`{users.map((id, name, age)=> {id} {name}{age})}`

instead of 
` {users.map((user)=> {user.id} {user.name}{user.age})}`
  
### 05 Props
* allows parent component to pass on data to child components
* `(props) > {props.name}`
* `({img, name}) > {img, name}`
* booleans - conditional rendering
   `<p>Marrital Status: {isMarried ? "married" : "single"}</p>`

### 06 Children Props
* `const ChildA = (props) => {`
  `return (<div>{props.children}</div>);`
  `}`
* using destructring `{children}`

### 07 Conditional Rendering
* JSX stored in variables
  `const valid = <p>Welcome to chat room!</p>;`
* JSX  Components as functions
  `const ValidPassword = () => <p>Hello! Welcome to my channel.</p>;`
* &&
`{items.length > 0 && <h5>You have {items.length} items in your cart.</h5>}`
* Ternary Operator
`const MyPassword = ({ correct }) => correct? <CorrectPW /> : <WrongPW />;` 

### 08 Styles
* Inline - 2 methods:
* use double `{}` and camelCase ex: `<p style={{backgroundColor: "red"}}></p>`
* use JSX varaiable ex: `const myStyles = {color: "white"}` then `<p style={myStyles}></p>`
* using React Icons : 
* `https://react-icons.github.io/react-icons/` > 
* `npm install react-icons --save` >
* import the icon in file: `import { PiBirdBold } from "react-icons/pi";` >
* use icon as a component: `<PiBirdBold />`

### 09 Events
* camelCase `onClick` instead of `onclick`.
* written in curly braces `onClick={shoot}` 
* method 1: BEST `<button onClick={shoot}>Take the Shot!</button>` 
and defining function seperately. 
* method 2: passig argument using arrow function `<button onClick={() => console.log("Goal!")}>`
* method 3: using react event object  
  * ` <button onClick={(event) => shoot("Goal!", event)}>` 
  
##### FYI: Common Events:
* Mouse Events:
  * onClick
  * onDoubleClick
  * onMouseOver / onMouseEnter
  * onMouseOut / onMouseLeave

* Form Events:
  * onChange (for inputs, selects, textareas)
  * onSubmit
  * onFocus
  * onBlur

* Keyboard Events:
  * onKeyDown
  * onKeyUp
  * onKeyPress

* Other Common Ones:
  * onCopy, onCut, onPaste
  * onLoad, onError (for images)  

### 10 UseStateHook
* `import { useState } from "react";`
* ` const [count, setCount] = useState(0);`
* `const increment = () => setCount(count + 1);`
* ` <button onClick={increment}>+</button>`
* useState with a string, array, objects, array of objects
* useState with an object

### 11 Portals
* Steps to create:
  1. in index.html - `<div id="portal-root"></div>`
  2. in new jsx file - `import ReactDOM from 'react-dom';`
  3. return rendering changes from 
      ` return (<div>PortalsLesson</div>);` to 
      ` ReactDOM.createPortal(child, container).`
      ex: `return ReactDOM.createPortal(`
            `<div>PortalsLesson</div>,`
            `document.getElementById("portal-root")`
          `);`

### 12 Keys
* keys in the context of lists - to track the updates specifically
* keys to force component remounting
  * The input field gets completely reset when you click "Switch"
  * Any text you typed in the input will disappear
  *  React is saying "this is a different input now, not the same one"


## 02 React Hooks

### 01 useState (same as 01.10)
* `import { useState } from "react";`
* ` const [count, setCount] = useState(0);`
* `const increment = () => setCount(count + 1);`
* ` <button onClick={increment}>+</button>`
* useState with a string, array, objects, array of objects
* useState with an object

### 02 useEffect
* `import { useEffect, useState } from "react";`
* `useEffect(function, [dependencies]): `
  1. `useEffect(() => {})` Runs after every re-render 
  2. `useEffect(() => {}, [])` Runs only on mount 
  3. `useEffect(() => {}, [value])` Runs on mount + when value changes

* Fetching data with useEffect:
  1. `import { useState, useEffect } from 'react';`  
  2. `const [data, setData] = useState([]);`
  3. `const FetchDataEffect = () => { ... };`
  4. 
  
  ```
  useEffect(() => {
    async function getData() {
        const res = await fetch("https://posts");
        const data = await res.json();
        if(data && data.length) setData(data);
     }
        getData();
    }, []);
  ```    


* React Hook that tells React DO SOME CODE WHEN(following:)
    * This component re-renders
    * This component mounts
    * The state of value   

* USES:
    1. Event Listeners
    2. DOM manipulation
    3. Subscriptions (real-time updates)
    4. Fetching Data from an API   

      * `response` = the Response object from the fetch
      * `response.json()` = converts the JSON response body into JavaScript objects
      * `await response.json()` = waits for that conversion to complete
      * `const data = await response.json()` = stores the converted JavaScript objects in the data variable
     
    5. Clean up when a component unmounts: 

```
        useEffect(() => {
          // setup code    
          return () => {  
            // cleanup code  
          };  
        }, []);      
```

      The cleanup can prevent memory leaks and remove unwanted things. 
      Some use-cases for this are:
      * Clean up subscriptions
      * Clean up modals
      * Remove event listeners
      * Clear timeouts

* NOTE: document.title = ``Count is ${count}```;`` is common than 
       `document.getElementById("title").textContent = ``Count is ${count}``; `     

### 03 prop drilling 
This is passing properties from one person to another
* Data flows: Customer → Host → HeadWaiter → KitchenStaff

**Provider**

1. create the variable 
`const order = "pork sandwitch";`
2. give it as prop to the component inside: 
`<Host order={order}/>`

**Consumer**
3. Component receives prop:
  `const Host = ({order}) => { ... }`
  Destructure props in parameters: `({order})`
4. prop is used at last
`<h4>Order: "prepare {order} "</h4>`

**Example:** 

* Customer (origin)`
```
const order = "pork sandwitch";
<Host order={order}/>
```

* Host (middleman - passing)
```
const Host = ({order}) => {
   return <HeadWaiter order={order} />
}
```

* HeadWaiter (middleman - passing) 
``` 
const HeadWaiter = ({order}) => {
   return <KitchenStaff order={order}/>
}
```

* KitchenStaff (final destination - used)
```
const KitchenStaff = ({order}) => {
    return <h4>Order: "prepare {order}"</h4>
}
```

### 04.1 Context API
Provides data directly to components that need it

**Provider**

1. Importing (createContext)
`import { createContext } from "react";`

2. Creating instance of (createContext)
```
export const Food = createContext();
export const Price = createContext();
```

3. Create variables with data 
```
    const dish1 = "pork sandwich 🥪";
    const dish1price = 3.99;
```    

4. Wrapping our components into Provider component  

```
 <Food.Provider value={dish1}>
            <Price.Provider value={dish1price}>
              <Staff />  
            </Price.Provider>
        </Food.Provider>
```

5. no middle man passing data, just flow maintained
  `KitchenBelt (Provider)` → `Staff` → `Waiters`→ `Server (Consumer)`      

**Consumer**

6.  Consumer Component import:
  `import { Price } from './KitchenBelt.jsx';`

7. Consumer Component then use:

```
          <Price.Consumer>
              {(dish1price) => {
                 return(
                      <h3>"Dear Sir, The bill is {dish1price}!"</h3>
                  );
              }}
          </Price.Consumer>
```

### 04.2 useContext-Hook

Provider

1. import
`import { createContext } from 'react';`

2. export the contexts
```
export const Surprise1 = createContext();
export const Surprise2 = createContext();
```

3. variables with data
`const cake = "Birthday Cake 🎂";`

4. Provider wrapper

```
      <Surprise1.Provider value={cake}
        <Surprise2.Provider value={singing}>
            <Chefs />
        </Surprise2.Provider>
      </Surprise1.Provider>
```

5. Flow: Middleman nothing weired
`Bakery (Provider)` → `Chefs` → `Servers` → `Table (useContext consumer)`

Consumer

6. import 
```
import { useContext } from 'react';
import {Surprise1, Surprise2} from './Bakery.jsx';
```

7. create varaibles
```
  const item = useContext(Surprise1);
  const activity = useContext(Surprise2);
```

8. use data
`return <h1>{item}</h1>;`

### 04.3 Advanced useContext with State Management 

1. We need to set up Apps.jsx too

* import Provider component
`import { CupcakeMachineProvider } from './04-useContext/exercises/CupcakeMachine.jsx';`

* import the components
```
import FlavorChanger from './04-useContext/exercises/FlavorChanger.jsx';import FlavorDisplay from './04-useContext/exercises/FlavorDisplay.jsx';
```

* then use the components

```
            <div className="container">                 <CupcakeMachineProvider>
                    <FlavorDisplay />
                    <FlavorChanger />
                </CupcakeMachineProvider>
            </div>
```

**Provider**

2. import
`import { createContext, useState } from 'react';`

3. create context
`const CupcakeContext = createContext();`

create provider component : 

4. parameter as - { children }
`const CupcakeMachineProvider = ({ children }) => {`

5. useState varaible:
`const [ flavor, setFlavor ] = useState({ flavor: "Vanilla"});`

6. handler function

```
  const updateFlavor = (newFlavor) => {
    setFlavor({ flavor: newFlavor });
  };
```  

7. using provider component with the useState variables and function

```
  return (
    <CupcakeContext.Provider value={{ flavor, updateFlavor}}> 
                                    Object as context value
      {children} 
        {children} prop - Allows Provider to wrap any child components
    </CupcakeContext.Provider>
  );
```

8. export - not default 
`export { CupcakeContext, CupcakeMachineProvider};`


Consumer

9.  Consuming Complex Context Data

import: 
```
import { useContext } from 'react';
import { CupcakeContext } from "./CupcakeMachine.jsx";
```

variable:
`const { flavor } = useContext(CupcakeContext);`

using data:
`<h1>Flavor: {flavor.flavor}</h1>`

10. Consuming Complex Context Methods

import:
```
import { useContext, useState } from 'react';
import { CupcakeContext } from './CupcakeMachine.jsx';
```

variable:
```
    const { updateFlavor } = useContext(CupcakeContext);
    const [ newName, setNewName ] = useState("");
```

declare method:
```
    const handleName = (e) => {
        setNewName(e.target.value);
    }
```

using handler method:

```
       <form onSubmit={handleSubmit}>
           <input 
               type="text"
               value={newName}
               onChange={(e)=>handleName(e)}
                placeholder="Enter the flavor"
           />
            <button type="submit">Update</button>
       </form>
```
### 05 useReducer

* basic syntax: 

```
import { useReducer } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  // ...
} 

```  

1. import
`import { useReducer } from 'react';`

2. reducer function
```
function reducer(state, action) {
  // ...
}
```

3. use a switch inside reducer function to return an object
```
function reducer(state, action){
    switch(action.type){
        case "increment":
            return { age: state.age + 1}
        case  "decrement":
            return { age: state.age - 1}   
        default:
            return state    
    }
}
```

4. variable 
`const [state, dispatch] = useReducer(reducer, {age: 18});`

5. use state
`<h1>Age: {state.age}</h1>`

6. use the dispatch function as callback
`<button onClick={()=> dispatch({type: "increment"})}>+</button>`

### 06 useRef

**Basic Syntax**

1. Import:

`import { useRef } from 'react';`


2. make variable

`const inputRef = useRef(null);`


3. use in ref property
```
        <input 
            type="text"
            ref={inputRef}
        />
```

4. utilize in function as DOM Manipulation

```
    const focusInput = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    };
```

### 07 Custom Hooks

**Basic Syntax:**

***hook***
1. import: 
`import { useState, useEffect } from 'react';`

2. variable
`const [ data, setData ] = useState(null);`

3. main content

```
    useEffect(()=> {
        fetch(url)
            .then((res)=> res.json())
            .then((data)=>setData(data));
    }, [url]);

    return data;
```

4. export:
`export default useFetch;`

***use in component***

1. Importing our custom hook
`import useFetch from './useFetch.jsx';`

2. utilizing the hook 
` const data = useFetch("https://official-joke-api.appspot.com/jokes/random/250");`

**better fetch with error handling:**

* I: import
`import { useState, useEffect } from 'react';`

* II: hook - starting with lowercase
```
const useFetch = (url) => {
  //code
}
```

* III: variables & return

```
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
```
`return { data, loading, error };`

* IV: useEffect for fetch
```
useEffect(()=>{
  //async function
fetchData();
}, [url]);
```

* V: async function

`const fetchData = async () => {}`

* VI: try catch block

```
 try {
  //code here
} catch (error) {
  setError(error);
} finally {
  setLoading(false);
}
```

* VII: fetching inside try block

```
const response = await fetch(url);

if(!response.ok){
  throw new Error("Network response was not ok!");
}
const result = await response.json();
setData(result);
```
* VIII: export
`export default useFetch;`

**useInput hook**

1. import 
`import useInput from "../hooks/useInput";`

2. variables
```
  const name = useInput("");
  const email = useInput("");
```

3. using 
`<input type="text" {...name} />`

***Spread operator: {...name} shorthand***

`<input type="text" {...name}/>`

Spread operator: {...name} shorthand mean both
value={name.value} onChange={name.onChange} 
Spread operator {...inputProps} is mainly used with custom hooks like useInput.


### 08 uniqueID
a React Hook for generating unique IDs that can be passed to accessibility attributes.

1. import

`import { useId } from 'react';`

2. Call useId at the top level of your component 
`const id = useId();`

3. use it 
```
<label htmlFor={`${id}-email`}>Email</label>
<input type="email" id={`${id}-email`}/>
```


## 03 Beginner Projects

### Counter App
### Todo App
### Meals App 
npm i axios


## React File Naming Convention Summary

### 📁 Folder Names

Use lowercase/kebab-case: components/, navigation/, user-profile/

### ⚛️ Component Files

Always PascalCase: `Nav.jsx, ProductCard.jsx, UserProfile.jsx`
Use `.jsx` for files containing JSX
Use `.js` for pure JavaScript (no JSX)

### 🎨 CSS Files

Match component name: `Nav.css, ProductCard.css, UserProfile.css`
Global CSS: Use lowercase (`index.css, globals.css`)

### 📄 Data Files

Use `.js` for pure JavaScript data
Use `.jsx` if contains JSX elements
Variable names: camelCase (`const data`, `const userData`)

### 🏗️ Structure
```
src/
  components/
    navigation/
      Nav.jsx
      Nav.css
    product-card/
      ProductCard.jsx
      ProductCard.css
  data/
    products.jsx
    config.js
  App.jsx
  index.css

``` 

## React Import Extension Summary

### CSS Files

Always include `.css` extension: import `'./Nav.css'`
Required - won't work without extension

### JS/JSX Files

Extension optional but recommended: `import Nav from './Nav.jsx'`
Including extension provides better clarity and tool support

### Best Practice

Use full extensions for all imports for consistency and clarity
```
javascriptimport Nav from './Nav.jsx';
import './Nav.css';
import data from './data.js';
```

## importing pathways if the files are above the level

* importing  `react-monster/src/components/Input.jsx`
* to  `react-monster/src/components/sidebar/category/Category.jsx`

#### File Structure

```
react-monster/
 └─ src/
     └─ components/
         ├─ Input.jsx
         └─ sidebar/
             └─ category/
                 └─ Category.jsx
```
* correct way:  `import Input from '../../Input';`


## React Router

### Simple navigation 

* Step 1 install
`npm install react-router-dom`

* Step 2 import
`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';`
  Link: Creates navigation links that update the URL
  Routes: A container for all your route definitions
  Route: Defines a mapping between a URL path and a component

* Step 3 Wrap Your App with BrowserRouter
```
function App() {
  return (
    <BrowserRouter>
      {/* Your app content */}
    </BrowserRouter>
  );
}
```

* Step 4 Create Views
```
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}
``` 

* Step 5 navigation link
`<Link to="/">Home</Link>|{""}`
root path `("/")`    `{""}`renders an empty string - so links don’t stick together
```
  <nav>
      <Link to="/">Home</Link>|{" "}
      <Link to="/about">About us</Link>|{" "}
      <Link to="/contact">Contact</Link>|{" "}
  </nav>
```

* Step 6 Routes & Route
Route is nested inside Routes
Then each Route has path and the component
```
  <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact/>}/>
  </Routes>
```      

### Component Navigation

* Import component 
no functions inside the app
```
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
```

* use them in Route
```
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
```   

### Nested Routes

* import Outlet too
`import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';`

* put function inside app with Outlet

```
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
```

* the inner functions 
These can be inside app or imported components. 

* path has to go from a common branch
`<Link to="/books">Books</Link>`


* nested routes
```
        <Route path="/books" element={<Books />}>
          <Route path="fiction" element={<Fiction/>}/>
          <Route path="nonfiction" element={<NonFiction/>}/>
        </Route>
```

### NavLink to style active links

1. import NavLink instead of link

`import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';`

2. styling function inside the app
```
//style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive? 'bold' : 'normal',
  padding: '5px 10px'
});
```

3. using NavLink inside BrowserRouter

```
      {/*Navigation with NavLink for active styling*/}
      <nav style={{marginBottom: '20px'}}>
        <NavLink to="/" style={navLinkStyles}>Home</NavLink>|{" "}
        <NavLink to="/about" style={navLinkStyles}>About us</NavLink>|{" "}
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>|{" "}
        <NavLink to="/books" style={navLinkStyles}>Books</NavLink>
      </nav>
```      