import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, [])
  return (
    <div data-aos="fade-up"
      data-aos-anchor-placement="center-center" className="hero bg-base-200 h-[480px]">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">About Us </h1>
          <p className="py-6">
            The Winter Donation web application is a simple and easy-to-use platform that helps people donate winter clothing to those in need across Bangladesh.
            When the weather gets colder, thousands of vulnerable people, especially in rural and low-income areas, struggle to stay warm because they don’t have enough warm clothing.
            This website will connect donors with volunteers for these people, making it easy for users to donate clothes and bring warmth to those who need it most. Users will see the donation campaign and browse details after login and can donate via the form.

          </p>
          <Link to="/donation"><button className="btn bg-blue-200 text-blue-950 font-bold">Donate Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;