import { useState } from 'react';
import './MyStyles.css';


const BudgetTracker = () => {

    const [sw, setSw] = useState(true);

    const [expenses, setExpenses] = useState([]);
    const [income, setIncome] = useState([]);

    const [task, setTask] = useState("");
    const [amount, setAmount] = useState("");

    const handleSetTask = (e) => setTask(e.target.value);
    const handleSetAmount = (e) => setAmount(e.target.value);

    const handleSubmit = () => {
        const newEntry = {title: task, cost: amount}
        if(sw === true){
            setExpenses((e) => [...e, newEntry]);
            setTask("");
            setAmount("");
        }
        else{
            setIncome((i)=> [...i, newEntry]);
            setTask("");
            setAmount("");
        }
    }

    const expensesList = <><h2>List of Expenses:</h2> 
                            {expenses.map((item, index) => 
                            <li key={index}>{item.title}:{item.cost}</li>)}</>

    const incomeList = <><h2>List of Income:</h2>
                        {income.map((item, index) =>
                        <li key={index}>{item.title}:{item.cost}</li>)}</>    

  return (
    <div className="container">
        <div className="flexItem">
            <h1>BudgetTracker</h1>
            <button onClick={() => setSw(s => !s )}>
                { sw === true ? "Income" : "Expenses"}
            </button><br/>
            <span>
                <label>Task: </label>
                <input 
                    type="text" 
                    value={task} 
                    placeholder="Enter task" 
                    onChange={handleSetTask}
                    key={sw ? "expenses" : "income"}
                /><br/>
                <label>Amount: </label>
                <input 
                    type="number" 
                    value={amount} 
                    placeholder="Enter Amount"
                    onChange={handleSetAmount}
                    /><br/>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </span>
            <span>
                <ol>
                    {sw === true ? (expensesList) : (incomeList) }  
                </ol>
            </span>
        </div>
    </div>
  );
}

export default BudgetTracker;