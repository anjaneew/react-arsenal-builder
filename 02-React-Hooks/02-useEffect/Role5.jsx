import {useState, useEffect} from 'react';

const Role5 = () => {

    const [data, setData] = useState([]); 

    useEffect(()=>{
        async function getData(){
            //returns a Response object, not the actual data yet
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            //API sends back data as a JSON string 
            //ex: '[{"userId":1,"id":1,"title":"sunt aut facere..."},
            const data = await response.json();
            //.json() reads the response body and converts it from a JSON string 
            // into actual JavaScript objects/arrays
            // ex: [
            //       {userId: 1, id: 1, title: "sunt aut facere..."},
            //       {userId: 1, id: 2, title: "qui est esse..."}
            //     ]
            if(data && data.length) setData(data);
        }

        getData();
    }, []); //Runs only on mount 

    return(
        <div className="flexItem">
            <p>Fetching Data from 3rd party</p>
            <ul>
                {data.map((item, index)=>(
                    <li key={index}>{item.title}</li>
                ))}
            </ul>

        </div>
    );
}

export default Role5;