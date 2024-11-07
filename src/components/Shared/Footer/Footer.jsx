import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import gmail from '../../../assets/icon/gmail.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className='border-t-2 border-gray-600'>

            <footer className="footer footer-center bg-[#002366] text-white rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <Link to="/about">
                        <a className="link link-hover">About Me</a>
                    </Link>
                    <Link to="/contact">
                        <a className="link link-hover">Contact</a>
                    </Link>

                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <div className='flex social-link gap-5'>
                            <li>
                                <a className="flex justify-center" href="https://api.whatsapp.com/send?phone=8801846112525" target="_blank">
                                    <FaWhatsapp className="whatsapp-link"></FaWhatsapp>
                                </a>
                            </li>
                            <li>
                                <a className="flex justify-center" href="https://www.linkedin.com/in/abrarul-hoque/" target="_blank">
                                    <FaLinkedinIn className='Lnkdin-link'></FaLinkedinIn>
                                </a>
                            </li>
                            <li>
                                <a className="flex justify-center" href="https://www.facebook.com/jubairctg99/" target="_blank">
                                    <FaFacebook className='fb-link'></FaFacebook>
                                </a>
                            </li>
                            <li>
                                <a className="flex justify-center" href="https://github.com/abrarul-hoque" target="_blank">
                                    <FaGithub className='ghub-link'></FaGithub>
                                </a>
                            </li>
                            <li>
                                <a className="flex justify-center" href="mailto:jubairctg99@gmail.com?Subject=Hello_Dear" target="_blank">
                                    <img className="mail-link" src={gmail} alt="" /></a>
                            </li>
                        </div>
                    </div>
                </nav>

                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <a className='hover:underline' href="https://www.linkedin.com/in/abrarul-hoque/" target="_blank">Abrarul Hoque</a></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;