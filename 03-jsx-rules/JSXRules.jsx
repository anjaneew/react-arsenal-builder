/**JSX Rules
* return single parent element
* all tags must be closed 
* camelCase
* class > className
* forms - for > htmlFor 
 */


const JSXRules = () => {
  return (
    <div>
        <h1>JSXRules</h1>
        <form className="myform">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name"/>
        </form>
    </div>
  );
}

export default JSXRules;