import { useRef } from "react";

const MyComponent = () => {

    const usernameRef = useRef(null);

    const handleSubmit = () => {

        if(!usernameRef.current.value) {
            usernameRef.current.focus();
            alert("Please enter username!");
            return; 
        }

        alert(`Username : ${usernameRef.current.value} updated`)
    }

  return (
    <div className="flexItem">
        <h3>MyComponent - Login Form</h3>
        <p>useRef is use to manage any kind of DOM manipulations.</p>
        <input 
            type="text"
            ref={usernameRef}
            placeholder="Enter username"
        />
        <input 
            type="password"
            placeholder="Enter password"
        />
        <button onClick={handleSubmit}>Login</button>

    </div>
  )
}

export default MyComponent;