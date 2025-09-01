// import { useState } from 'react';
import BasicEffect from './BasicEffect.jsx';
import CounterEffect from './CounterEffect.jsx';
import FetchDataEffect from './FetchDataEffect.jsx';

//----------Exercise: -------------------------



const Exercises = () => {

    return(
        <div className="container">
            <div className="flexItem">
                <h1>Exercise: Understanding useEffect in React</h1>

                <h2>Step 1: Basic Usage of useEffect</h2>
                <BasicEffect />
                <h2>Step 2: useEffect with Dependencies</h2>
                <CounterEffect />
                <h2>Step 3: useEffect for Fetching Data</h2>
                <FetchDataEffect />
            </div>
        </div>
    );
};

export default Exercises;