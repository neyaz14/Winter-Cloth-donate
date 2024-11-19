import React, { useContext } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { FaHandsHelping } from "react-icons/fa";
import { AuthContext } from '../Provider/Provider';
const Navbar = () => {
    const { Currentuser, loggedInUser, singOutUser } = useContext(AuthContext);
    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donation'>Donation</NavLink></li>
        <li><NavLink to='/campaigns'>Campaigns</NavLink></li>



        <li><NavLink to='/howToHelp'>How to help</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>



    </>

    
    return (
        <div className="navbar   z-50 flex justify-between">

            <div className="navbar-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost  text-xl flex items-center">
                    <FaHandsHelping />
                    Cloth Donate</a>
            </div>

            <div className='flex justify-between'>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {Links}

                    </ul>
                </div>

                <div>
                    {
                        Currentuser
                            ?
                           
                            <>
                                {/* <p>{Currentuser.displayName}</p> */}
                                <img className='w-12' src={Currentuser.photoURL} alt="" />
                            </>
                            :
                            <div className="navbar-end">
                                <Link to='/login' className="btn btn-outline">Login</Link>
                            </div>
                    }
                </div>

            </div>

        </div>
    );
};

export default Navbar;