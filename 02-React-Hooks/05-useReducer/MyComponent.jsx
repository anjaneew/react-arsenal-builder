import { useReducer } from 'react';

function reducer(state, action){
    switch(action.type){
        case "increment":
            return { age: state.age + 1}
        case  "decrement":
            return { age: state.age - 1}   
        default:
            return state    
    }
}

function MyComponent(){
    const [state, dispatch] = useReducer(reducer, {age: 18});

    return(
        <>
        <div className="flexItem">
            <h1>Age: {state.age}</h1>
            <button onClick={()=> dispatch({type: "increment"})}>+</button>
            <button onClick={()=> dispatch({type: "decrement"})}>-</button>
        </div>
        </>
    );
}

export default MyComponent;