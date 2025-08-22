import { useState } from 'react';

const EventDemo = () => {

    const [message1, setMessage1] = useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, modi assumenda, suscipit nihil delectus sapiente corrupti enim, numquam in a laborum possimus saepe sequi! Repellat possimus consectetur excepturi nam quod.");

    const [message2, setMessage2] = useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, modi assumenda, suscipit nihil delectus sapiente corrupti enim, numquam in a laborum possimus saepe sequi! Repellat possimus consectetur excepturi nam quod.");

    const [ clickBait, setClickBait ] = useState("Click me!");

    const handleClickBait = (e) => {
        setClickBait("Button Clicked!🪼");
        e.target.style.backgroundColor = "#4287f5";
    };

    const handleCopyMessage = (e) => {
        setMessage1("Text Copied!\n Challenge: Handling Events in React achieved!");
        e.target.style.backgroundColor = "#e6d88e";
        alert("Text Copied!");
    }

    const handleMouse = (e) => {
        setMessage2("hello - you are hovering!\n Challenge: Handling Events in React achieved!");
        e.target.style.cursor =  "pointer";
    }

  return (
    <div className="container">
        <div className="flexItem">
            <h1>EventDemo</h1>
            <button onClick={handleClickBait}>{clickBait}</button>
            <div>
                <p onCopy={handleCopyMessage}>{message1}</p>
                <p onMouseOver={handleMouse}>{message2}</p>
            </div>
        </div>
    </div>
  );
}

export default EventDemo;