import './MyStyles.css';
import MyComponent from './MyComponent.jsx';
import FocusInput from './FocusInput.jsx';
import Timer from './Timer.jsx';

const MyApp = () => {

    return(
        <div className="container">
            
            <div className="flexItem">
                <h1>useRef Hook: </h1>
                <MyComponent />
                <FocusInput />
                <Timer />
            </div>
        </div>
    );
}

export default MyApp;