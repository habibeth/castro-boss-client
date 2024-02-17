import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import useAuth from "../../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic()
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        // console.log("google sign in")
        googleSignIn()
            .then(async (res) => {
                const user = res.user;
                if (user) {
                    const userInfo = {
                        name: user?.displayName,
                        email: user?.email
                    }
                    const res = await axiosPublic.post('/users', userInfo);
                    if (res.data) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your Account Login Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });

                    }
                    navigate(from, { replace: true })
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <p className="text-center mb-5">Or sign in with</p>
            <div className="flex gap-7 items-center justify-center text-3xl">
                <button className="border border-black rounded-full p-2">
                    <FaFacebookF />
                </button>
                <button onClick={handleGoogleSignIn} className="border border-black rounded-full p-2">
                    <FaGoogle />
                </button>
                <button className="border border-black rounded-full p-2">
                    <FaGithub />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;