import { useState } from 'react';
import './styles.css';

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

    const removeTodo = (index) => {
       setTodos((todos) => todos.filter((t, id) => id !== index));
    }
    

  return (
    <div className="container">
        <div className="container">
            <h2>Project 2: </h2>
            <h1>~ToDoApp~</h1>
        </div>

        <div className="container">
            <input type="text" placeholder="Enter task" value={input} onChange={handleInput}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        
        <div className="container">
            <ul className="todos-list">
            {todos.map((task, index)=> 
                <li key={index} className="todo">{task} - <button onClick={()=>removeTodo(index)} className="close">✖️</button></li> 
            )}
            </ul>
        </div>
    </div>
  );
};

export default TodoApp;