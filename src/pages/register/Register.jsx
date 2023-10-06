import { Link } from "react-router-dom";
import NavbarLR from "../../components/header/NavbarLR";
import { useContext } from "react";
import { AuthContextApi } from "../../authContextAPI/AuthContext";

const Register = () => {
    const { registration, emailVerify } = useContext(AuthContextApi)
    
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        // register here
        registration(email, password)
            .then(result => {
                console.log('Account create successfully')
                // email verify here
                emailVerify()
                    .then(() => {
                        alert('Please check your email and account verified');
                    })
                e.target.reset();
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className=" px-28 pb-20">
            {/* navbarLR here */}
            <NavbarLR />
            {/* form area here */}
            <div className=" mt-10">
                <div className="card max-w-xl w-full mx-auto border border-slate-300">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Create an account</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control py-4">
                                <input type="text" name="name" placeholder="name" className=" border-[#C5C5C5] border-b-2 placeholder-black placeholder:text-base placeholder: font-medium pb-2 focus:outline-none" required />
                            </div>
                            <div className="form-control py-4">
                                <input type="email" name="email" placeholder="Email" className=" border-[#C5C5C5] border-b-2 placeholder-black placeholder:text-base placeholder: font-medium pb-2 focus:outline-none" required />
                            </div>
                            <div className="form-control py-4">
                                <input type="password" name="password" placeholder="password" className="border-[#C5C5C5] border-b-2 placeholder-black placeholder:text-base placeholder: font-medium pb-2 focus:outline-none" required />
                            </div>
                            <div className="form-control mt-6">
                            <button className="rounded-lg cursor-pointer border-[#d98908]  hover:bg-[#d98908] bg-[#F9A51A] font-semibold text-lg normal-case px-4 py-2">Register</button>
                            </div>
                        </form>
                        <div className=" text-center mt-2">
                            <h4>Already have an account?<Link to='/login' className="  hover:text-[#d98908] text-[#F9A51A]">  Login</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;