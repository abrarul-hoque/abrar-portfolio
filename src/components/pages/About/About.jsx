import abrarImg from '../../../assets/image/abrar.jpg';

const About = () => {
    return (
        <div className='max-w-6xl mx-auto my-8'>
            <h1 className='text-center text-3xl lg:text-4xl mb-8 font-bold'>About Me</h1>
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='w-full lg:w-1/2'>
                    <h4 className='text-center text-2xl my-4 font-semibold'>Who I am?</h4>
                    <div className="divider border-b-2 border-[#676767]"></div>
                    <p className='text-base text-justify'>
                        Hi! I'm <span className='font-semibold'>Mohammad Abrarul Hoque Jubair</span>, <br /> A passionate web developer with a strong foundation in modern web technologies. Since January 2020, I have been dedicated to learning and mastering web development, honing my skills in HTML, CSS, Bootstrap, TailwindCSS, JavaScript, ES6, React, Node, Express, and Firebase. I hold a diploma in engineering from Chattogram Polytechnic Institute and a bachelor's degree from Islamic Arabic University. Currently, I am pursuing a B.Sc. in Computer Science and Engineering at the University of Creative Technology Chittagong. My enthusiasm for JavaScript and modern technologies drives my commitment to creating intuitive and engaging web applications. One of my notable projects, SurveyMaster, showcases my ability to design and implement comprehensive web solutions. I am excited to continue my journey as a Junior Frontend Developer, contributing to innovative projects and enhancing user experiences.
                    </p>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center w-8/12 mx-auto'>
                        <img src={abrarImg} className=' rounded-xl grayscale hover:grayscale-0 hvr-float' alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;