const UserStatus = ({loggedIn, isAdmin}) => {

    if (loggedIn && isAdmin){
        return <p>Welcome Admin!</p>;
    } 
    else if(loggedIn && !isAdmin){
        return <p>Welcome User</p>;
    }
    else{
        return <p>Please log in.</p>
    }
}

export default UserStatus;