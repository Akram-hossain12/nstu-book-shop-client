import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li className=' text-2xl'><Link to="/addbook">Add Book</Link></li>
        <li className='text-2xl lg:my-5'><Link to="/">Book List</Link></li> 
        <li className='text-2xl '><Link to="/login">Login</Link></li>

    </React.Fragment>
    return (
        <div>
            <div className="navbar bg-black">
              
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {menuItems}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu lg:mt-40 px-1 border-2 border-sky-500 rounded-lg">
                        {menuItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;