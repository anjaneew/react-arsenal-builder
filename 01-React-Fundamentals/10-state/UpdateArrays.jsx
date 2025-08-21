import { useState } from 'react';

const UpdateArrays = () => {

    const [vehicles, setVehicles] = useState(["🚝","🚌","🚑","🚕","🚗","🚜","🚁"]);
    const [newCar, setNewCar] = useState("");
    
    const handleAddition = () => {
        setVehicles(v => [...v, newCar]);
        setNewCar("");
    };

    const handleInput = (e) => setNewCar(e.target.value);
    const handleRemove = (index) => 
        setVehicles((v) => v.filter((_,i) => index !== i));
    

    return(
        <div className="container">  
        <div className="flexItem">
            <h2>~Example 2~</h2>
            <h1>Vehicles</h1>
            <ul>
            {vehicles.map((vehicle, index) => 
                (
                <li key={index} className="big">{vehicle}
                <button onClick={()=>(handleRemove(index))}>X</button></li> ))}    
            </ul>
            <input value={newCar} type="text" onChange={handleInput}></input>
            <button onClick={handleAddition}>Add</button>
        </div>   
        </div>
    );
}

export default UpdateArrays;