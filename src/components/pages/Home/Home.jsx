import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto '>
            <Banner></Banner>
            <div id="projects">
                <Projects></Projects>
            </div>

            <Services></Services>
            <Skills></Skills>
        </div>
    );
};

export default Home;