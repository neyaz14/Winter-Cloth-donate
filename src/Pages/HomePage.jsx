import React from 'react';
import Banner from '../HomeComponents/Banner';
import About from '../HomeComponents/About';
import HowItWorks from '../HomeComponents/HowItWorks';
import SuccessStories from '../HomeComponents/SuccessStories';
import Gallery from '../HomeComponents/Gallery';

const HomePage = () => {
    return (
        <div>
           
            <Banner></Banner>
            <About></About>
            <HowItWorks></HowItWorks>
            <SuccessStories></SuccessStories>
            <Gallery></Gallery>
        
        </div>
    );
};

export default HomePage;