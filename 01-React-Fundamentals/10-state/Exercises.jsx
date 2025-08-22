import { useState } from 'react';

//----------Exercise: Mastering useState in React-------------------------

//----------Step 1: Basic Usage of useState-------------------------------
const Counter = () => {

    const [count, setCount] = useState(0);
    const handleCount = () => setCount( c => c + 1);

    return(
        <>
        <h1>1. Counter</h1>
        <h1>{count}</h1>
        <button onClick={handleCount}>+</button>
        </>
    );
};

//----------Step 2: useState with an Array of Data-------------------------------
const TodoList = () => {

    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");

    const handleInput = (e) => {
        setTaskName(e.target.value);
    };

    const handleTasks = () => {
        if(taskName !== ""){
            setTasks(t => [...t, taskName]);
        }
        setTaskName("");
    };

    const handleRemoveTask = (index) => setTasks((t) => t.filter((_, i) => index !== i));


    return(
        <>
        <h1>2. To Do List:</h1>
        <form>
            <input value={taskName} placeholder="Enter Task" onChange={handleInput}></input>
            <button type="button" onClick={handleTasks}>Add Task</button>
        </form>
        <ul>
            
            {tasks.map((task, index) => (
            <li key={index}>
                {task}
                <button onClick={() => (handleRemoveTask(index))}>X</button>
            </li>))}
        </ul>
        </>
    );
};

//----------Step 3: useState with an Object of Data-------------------------------
const Profile = () => {

    const [user, setUser] = useState({name: "Guest", age: 18})
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");

    const handleNewName = (e) => (e.target.value !== "") ? 
                                    setNewName(e.target.value) : 
                                    setNewName("Guest");

    const handleNewAge = (e) => (e.target.value !== "" ) ?  
                                    setNewAge(e.target.value) : 
                                    setNewAge(18);
        
    const handleUser = () => {
        if(newName !== "" && newAge !== ""){
                    setUser({name: newName, age: newAge});
                    setNewName("");
                    setNewAge("");
        }
        else{
            alert("Fill the required fields.");
        }
    };

    return(
        <>
        <h1>3. Profile </h1>
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
            <div>
                <label htmlFor="inputName">Name: </label>
                <input value={newName} id="inputName" placeholder="Enter name" type="text" onChange={handleNewName}></input> <br/>
                <label htmlFor="inputAge">Age: </label>
                <input value={newAge} id="inputAge" placeholder="Enter age" type="number" onChange={handleNewAge}></input>
                <button type="button" onClick={handleUser}>Edit User Profile</button>
            </div>
        </>
    );
};

//----------Step 3: useState with an Object of Data-------------------------------

const ShoppingList = () => {

    const [goods, setGoods] = useState([]);
    const [item, setItem] = useState("");
    const [number, setNumber] = useState(1);
    
    //Methods
    const handleItemAddition = (e) => {
        if(e.target.value !== ""){
            setItem(e.target.value);
        }
    };

    const handleUnitAddition = (e) => {
        if(e.target.value >= 1){
           setNumber(e.target.value); 
        }
    };

    const handleNewGood = () => {
        if (item !== "" && number >= 1){
            setGoods((g) => [...g, {name: item, quantity: number}]);
            setItem("");
            setNumber(1);
        }
        else{
            alert("Fill the required fields"); 
        }   
               
    };

    const handleRemove = (index) => {
        setGoods(()=>goods.filter((_, i) => i !== index))
    };

    return(
        <>
        <h1>4. Shopping List </h1>
        <section>
            <h3>Current List</h3>
            <ul>
                {goods.map((good, index)=>
                <li key={index}>Item: {good.name} units: {good.quantity}
                    <button onClick={()=> handleRemove(index)}>X</button>
                </li>
                )}
            </ul>
        </section>
        <section>
            <label htmlFor="item">Item: </label>
            <input id="item" value={item} placeholder="Enter the item name" type="text" onChange={handleItemAddition}/>
            <label htmlFor="item">Quantity: </label>
            <input id="quantity" value={number} placeholder="Enter the number of items" type="number" onChange={handleUnitAddition}/>
            <button type="button" onClick={handleNewGood}>Add New Item</button>
        </section>
        </>
    );
};


//{name: "brush 🪥", quantity: 1},{name: "toilet paper 🧻", quantity: 8}, {name: "soap 🧼", quantity: 1}//

//----------Step 5: Render All Components ----------------------------------------
const Exercises = () => {

    return(
        <div className="container">
            <div className="flexItem">
                <h1>State Exercises</h1>
                <Counter />
                <TodoList />
                <Profile />
                <ShoppingList />
            </div>
        </div>
    );
};

export default Exercises;