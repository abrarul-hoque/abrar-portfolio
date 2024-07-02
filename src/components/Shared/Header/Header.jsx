import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const navLinks = <>
        <li className='mr-2'> <NavLink to="/">Home</NavLink></li>
        {/* <li> <NavLink to="/#projects">Projects</NavLink></li>
        <li className='mr-2'> <NavLink to="/#services">Services</NavLink></li>
        <li className='mr-2'> <NavLink to="/#skills">Skills</NavLink></li> */}
        <li className='mr-2'> <NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="navbar navBar">
                <div className="navbar-start">
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
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-xl navBarBrand"><span className='colorText'>Abrarul</span>  Hoque</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='btn hireBtn'>Hire Me</button>
                    {/* <a className="btn">Hire Me</a> */}
                </div>
            </div>
        </div>
    );
};

export default Header;