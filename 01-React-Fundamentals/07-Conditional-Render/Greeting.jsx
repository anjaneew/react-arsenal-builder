const Greeting = ({timeOfDay}) => {

    return (timeOfDay === "morning"  ? (<p>Good morning!</p>) : (<p>Good afternoon!</p>));

}

export default Greeting;