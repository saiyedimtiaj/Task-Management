// import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="container mx-auto ">
      <div className="lg:flex">
        <Sidebar />
        {/* Add your main content here */}
        <div className="flex-1 p-8">
          {/* Your main content goes here */}
          <h1>Main Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
