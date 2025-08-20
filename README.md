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
* use double `{}` ex: `<p style={{backgroundColor: "red"}}></p>`
* use JSX varaiable ex: `const myStyles = {color: "white"}` then `<p style={myStyles}></p>`