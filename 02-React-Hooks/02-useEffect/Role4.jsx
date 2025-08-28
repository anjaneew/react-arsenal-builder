import { useState, useEffect } from 'react';

const Role4 = () => {

    const [size, setSize] = useState(window.innerWidth);
    console.log(size);

    const checkSize = () => setSize(window.innerWidth);

    useEffect(()=>{

        window.addEventListener("resize", checkSize);
        console.log("Event listener to Resize added.");

        return () => {
            /**Before we add render our component again,
             * this cleanup function will cleanup the component first.
             */

            console.log("cleanup 🧹");
            window.removeEventListener("resize", checkSize);
        }
    });

    return(
        <div className="flexItem">
            <p>cleanup function</p>
            <h2>Window</h2>
            <h2>{size}px</h2>
        </div>
    );

}

export default Role4;