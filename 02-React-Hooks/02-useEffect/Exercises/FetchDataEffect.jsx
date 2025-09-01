import { useState, useEffect } from 'react';

const FetchDataEffect = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{

        async function getData(){
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");

            const data = await res.json();

            if(data && data.length) setData(data);

        }

        getData();

    }, []);

    const myTitle = data.length ? data[0].title: "not available";


    return (
        <>
        <p>my Title: {myTitle}</p>
        <ul>
            {data.map((item, index) => (
                <li key={index}>{item.title}</li>
            ))}
        </ul>
            
        </>
    );
};

export default FetchDataEffect;