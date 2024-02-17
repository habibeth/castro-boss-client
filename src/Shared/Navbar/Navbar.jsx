import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useEffect, useState } from "react";
import './Navbar.css'
import useAuth from '../../hook/useAuth';
import Swal from "sweetalert2";
import { IoCartOutline } from "react-icons/io5";
import useCart from "../../hook/useCart";
import useAdmin from "../../hook/useAdmin";


const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCart();
    const [isAdmin] = useAdmin()
    // console.log(cart);


    const handleLogout = () => {
        // console.log("clicked on data")
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.log(error))
    }

    const navMenu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/shop/salad">Our Shop</Link></li>
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        
        {
            user ? <>
                {/* <li><Link to="/login">Login</Link></li> */}
                
                <li><Link to="/">{user?.displayName}</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>

            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
        <li>
            <Link to={`/dashboard/cart`}>
                <button className="">
                    <div className="text-3xl relative">
                        <IoCartOutline />
                    </div>
                    <div className="badge badge-secondary absolute top-0">{cart.length}</div>
                </button>
            </Link>
        </li>
    </>
    // console.log(user)


    const [navSize, setNavSize] = useState("10rem");
    const [navColor, setNavColor] = useState("transparent");

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor("rgba(51, 51, 50, 0.5)") : setNavColor("rgba(51, 51, 50, 0.5)");
        window.scrollY > 10 ? setNavSize("5rem") : setNavSize("5rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <div className="bg-navbar text-white" style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
            opacity: 1,
        }}>
            <div className="max-w-6xl mx-auto">
                <div className="navbar z-10">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    navMenu
                                }
                            </ul>
                        </div>
                        <Link className="btn btn-ghost text-xl">
                            <img src={logo} className="h-10 w-full" alt="" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navMenu
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;