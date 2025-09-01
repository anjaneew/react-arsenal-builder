import { useContext, useState } from 'react';
import { CupcakeContext } from './CupcakeMachine.jsx';

const FlavorChanger = () => {
    const { updateFlavor } = useContext(CupcakeContext);
    const [ newName, setNewName ] = useState("");

    const handleName = (e) => {
        setNewName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newName.trim()){
            updateFlavor(newName);
            setNewName("");
        }
    };

    return(
        <div className="flexItem">
        <br/>
        <h2>Update flavor</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={newName}
                onChange={(e)=>handleName(e)}
                placeholder="Enter the flavor"
            />
            <button type="submit">Update</button>
        </form>
        </div>
    );
};


export default FlavorChanger;