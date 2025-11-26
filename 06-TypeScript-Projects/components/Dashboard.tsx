import Sidebar from "./Sidebar";
import ProjectTable from "./Table";

const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <Sidebar/>
        <div>
            <ProjectTable/>
        </div>
    </div>
  )
}

export default Dashboard