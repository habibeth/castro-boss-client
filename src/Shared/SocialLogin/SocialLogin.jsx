import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import useAuth from "../../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn=()=>{
        // console.log("google sign in")
        googleSignIn()
        .then(res=> {
            const user = res.user;
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(error=> console.log(error))
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