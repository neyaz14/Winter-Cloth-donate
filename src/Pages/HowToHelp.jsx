import React from 'react';

import 'animate.css';

const HowToHelp = () => {
    return (
        <div>
            <div >
                <div className='my-6'>
                    <p className= 'animate__animated animate__bounce text-blue-950 text-5xl font-bold text-center'>Ways You can help</p>
                </div>
                <div className='md:grid  gap-6 md:grid-cols-4  py-3 animate__animated animate__pulse'>

                    <div className='my-5  rounded-xl p-7 bg-sky-50 text-left col-start-1 col-end-3'>
                        <h1 className='text-blue-950 text-2xl font-semibold '>By donating warm clothes</h1>
                        <p className='text-blue-950 font-medium opacity-60'>In our many campaings you can donate your used clothes, jackets, blankets etc. Our volunteers are ready to collects your donation </p>
                    </div>

                    <div className='my-5  rounded-xl p-7 bg-sky-50 text-left col-start-3 col-end-5'>
                        <h1 className='text-blue-950 text-2xl font-semibold '>You can be volunteer</h1>
                        <p className='text-blue-950 font-medium opacity-60'> You can be one of us to contribute in the socity. You have to fill up the form . And you have to be ready so that when we will call you you can jump to hlep .  </p>
                    </div>

                    <div className='my-5 rounded-xl p-7 bg-sky-50 text-left col-start-2 col-end-4'>
                        <h1 className='text-blue-950 text-2xl font-semibold '>Spread Awareness </h1>
                        <p className='text-blue-950 font-medium opacity-60'>It's not important that you have to one of us or donate in our campaings to help the poor.You can spread awareness in the socity , encourage people to help the poor </p>
                    </div>
                </div>

            </div>

            <div className=''>
                <div className='my-6'>
                    <p className='text-blue-950 text-5xl font-bold text-center'>Don't know how  donate ?</p>
                </div>
                <div className='border opacity-95 p-5 animate__animated animate__pulse'>
                    <h1 className='font-bold   text-blue-950 text-4xl'>Follow the steps</h1>
                    <p className='text-left text-xl md:text-2xl text-blue-900 my-10 font-medium '> <span className='text-xl md:text-3xl bg-blue-100 p-2 md:p-3 rounded-r-full text-blue-950 font-semibold pr-4 '>First step    </span> Donors register and log in.</p>
                    <p className='text-left text-xl md:text-2xl text-blue-900 my-10 font-medium '> <span className='text-xl md:text-3xl bg-blue-100 p-2 md:p-3 rounded-r-full text-blue-950 font-semibold pr-4'>Second step   </span> Select a campaign to support.</p>
                    <p className='text-left text-xl md:text-2xl text-blue-900 my-10 font-medium '> <span className='text-xl md:text-3xl bg-blue-100 p-2 md:p-3 rounded-r-full text-blue-950 font-semibold pr-4'>Third step    </span> Fill out the donation form.</p>
                    <p className='text-left text-xl md:text-2xl text-blue-900 my-10 font-medium '> <span className='text-xl md:text-3xl bg-blue-100 p-2 md:p-3 rounded-r-full text-blue-950 font-semibold pr-4'>Fourth step   </span> Our team coordinates the collection and distribution.</p>
                    <p className='text-left text-xl md:text-2xl text-blue-900 my-10 font-medium '> <span className='text-xl md:text-3xl bg-blue-100 p-2 md:p-3 rounded-r-full text-blue-950 font-semibold pr-4'>Fifth step    </span> Receive updates on how your donation made an impact.</p>

                </div>
            </div>

        </div>
    );
};

export default HowToHelp;