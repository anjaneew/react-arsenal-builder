const ChildB = ({img, name, age, isMarried, hobbies}) => {
  return (
        <div>
            <img src={img} alt={name}/>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Marrital Status: {isMarried ? "married" : "single"}</p>
            <p>Hobbies: <ul>{hobbies.map(((hobby, index) => (
                <li key={index}>{hobby}</li>    
            )))}</ul></p>
        </div>
  );
}

export default ChildB;