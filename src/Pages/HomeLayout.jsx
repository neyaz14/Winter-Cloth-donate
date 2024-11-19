import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HomePage from './HomePage';
import { Outlet } from 'react-router-dom';
const HomeLayout = () => {
    return (
        <div >
            <div className='w-11/12 mx-auto'>


                <Navbar ></Navbar>
                <div className='h-2'>

                </div>

                <Outlet></Outlet>

                <div className='h-14'>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;