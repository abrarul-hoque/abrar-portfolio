import bannerImg from '../../../assets/banner-img.png';
import './Banner.css';
import { FaDownload, FaFacebook, FaGit, FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import gmail from '../../../assets/icon/gmail.png';
import { IoMdCloudDownload } from "react-icons/io";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-2 my-2 items-center'>
            <div className='w-full lg:w-6/12 text-center p-2'>
                <h4 className='text-2xl'>Welcome, I'm Abrarul Hoque </h4>
                <h1 className="text-5xl my-3 font-extrabold colorText">Frontend Developer</h1>
                {/* <h6 className="text-base">Expert JavaScript Developer & Innovator in Modern Web Technologies</h6> */}
                <h6 className="text-base">Accomplished JavaScript Developer and Innovator in Modern Web Technologies, renowned for creating sophisticated applications with deep expertise in JavaScript, React and Firebase.</h6>
                <div className='my-8'>
                    <a href="https://drive.google.com/uc?export=download&id=1Ez0jZMyMZ6JkUAezXOFtg0owMuOpjUaF">
                        <button className='btn mr-2'><FaDownload /> Download CV</button>
                    </a>
                    <Link to="/contact" className='btn bg-[#002366] hover:bg-white text-white hover:text-[#002366] border-2'>Contact</Link>
                </div>
            </div>
            <div className='w-full lg:w-5/12 '>
                <img src={bannerImg} alt="" />
            </div>
            <div className='w-1/12 hidden lg:block social-link'>
                <div className="">
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
                        <a className="flex justify-center" href="mailto:abrarulhoque.jubair@gmail.com?Subject=Hello_Dear" target="_blank">
                            <img className="mail-link" src={gmail} alt="" /></a>
                    </li>
                </div>
            </div>


        </div>
    );
};

export default Banner;