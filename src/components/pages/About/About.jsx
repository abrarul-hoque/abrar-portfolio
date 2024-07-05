import abrarImg from '../../../assets/image/abrar.jpg';
import './About.css';
import uctcLogo from '../../../assets/icon/uctc.png';
import eduImage from '../../../assets/image/eduImage.json';
import Lottie from 'react-lottie';
import cpiLogo from '../../../assets/icon/cpi.png';


const About = () => {
    const avater = {
        loop: true,
        autoplay: true,
        animationData: eduImage,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='max-w-6xl mx-auto my-8'>
            <h1 className='text-center text-3xl lg:text-4xl lg:mb-8 font-bold'>About Me</h1>
            <div className='flex flex-col lg:flex-row items-center '>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center w-8/12 mx-auto'>
                        <img src={abrarImg} className='mt-4 rounded-xl  hvr-float about-img' alt="" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 p-4'>
                    <h4 className='text-center text-xl lg:text-2xl my-2 mb-0 lg:my-4 font-semibold'>Who I am?</h4>
                    <div className="divider border-b-2 mt-0 border-[#676767]"></div>
                    <p className='lg:text-base text-justify'>
                        Hi! I'm <span className='font-semibold'>Mohammad Abrarul Hoque Jubair</span>, <br /> A passionate web developer with a strong foundation in modern web technologies. Since January 2020, I have been dedicated to learning and mastering web development, honing my skills in HTML, CSS, Bootstrap, TailwindCSS, JavaScript, ES6, React, Node, Express, and Firebase. I hold a diploma in engineering from Chattogram Polytechnic Institute and a bachelor's degree from Islamic Arabic University. Currently, I am pursuing a B.Sc. in Computer Science and Engineering at the University of Creative Technology Chittagong. My enthusiasm for JavaScript and modern technologies drives my commitment to creating intuitive and engaging web applications. One of my notable projects, SurveyMaster, showcases my ability to design and implement comprehensive web solutions. I am excited to continue my journey as a Junior Frontend Developer, contributing to innovative projects and enhancing user experiences.
                    </p>
                </div>
            </div>

            <h1 className='text-center text-3xl lg:text-4xl mt-8  lg:mb-8 font-bold'>Education</h1>
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='w-full lg:w-1/2 mb-4'>
                    <Lottie
                        options={avater}
                        height={300}
                        width="auto"
                    />
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex  items-center mb-5 border p-4 rounded-md m-2'>
                        <div className='w-4/12 lg:w-2/12 p-4'>
                            <img src={uctcLogo} alt="" />
                        </div>
                        <div className='w-8/12 lg:w-10/12'>
                            <p className='text-center text-gray-400'>January'2023 - December'2026</p>
                            <h1 className='text-xl lg:text-2xl font-bold'>B.Sc. in Computer Science and Engineering</h1>
                            <p className='text-base'>University of Creative Technology Chittagong</p>
                        </div>
                    </div>
                    {/* <div className="divider border-b mt-0 border-[#676767]"></div> */}
                    <div className='flex  items-center mb-5 border p-4 rounded-md m-2'>
                        <div className='w-4/12 lg:w-2/12 p-4'>
                            <img src={cpiLogo} alt="" />
                        </div>
                        <div className='w-8/12 lg:w-10/12'>
                            <p className='text-center text-gray-400'>August'2017 - July'2021</p>
                            <h1 className='text-xl lg:text-2xl font-bold'>Diploma in Engineering (Computer Technology)</h1>
                            <p className='text-base'>Chattogram Polytechnic Institute, BTEB</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;