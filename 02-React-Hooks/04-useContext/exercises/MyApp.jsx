import './MyStyles.css';
import { CupcakeMachineProvider } from './04-useContext/exercises/CupcakeMachine.jsx';
import FlavorChanger from './04-useContext/exercises/FlavorChanger.jsx';
import FlavorDisplay from './04-useContext/exercises/FlavorDisplay.jsx';


const MyApp = () => {

    return(
        <>
            <h1>useContext Hook: </h1>
            <div className="container">
                <CupcakeMachineProvider>
                    <FlavorDisplay />
                    <FlavorChanger />
                </CupcakeMachineProvider>
            </div>
        </>
    );
}

export default MyApp;