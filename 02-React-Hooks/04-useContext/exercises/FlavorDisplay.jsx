import { useContext } from 'react';
import { CupcakeContext } from "./CupcakeMachine.jsx";

const FlavorDisplay = () => {

    const { flavor } = useContext(CupcakeContext);

    return(
        <div className="flexItem">
        <h1>Flavor: {flavor.flavor}</h1>
        </div>
    );
};

export default FlavorDisplay;