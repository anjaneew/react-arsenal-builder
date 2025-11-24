import { useReducer } from "react";

//types
type State = {
    count: number;
    history: number[];
}

type Action = 
    | { type: "increment" }
    | { type: "decrement" }
    | { type: "reset" }
    | { type: "set" ; value: number };


//1. create inital object
const initialState = { count: 20, history: []};

//2. reducer function returns a state based on state + action
const reducer =  (state: State, action: Action) => {
    switch(action.type) {
        case "increment":
            return{
                count: state.count + 1,
                history: [...state.history, state.count + 1],
            }

        case "decrement":
            return{
                count: state.count - 1,
                history: [...state.history, state.count - 1],
            }    

        case "reset":
            return{
                count: 0,
                history: [...state.history, 0],
            }    
        case "set":
            return{
                count: action.value,
                history: [...state.history, action.value],
            }  
        default:
            return state;              
    }
}

const MyComponent = () => {

    //useReducer hook
    const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>useReducer my example</h1>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({type: "increment"})}>Increment</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        <button onClick={() => dispatch({type: "set", value: 100})}>Set to 100</button>
        <br/>
        <p>History:{state.history.join(", ")}</p>
    </div>
  );
};

export default MyComponent;