import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useEffect, useState } from "react";
import './Navbar.css'

const Navbar = () => {
    const navMenu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
    </>
    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("rgba(51, 51, 50, 0.5)") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
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