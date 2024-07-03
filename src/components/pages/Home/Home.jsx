import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto '>
            <Banner></Banner>
            <Projects></Projects>
            <Services></Services>
        </div>
    );
};

export default Home;