import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";
import { type Info, type AdminInfoList } from "./Types.tsx";

const App = () => {

  const user: Info = {
    id: 1342,
    name: "Robin of Locksly",
    email: "robin@gmail.com",
  }

  const admin: AdminInfoList = {
    id: 2052,
    name: "Sherif of Nottingham",
    email: "sherif@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  }

  return (
    <div>
      <h1>Reusable Props Typing</h1>
      <UserInfo user={user}/>
      <AdminInfo admin={admin}/>
    </div>
  );
};

export default App;