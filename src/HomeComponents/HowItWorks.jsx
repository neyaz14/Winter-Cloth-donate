import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import slider3 from '../assets/slider3.jpg'
import Aos from 'aos';
import "aos/dist/aos.css"
const HowItWorks = () => {
  useEffect(() => {
    Aos.init({duration:1200});
}, [])
    return (
        <div 
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${slider3})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div data-aos="zoom-in-down" className="hero-content text-neutral-content text-center" >
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-blue-50">How do we work ?</h1>
            <p className="mb-5 font-medium ">
            This website will connect donors with volunteers for these people, making it easy for users to donate clothes and bring warmth to those who need it most. Users will see the donation campaign and browse details after login and can donate via the form. 

            </p>
            <button className="btn bg-blue-100 text-blue-950 font-bold"><Link to="/howToHelp">See how to help us</Link></button>
          </div>
        </div>
      </div>
    );
};

export default HowItWorks;