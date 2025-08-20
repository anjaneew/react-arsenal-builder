import Weather from './components/Weather.jsx';
import UserStatus from './components/UserStatus.jsx';
import Greeting from './components/Greeting.jsx';

function App(){

  return(
    <>
    {/**Weather */}
    <Weather temperature={10}/>
    <Weather temperature={20}/>
    <Weather temperature={30}/>
    {/**UserStaus */}
    <UserStatus loggedIn={true} isAdmin={true}/>
    <UserStatus loggedIn={true} isAdmin={false}/>
    <UserStatus loggedIn={false} isAdmin={false}/>
    {/**Greeting */}
    <Greeting timeOfDay="morning"/>
    <Greeting timeOfDay="afternoon"/>
    </>
  );

}

export default App;