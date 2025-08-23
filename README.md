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
  
#### FYI: Common Events:
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
  .