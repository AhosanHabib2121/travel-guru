import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
    const liStyle = {
        marginRight: '40px',
        color: '#fff'
    }
    const navLink = <>
        <li style={liStyle}><NavLink to='/'>Home</NavLink></li>
        <li style={liStyle}><NavLink to='/destination'>Destination</NavLink></li>
        <li style={liStyle}><NavLink to='/blog'>Blog</NavLink></li>
        <li style={liStyle}><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className="navbar  py-7">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                   {navLink}
                </ul>
                </div>
                {/* project logo */}
                <img src={logo} className=" w-40 mr-20" alt="not found" />
                <input type="text" placeholder=" search your destination" className="input border border-white text-white w-full b bg-[#9b9b9b7e]" />
            </div>
            
            <div className="navbar-end gap-5">
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 ">
                        {navLink}
                    </ul>
                </div>
                <Link to='/login' className=" px-6 py-2 rounded-lg cursor-pointer border-[#d98908]  hover:bg-[#d98908] bg-[#F9A51A] font-semibold text-lg normal-case">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;