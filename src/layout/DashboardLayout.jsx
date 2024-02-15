import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div>
            <div className="">
                <ul>
                    <li><Link to="/dashboard/userHome">User Home</Link></li>
                </ul>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;