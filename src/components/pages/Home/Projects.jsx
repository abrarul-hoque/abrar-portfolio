import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import projectIcon from '../../../assets/icon/project.png';
import './Projects.css';
import fhdc from '../../../assets/image/fhdc.jpg';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='mb-8'>
            <SectionTitle heading={"Projects"} subHeading={"What i have made"} sectionLogo={projectIcon}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* Single Project */}
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${fhdc})`, }}>
                        <div className="hero-overlay rounded-xl bg-opacity-70"></div>
                        <div className="hero-content py-12 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 text-3xl font-bold">Dr. Fazlul Hazera Degree college</h1>
                                <p className="mb-5">
                                    An Institute Management Website (WP)
                                </p>
                                <div className='project-action '>
                                    <a href="https://drfhc.edu.bd/" target='_blank'><button className='btn text-[#002366]'>Live</button></a>
                                    {/* <button className="btn btn-primary">Live</button> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${fhdc})`, }}>
                        <div className="hero-overlay rounded-xl bg-opacity-60"></div>
                        <div className="hero-content py-12 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 text-3xl font-bold">Dr. Fazlul Hazera Degree college</h1>
                                <p className="mb-5">
                                    An Institute Management Website (WP)
                                </p>
                                <div className='project-action '>
                                    <button className="btn btn-primary">Live</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${fhdc})`, }}>
                        <div className="hero-overlay rounded-xl bg-opacity-60"></div>
                        <div className="hero-content py-12 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 text-3xl font-bold">Dr. Fazlul Hazera Degree college</h1>
                                <p className="mb-5">
                                    An Institute Management Website (WP)
                                </p>
                                <div className='project-action '>
                                    <button className="btn btn-primary">Live</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${fhdc})`, }}>
                        <div className="hero-overlay rounded-xl bg-opacity-60"></div>
                        <div className="hero-content py-12 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 text-3xl font-bold">Dr. Fazlul Hazera Degree college</h1>
                                <p className="mb-5">
                                    An Institute Management Website (WP)
                                </p>
                                <div className='project-action '>
                                    <button className="btn btn-primary">Live</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${fhdc})`, }}>
                        <div className="hero-overlay rounded-xl bg-opacity-60"></div>
                        <div className="hero-content py-12 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 text-3xl font-bold">Dr. Fazlul Hazera Degree college</h1>
                                <p className="mb-5">
                                    An Institute Management Website (WP)
                                </p>
                                <div className='project-action '>
                                    <button className="btn btn-primary">Live</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border-4 border-white hover:border-red-500 rounded-xl single-project">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${fhdc})`, }}>
                        <div className="hero-overlay rounded-xl bg-opacity-60"></div>
                        <div className="hero-content py-12 text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-4 text-3xl font-bold">Dr. Fazlul Hazera Degree college</h1>
                                <p className="mb-5">
                                    An Institute Management Website (WP)
                                </p>
                                <div className='project-action '>
                                    <button className="btn btn-primary">Live</button>
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