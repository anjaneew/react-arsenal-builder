import { useState, useEffect } from 'react';

const Storage = () => {

   // Initialize state from localStorage or default to an empty string
  const [username, setUsername ] = useState(() => {
    const name =  localStorage.getItem("username");
    return name ? JSON.parse(name) : ""; 
  });

  const [newUsername, setNewUsername] = useState("");

  //Update localStorage whenever the name changes
  useEffect(()=> {
    localStorage.setItem("username", JSON.stringify(username));
  }, [username]);

  const handleChange = (e) => {
    setNewUsername(e.target.value);
  }
  const handleUsernameUpdate = () => {
    setUsername(newUsername);
    setNewUsername("");
  };

  const handleUsernameDelete = () => setUsername("");
  
  return (
    <div className="container">
      <div>
        <h1>Storage</h1>
        <h3>username: {username}</h3>
        <input 
          type="text"
          value={newUsername}
          onChange={handleChange}
          placeholder="Enter username"
        /> 
        <button onClick={handleUsernameUpdate}>Update name</button>
        <button onClick={handleUsernameDelete}>Clear name</button>
      </div>
      </div>
  );
}

export default Storage;