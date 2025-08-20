import './MyApp.css';

const MyApp = () => {

    const myStyles = {color: "white", backgroundColor: "teal", padding: "2rem"};

    return(
        <div className="everything">
        <h1>React Styles</h1>
        <h2>Method 1: Inline styles</h2>
        <p style={{color: "white", backgroundColor: "teal", padding: "2rem"}}>1. double curly braces</p>
        <p style={myStyles}>2. Styles variable</p>
        <h2 className="hea">Usual seperate file for CSS</h2>
        </div>
    );
}

export default MyApp;