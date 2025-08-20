//-----------------Events---------------------

//method 1: BEST - defining event handling method seperately (no re-rendering)

const Button1 = () => {

    const handleClick1 = () => console.log("Button 1 clicked. Best method. seperately.");
    
    return(
        <>
        <button onClick={handleClick1}>Button 1</button> <br/>
        </>
    );
}

//method 2: passig argument using arrow function

const Button2 = () => {
    return(
        <>
        <button onClick={() => console.log("Button 2 clicked using arrow function")}>Button 1</button><br/>
        </>
    );
}

//method 3: using react event object


const Button3 = () => {

    const handleClick3 = (e) => {
        e.target.style.backgroundColor = "lightblue";
         e.target.textContent = "ouch 🪼!"
         console.log("Button 3 clicked using event object");
    }
    return(
        <>
        {/* <button onClick={(e)=>handleClick2(e)}>Button 3</button><br/>  
        EVEN ARROR IS UNNECESSARY*/}
        <button onClick={handleClick3}>Button 3</button><br/>
        </>
    );
}

const Events = () => {

    return(
        <>
        <Button1 />
        <Button2 />
        <Button3 />
        </>
    );
}

export default Events;