const Lists = () => {
    const fruits = ['🍇','🍈','🍉','🍊','🍋','🍋‍🟩','🍌','🍍','🥭','🍎','🍏','🍐'];
    const numbers = [1, 2, 3, 4 , 5 , 6];
    const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];

  const products = [
    { id: 1, name: "Phone", price: "$699" },
    { id: 2, name: "Laptop", price: "$1200" },
    { id: 3, name: "Headphones", price: "$199" },
  ];

  return (
    <div>
        <h1>Working with lists:</h1>
        <h1>Objects</h1>
        <ul>
        {users.map((user)=> (<li>
            <div>
                <h3 >{user.id}</h3>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
            </div></li>
        ))}</ul>

        <ul>
            {products.map(({id, name, price})=>(
               <li>{id}: {name} - {price}</li> 
            ))}
        </ul>
        <h2>Fruits</h2>
        <ul>
        {fruits.map((fruit, id)=> <li key={id}>{fruit}</li>)} </ul>
        <h2>Numbers</h2>
        <ul>
        {numbers.map((number, id) => (
            <li key={id}>{number}</li>
        ))}
        </ul>
        <h2>Random</h2>
        {numbers.map((number) => (
            <ul key={number}>
                <li>{Math.floor(Math.random()*10)}</li>
            </ul>
        ))}
    </div>
  );
}

export default Lists;

/**Note: 1:
 * 
 * within the return expression, inside callback functions, we do not use {}
 * 
 * ex: {users.map(()=> ( HERE ))}
 * instead of     () => {}      
 * 
 * Note: 2:
 * 
 * object destructring:
 *  {users.map((id, name, age)=> {id} {name}{age})}
 * 
 * instead of 
 *  {users.map((user)=> {user.id} {user.name}{user.age})}
 * 
 */