import { useState } from 'react';
import './styles.css';

const MyApp = () => {

  //variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //errors
  const [usernameError, setErrorUsername] = useState("");
  const [emailError, setErrorEmail] = useState("");
  const [passwordError, setErrorPassword] = useState("");
  const [confirmPasswordError, setErrorConfirmPassword] = useState("");

  //color 
  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState(""); 
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  //functions
  const handleUserNameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmChange = (e) => setConfirmPassword(e.target.value);
  
  const validate = (e) => {
    e.preventDefault();

    //username
    if(username.length > 8){
      setErrorUsername("");
      setUserColor("green");
    } else {
      setErrorUsername("Username must be at least 8 charaters long.");
      setUserColor("red");
    }

    //Email
    if (email.includes('@')) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Enter a valid email.");
      setEmailColor("red");
    }

    //password
    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be at least 8 charaters long.");
      setPasswordColor("red");
    }

    //confirm password
    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords did not match.");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <>
    <div className="card">
      <div className="card-image"></div>

      <form>
        <input 
          type="text" 
          placeholder="Name"
          style={{borderColor: userColor}}
          value={username}
          onChange={handleUserNameChange}
        />

        <p className="error">{usernameError}</p>

        <input 
          type="email" 
          placeholder="Email"
          style={{borderColor: emailColor}}
          value={email}
          onChange={handleEmailChange}
        />

        <p className="error">{emailError}</p>

        <input 
          type="password" 
          placeholder="Password"
          style={{borderColor: passwordColor}}
          value={password}
          onChange={handlePasswordChange}
        />

        <p className="error">{passwordError}</p>

        <input 
          type="password" 
          placeholder="Confirmed Password"
          style={{borderColor: confirmPasswordColor}}
          value={confirmPassword}
          onChange={handlePasswordConfirmChange}
        />

        <p className="error">{confirmPasswordError}</p>
        <button className="submit-btn" onClick={validate}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default MyApp; 