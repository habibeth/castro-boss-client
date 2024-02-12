import signUpBg from '../../assets/others/authentication.png'
import sideImage from '../../assets/others/authentication2.png'

const SignUp = () => {
    return (
        <div className="hero min-h-screen" style={{ background: `url(${signUpBg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center mx-10 my-32 p-20 shadow-xl" style={{ background: `url(${signUpBg})` }}>
                <div className="text-center lg:text-left">
                    <img src={sideImage} alt="" className='w-full' />
                </div>
                <div className="card shrink-0 w-1/2">
                    <form className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="button" className='btn py-3 bg-[#D1A054] w-full text-white font-bold rounded-lg' value="Sign Up" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;