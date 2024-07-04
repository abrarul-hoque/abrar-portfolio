import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const Header = () => {
    const navLinks = <>
        <li className='mr-2'> <NavLink to="/">Home</NavLink></li>
        <li className='mr-2'> <HashLink to="/#projects">Projects</HashLink></li>
        <li className='mr-2'> <HashLink to="/#services">Services</HashLink></li>
        <li className='mr-2'> <HashLink to="/#skills">Skills</HashLink></li>
        <li className='mr-2'> <NavLink to="/about">About Me</NavLink></li>
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
                            className="menu menu-sm dropdown-content bg-[#001d52] border-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
                    <Link to="https://www.upwork.com/freelancers/~01418645febdb5da8d" target='_blank' className='btn hireBtn'>Hire Me</Link>
                    {/* <a className="btn">Hire Me</a> */}
                </div>
            </div>
        </div>
    );
};

export default Header;