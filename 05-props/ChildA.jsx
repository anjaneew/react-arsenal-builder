const ChildA = (props) => {
  return (
    <div>
        <img src={props.img} alt={props.name}/>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Marrital Status: {props.isMarried ? "married" : "single"}</p>
        <p>Hobbies: <ul>{props.hobbies.map(((hobby, index) => (
            <li key={index}>{hobby}</li>    
        )))}</ul></p>
    </div>
  );
}

export default ChildA;