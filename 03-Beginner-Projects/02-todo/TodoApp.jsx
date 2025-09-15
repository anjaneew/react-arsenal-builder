import { useState } from 'react';

const TodoApp = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = () => {
        setTodos([...todos, input]);//as an array of strings
        //    setTodos((todos) => todos.concat({text: input})); //I hate this
        // setTodos([...todos, {text: input}]); // as an object
       setInput("");
    }

    const removeTodo = (index) => 
       setTodos((todos) => todos.filter((t, id) => id !== index));
    

  return (
    <div>
        <h2>Project 2: </h2>
        <h1>~ToDoApp~</h1>
        <div>
            <input type="text" placeholder="Enter task" value={input} onChange={handleInput}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        
        <div>
            <ul>
            {todos.map((task, index)=> 
                <li key={index}>{task} - <button onClick={()=>removeTodo(index)}>✖️</button></li> 
            )}
            </ul>
            
        </div>
    </div>
  );
};

export default TodoApp;