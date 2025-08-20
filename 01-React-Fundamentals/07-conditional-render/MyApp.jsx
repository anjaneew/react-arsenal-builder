//---------------------Example 1-----------------------
//------------------JSX stored in variables------------  

//                  JSX
const valid = <p>Welcome to chat room!</p>;
const invalid = <p>Please enter the correct!</p>;

//                destructuring props
const Password = ({isValid}) => {
    if(isValid){
        return valid;
    }
    else{
        return invalid;
    }
};


//---------------------Example 2-----------------------
//---------------JSX  Components as functions ----------

const ValidPassword = () => <p>Hello! Welcome to my channel.</p>;
const InvalidPassword = () => <p>Username and password are invalid</p>;

const CheckPassword = ({ passwordIsCorrect }) => {
    if(passwordIsCorrect){
        return <ValidPassword />;
    }

    else{
        return <InvalidPassword />;
    }
};

//---------------------Example 3-----------------------
//------------------------&& ---------------------------

function Cart(){
    const items = ["Wireless Earbuds 🎧", "Power Bank 🔋", "New SSD 📝", "Hoddie 👕"];

    return(
        <>
            <h4>Cart 🛒</h4>
            {items.length > 0 && <h5>You have {items.length} items in your cart.</h5>}

            <ul>
                <p>Products:</p>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

//---------------------Example 4-----------------------
//--------------------Ternary Operator-----------------
// condition ? true : false

const CorrectPW = () => <h3>Valid Password</h3>;
const WrongPW = () => <h3>Invalid Password</h3>;

const MyPassword = ({ correct }) => correct? <CorrectPW /> : <WrongPW />; 


//------------------------------------------------------
const MyApp = () => {
  return (
    <div>
        <h1>Conditional Rendering</h1>
        
        <h2>Example 1: JSX stored in variables</h2>
            <Password isValid={true}/>

        <h2>Example 2: JSX  Components as functions</h2>
            <CheckPassword passwordIsCorrect={true}/>

        <h2>Example 3: &&</h2> 
            <Cart />

        <h2>Example 4: Ternary Operator</h2> 
            <MyPassword correct={true}/>      

    </div>
  );
}

export default MyApp;