import {useEffect} from 'react';

const BasicEffect = () => {

    useEffect(()=>{
        console.log("Hello !!!");
    },
    []);

    return(
        <>
        <p>Hello world - check the console</p>
        </>
    );
}

export default BasicEffect;