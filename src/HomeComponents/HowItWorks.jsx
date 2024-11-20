import React from 'react';

const HowItWorks = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">How do we work ?</h1>
            <p className="mb-5">
            This website will connect donors with volunteers for these people, making it easy for users to donate clothes and bring warmth to those who need it most. Users will see the donation campaign and browse details after login and can donate via the form. 

            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default HowItWorks;