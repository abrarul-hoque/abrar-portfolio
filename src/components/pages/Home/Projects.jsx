import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import projectIcon from '../../../assets/icon/project.png';
import './Projects.css';
import fhdc from '../../../assets/image/fhdc.jpg';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { PiCursorClickFill } from "react-icons/pi";
import isfbd from '../../../assets/image/isfbd.jpg';
import jobportal from '../../../assets/image/job-portal.png';
import surveymaster from '../../../assets/image/surveymaster.png';
import popit from '../../../assets/image/popit.jpg';
import menufast from '../../../assets/image/menufast.jpg';
import homesmart from '../../../assets/image/home-smart.jpg';
import uktell from '../../../assets/image/uktell.png';
import quizpulse from '../../../assets/image/quizpulse.jpg';


const Projects = () => {
    return (
        <div className='mb-8 px-4' id="projects">
            <SectionTitle heading={"Projects"} subHeading={"What i have made"} sectionLogo={projectIcon}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* Single Project */}
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl h-full" style={{ backgroundImage: `url(${quizpulse})`, }}>
                        <div className="hero-overlay  rounded-xl bg-opacity-70"></div>
                        <div className="hero-content pt-28 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 text-3xl font-bold">QuizPulse</h1>
                                <p className="mb-3 text-base">
                                    An Interactive Quiz Platform
                                </p>
                                <div className='project-action '>
                                    <a href="https://github.com/mdmarufhossianbd/quizpluse" target='_blank'><button className='btn btn-sm text-[#002366] mr-2'><FaGithub /> Code</button></a>
                                    <a href="https://quizpluse.vercel.app/" target='_blank'><button className='btn btn-sm text-[#002366]'><PiCursorClickFill />
                                        Live</button></a>
                                    {/* <button className="btn btn-primary">Live</button> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Project */}
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${fhdc})`, }}>
                        <div className="hero-overlay  rounded-xl bg-opacity-70"></div>
                        <div className="hero-content pt-28 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 text-3xl font-bold">Dr. Fazlul Hazera Degree college</h1>
                                <p className="mb-3 text-base">
                                    An Institute Management Website (WP)
                                </p>
                                <div className='project-action '>
                                    <a href="https://drfhc.edu.bd/" target='_blank'><button className='btn btn-sm text-[#002366]'><PiCursorClickFill />
                                        Live</button></a>
                                    {/* <button className="btn btn-primary">Live</button> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Project */}
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${isfbd})`, }}>
                        <div className="hero-overlay rounded-xl bg-opacity-70"></div>
                        <div className="hero-content pt-28 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 text-3xl font-bold">International Student Forum Bangladesh</h1>
                                <p className="mb-3 text-base">
                                    A Gorgeous Consultancy Website
                                </p>
                                <div className='project-action '>
                                    <a href="https://github.com/abrarul-hoque/isfbd" target='_blank'><button className='btn btn-sm text-[#002366] mr-2'><FaGithub /> Code</button></a>
                                    <a href="https://isfbd.netlify.app/" target='_blank'><button className='btn btn-sm text-[#002366]'><PiCursorClickFill /> Live</button></a>
                                    {/* <button className="btn btn-primary">Live</button> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Project */}
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${surveymaster})`, }}>
                        <div className="hero-overlay rounded-xl bg-opacity-70"></div>
                        <div className="hero-content pt-28 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 mt-9 text-3xl font-bold">Survey Master</h1>
                                <p className="mb-3 text-base">
                                    A Gorgeous Survey Website with React
                                </p>
                                <div className='project-action '>
                                    <a href="https://github.com/abrarul-hoque/survey-master-client" target='_blank'><button className='btn btn-sm text-[#002366] mr-2'><FaGithub /> Code</button></a>
                                    <a href="https://survey-master.netlify.app/" target='_blank'><button className='btn btn-sm text-[#002366]'><PiCursorClickFill /> Live</button></a>
                                    {/* <button className="btn btn-primary">Live</button> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Project */}
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${jobportal})`, }}>
                        <div className="hero-overlay rounded-xl bg-opacity-70"></div>
                        <div className="hero-content pt-28 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 mt-9 text-3xl font-bold">Job Portal</h1>
                                <p className="mb-3 text-base">
                                    A Gorgeous Job Portal Website with React
                                </p>
                                <div className='project-action '>
                                    <a href="https://github.com/abrarul-hoque/job-portal-client" target='_blank'><button className='btn btn-sm text-[#002366] mr-2'><FaGithub /> Code</button></a>
                                    <a href="https://job-portal-abrar.netlify.app/" target='_blank'><button className='btn btn-sm text-[#002366]'><PiCursorClickFill /> Live</button></a>
                                    {/* <button className="btn btn-primary">Live</button> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Project */}
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${menufast})`, }}>
                        <div className="hero-overlay rounded-xl bg-opacity-70"></div>
                        <div className="hero-content pt-28 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 mt-3 text-3xl font-bold">Menufast</h1>
                                <p className="mb-3 text-base">
                                    A HTML Page (Including animation) Converted from PDF
                                </p>
                                <div className='project-action '>
                                    <a href="https://menufast.netlify.app/" target='_blank'><button className='btn btn-sm text-[#002366]'><PiCursorClickFill /> Live</button></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Project */}
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${uktell})`, }}>
                        <div className="hero-overlay rounded-xl bg-opacity-70"></div>
                        <div className="hero-content pt-28 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 mt-3 text-3xl font-bold">UK-Tell</h1>
                                <p className="mb-3 text-base">
                                    A HTML Page (Including animation) Converted from PSD
                                </p>
                                <div className='project-action '>
                                    <a href="https://uk-tell.netlify.app/" target='_blank'><button className='btn btn-sm text-[#002366]'><PiCursorClickFill /> Live</button></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Project */}
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${popit})`, }}>
                        <div className="hero-overlay rounded-xl bg-opacity-70"></div>
                        <div className="hero-content pt-28 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 mt-3 text-3xl font-bold">Popit-Mobile</h1>
                                <p className="mb-3 text-base">
                                    UK Based Mobile Operator Website (PSD to HTML)
                                </p>
                                <div className='project-action '>
                                    <a href="https://popit-a.netlify.app/" target='_blank'><button className='btn btn-sm text-[#002366]'><PiCursorClickFill /> Live</button></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Project */}
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${homesmart})`, }}>
                        <div className="hero-overlay rounded-xl bg-opacity-70"></div>
                        <div className="hero-content pt-28 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 mt-3 text-3xl font-bold">Home-Smart</h1>
                                <p className="mb-3 text-base">
                                    A HTML Page (Including animation) Converted from PDF
                                </p>
                                <div className='project-action '>
                                    <a href="https://home-smart.netlify.app/" target='_blank'><button className='btn btn-sm text-[#002366]'><PiCursorClickFill /> Live</button></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;