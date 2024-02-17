import { Link, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaCartPlus, FaHome, FaList, FaUserCircle, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import useCart from "../hook/useCart";
import useAdmin from "../hook/useAdmin";

const DashboardLayout = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    // const isAdmin = true;
    // console.log(isAdmin)
    return (
        <div className="flex">
            <div className="w-64 bg-orange-500 min-h-screen pt-10">
                <ul className="menu uppercase">
                    {
                        isAdmin ? <>
                            <li>
                                <Link to="/dashboard/adminHome">
                                    <FaHome /> Admin Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/addItems">
                                    <FaUtensils /> Add Item
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/manageItems">
                                    <FaList /> manage item
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/manageBooking">
                                    <FaBook /> Manage Booking
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/allUsers ">
                                    <FaUsers /> All Users
                                </Link>
                            </li>
                        </>
                            :
                            <>
                                <li className="text-lg">
                                    <Link to="/dashboard/userHome">
                                        <FaHome /> User Home
                                    </Link>
                                </li>
                                <li className="text-lg">
                                    <Link to="/dashboard/reservation">
                                        <FaCalendar /> Reservation
                                    </Link>
                                </li>
                                <li className="text-lg">
                                    <Link to="/dashboard/paymentHistory">
                                        <FaWallet /> Payment History
                                    </Link>
                                </li>
                                <li className="text-lg">
                                    <Link to="/dashboard/cart">
                                        <FaCartPlus /> My Cart ({cart.length})
                                    </Link>
                                </li>
                                <li className="text-lg">
                                    <Link to="/dashboard/userHome">
                                        <MdRateReview /> Add Review
                                    </Link>
                                </li>
                                <li className="text-lg">
                                    <Link to="/dashboard/userHome">
                                        <LuCalendarClock /> My Booking
                                    </Link>
                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li>
                        <Link to="/">
                            <FaHome /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/order/salad">
                            <IoMenu /> Menu
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/contact ">
                            <FaUserCircle /> contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;