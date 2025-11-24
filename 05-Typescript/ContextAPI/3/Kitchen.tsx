import { useContext } from "react";
import { BakeryContext } from "./BakeryContext";

const Kitchen = () => {

    const { cakeType, setCakeType } = useContext(BakeryContext);

    return(
        <div>
            <p>Today's cake: {cakeType}</p>
            <button onClick={() => setCakeType("Vanilla")}>Vanilla</button>
            <button onClick={() => setCakeType("Strawberry")}>Strawberry</button>
        </div>
    );
};

export default Kitchen;