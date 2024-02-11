import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="">
            <div className="grid md:grid-cols-2">
                <div className="bg-[#1F2937] text-white text-center pt-28 pb-20">
                    <div className="">
                        <div className="">
                            <h2 className="text-xl font-bold">CONTACT US</h2>
                        </div>
                        <div className="py-5">
                            <p>123 ABS Street, Uni 21, Bangladesh <br />
                                +88 123456789 <br />
                                Mon - Fri: 08:00 - 22:00 <br />
                                Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#111827] text-white pt-28 pb-20">
                    <div className="text-center">
                        <h2 className="text-xl font-bold">Follow US</h2>
                        <p>Join us on social media</p>
                    </div>
                    <div className="flex justify-center my-5 text-3xl gap-7">
                        <Link to="#"><FaFacebookF /></Link>
                        <Link to="#"><FaInstagram /></Link>
                        <Link to="#"><FaTwitter /></Link>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center p-4 bg-black text-white">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Ahsan Habib</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;