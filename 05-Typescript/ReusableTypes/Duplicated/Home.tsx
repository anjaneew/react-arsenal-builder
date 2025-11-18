import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";

const Home = () => {
  return (
    <div>
        <h1>Duplicated Types</h1>
        <h1>User Info</h1>
        <UserInfo 
            username="Robin"
            email="robin@gmail.com"
            age={20}
            location={["Sherwood", "England"]}
        />
        <h1>Admin Info</h1>
        <AdminInfo
            username="Sherif"
            email="Sherif@gmail.com"
            age={35}
            location={["Sherwood", "England"]}
            admin="yes"
        />
    </div>
  );
};

export default Home;