import { Link } from "react-router-dom";
import NavbarLR from "../../components/header/NavbarLR";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className=" px-28 pb-20">
            {/* navbarLR here */}
            <NavbarLR />
            {/* form area here */}
            <div className=" mt-10">
                <div className="card max-w-xl w-full mx-auto border border-slate-300">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <form >
                            <div className="form-control py-5">
                                <input type="email" name="email" placeholder="Email" className=" border-[#C5C5C5] border-b-2 placeholder-black placeholder:text-base placeholder: font-medium pb-2 focus:outline-none" required />
                            </div>
                            <div className="form-control py-2">
                                <input type="password" name="password" placeholder="password" className="border-[#C5C5C5] border-b-2 placeholder-black placeholder:text-base placeholder: font-medium pb-2 focus:outline-none" required />
                                <div  className=" flex items-center  justify-between mt-2">
                                    <div>
                                        <input type="checkbox" name="remember" className=" mr-2" id="rememberMe" />
                                        <label htmlFor="rememberMe"  className=" text-base font-medium">Remember Me</label>
                                    </div>
                                     <label className="label">
                                        <a href="#" className=" text-[#F9A51A] text-base font-medium">Forgot password?</a>
                                    </label>   
                                </div>
                            </div>
                            <div className="form-control mt-6">
                            <button className="rounded-lg cursor-pointer border-[#d98908]  hover:bg-[#d98908] bg-[#F9A51A] font-semibold text-lg normal-case px-4 py-2">Login</button>
                            </div>
                        </form>
                        <div className=" text-center mt-2">
                            <h4>Don’t have an account?<Link to='/register' className="  hover:text-[#d98908] text-[#F9A51A]"> Create an account</Link></h4>
                        </div>
                    </div>
                </div>
                {/* login with facebook and google click button here  */}
                <div className=" max-w-md w-full mx-auto mt-8 space-y-4">
                    {/* facebook button */}
                    <div className=" relative">
                        <BiLogoFacebookCircle className=" text-3xl absolute top-2 left-2 text-cyan-600"/>
                        <button className="btn bg-[#fff] outline-1 w-full normal-case rounded-full border-gray-400">Continue with Facebook</button>
                    </div>
                    {/* google button */}
                    <div className=" relative">
                        <FcGoogle className=" text-3xl absolute top-2 left-2 text-cyan-600"/>
                        <button className="btn bg-[#fff] outline-1 w-full normal-case rounded-full border-gray-400">Continue with Google</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;