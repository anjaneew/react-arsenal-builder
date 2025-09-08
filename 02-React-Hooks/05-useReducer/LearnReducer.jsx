import { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {

    switch(action.type) {
        case "increment":
            return {...state, count: state.count + 1};
        case "decrement": 
            return {...state, count: state.count - 1};  
        case "reset":
            return {...state, count: 0};
        default:
            return state;           
    }
}

const LearnReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flexItem">LearnReducer
        <h1>Count : {state.count}</h1>
        <button onClick={()=> dispatch({ type: "increment"})}>➕</button>
        <button onClick={()=> dispatch({ type: "reset"})}>Reset</button>
        <button onClick={()=> dispatch({ type: "decrement"})}>➖</button>
    </div>
  );
};

export default LearnReducer;