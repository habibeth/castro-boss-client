import { useForm } from 'react-hook-form';
import signUpBg from '../../assets/others/authentication.png'
import sideImage from '../../assets/others/authentication2.png'
import useAuth from '../../hook/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hook/useAxiosPublic'

const SignUp = () => {
    const { createUser, updateUserInfo } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        const email = data.email;
        const password = data.password;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateUserInfo(data.name, data.photo)
                    .then(async () => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        const res = await axiosPublic.post('/users', userInfo);
                        if (res.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your Account Created Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });

                            navigate('/')
                        }
                    })
            })
            .catch(err => console.log(err))

    };
    return (
        <div className="hero min-h-screen" style={{ background: `url(${signUpBg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center mx-10 my-32 p-20 shadow-xl" style={{ background: `url(${signUpBg})` }}>
                <div className="text-center lg:text-left">
                    <img src={sideImage} alt="" className='w-full' />
                </div>
                <div className="card shrink-0 w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name")} placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo")} placeholder="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className='btn bg-[#D1A054] text-white w-full'>Sign Up</button>
                        </div>

                        <p className='text-[#D1A054] mb-2 text-center'>Already Have an Account? <Link className='font-bold' to="/login">Go to Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;