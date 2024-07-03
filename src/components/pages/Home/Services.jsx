import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { FaProjectDiagram } from 'react-icons/fa';
import serviceIcon from '../../../assets/icon/service.png';
import './Services.css';
import '../../../hover-min.css';
import web from '../../../assets/icon/web.png';
import uiDesign from '../../../assets/icon/uiDesign.png';
import wordpress from '../../../assets/icon/wordpress.png';
import html from '../../../assets/icon/html.png';
import desktop from '../../../assets/icon/desktop.png';
import graphics from '../../../assets/icon/graphics.png';


const Services = () => {
    // const sectionIcon = <>
    //     <FaProjectDiagram></FaProjectDiagram>
    // </>
    return (
        <div>
            <SectionTitle subHeading={"What can i do for you?"} heading={"SERVICES I WILL PROVIDE"} sectionLogo={serviceIcon}></SectionTitle>
            <div>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="w-full">
                            <div className="service-card hvr-float">
                                <div className='flex justify-center'>
                                    <img className="card-icon rotate-icon" src={web} alt="" />
                                </div>
                                <h3 className="service-card-title">Web Development</h3>
                                <p className='text-base'>Get the best Web Development service And, I won't leave you till your satisfaction. </p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="service-card hvr-float">
                                <div className='flex justify-center'>
                                    <img className="card-icon rotate-icon" src={uiDesign} alt="" />
                                </div>
                                <h3 className="service-card-title">UI / UX Design</h3>
                                <p className='text-base'>Get the best UI / UX Design, I won't leave you till your satisfaction. </p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="service-card hvr-float">
                                <div className='flex justify-center'>
                                    <img className="card-icon rotate-icon" src={wordpress} alt="" />
                                </div>
                                <h3 className="service-card-title">Wordpress Development</h3>
                                <p className='text-base'>You can get Best Website with Custom Wordpress Theme or Premium Theme. </p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="service-card hvr-float">
                                <div className='flex justify-center'>
                                    <img className="card-icon rotate-icon" src={html} alt="" />
                                </div>
                                <h3 className="service-card-title">PSD to HTML</h3>
                                <p>I will convert your dream PSD/XD/FIGMA/PDF design to HTML. </p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="service-card hvr-float">
                                <div className='flex justify-center'>
                                    <img className="card-icon rotate-icon" src={desktop} alt="" />
                                </div>
                                <h3 className="service-card-title">Desktop Application</h3>
                                <p className='text-base'>Get multi-featured Desktop Application for Your Company. </p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="service-card hvr-float">
                                <div className='flex justify-center'>
                                    <img className="card-icon rotate-icon" src={graphics} alt="" />
                                </div>
                                <h3 className="service-card-title">Graphics Design</h3>
                                <p className='text-base'>I will help you to make your dream come true.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;