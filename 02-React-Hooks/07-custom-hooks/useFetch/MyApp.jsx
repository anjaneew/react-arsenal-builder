// Importing our custom hook
import useFetch from './useFetch.jsx';

const Home = () => {

    const data = useFetch("https://official-joke-api.appspot.com/jokes/random/250");

    return(
        <>
        <h3>Jokes List</h3>
        <ul>
            {data && data.map((item, index) => 
                <li key={index}>
                    <h4>{item.id}</h4>
                    <p>{item.setup}</p>
                    <h5>{item.punchline}</h5>
                </li>
            )}
        </ul>
        </>
    );

}


const MyApp = () => {
  return (
    <div>MyApp
       <Home /> 
    </div>
  )
}

export default MyApp;