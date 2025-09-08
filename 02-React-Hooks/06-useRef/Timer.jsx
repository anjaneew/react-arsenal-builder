import { useRef, useEffect, useState } from 'react';

const Timer = () => {
    const [count, setCount] = useState(60);
    const intervalRef = useRef(null);

    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setCount((c => c-1));
        }, 1000);

        return()=>{
            clearInterval(intervalRef.current);
        }

    }, []);

    return(
        <>
        <h2>Timer: {count} seconds left</h2>
        <button onClick={()=> clearInterval(intervalRef.current)}>Stop</button>
        </>
    );

};

export default Timer;