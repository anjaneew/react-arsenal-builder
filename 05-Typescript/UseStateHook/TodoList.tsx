import React, { useState } from 'react';

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

const TodoList: React.FC = () => {

   const [todos, setTodos] = useState<Todo[]>([]); 
   const [newTask, setNewTask] = useState<string>("")

   const addTask = (task: string) => {
    if (task.trim() !== ""){
        const newTodo: Todo = {
            id: todos.length + 1,
            task,
            completed: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setNewTask("");
    } 
   };

  return (
    <div>
        <h2>TodoList</h2>
        <input
            type="text"
            placeholder="Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={() => addTask(newTask)}>Add Todo</button>
        <ul>
            {todos.map((todo)=> (
                <li key={todo.id}>
                    {todo.task} {todo.completed ? "(Completed)" : ""}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default TodoList;