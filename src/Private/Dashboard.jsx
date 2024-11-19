import React, { useContext, useReducer, useState } from 'react';
import { AuthContext } from '../Provider/Provider';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    const { Currentuser, loggedInUser, userInfo, singOutUser } = useContext(AuthContext);

    const handlesingOut = () => {
        singOutUser();
        <Navigate to='/'></Navigate>
    }
    return (
        <div className='md:w-3/4 mx-auto bg-gray-50 p-8 rounded-2xl'>

            <p className='text-5xl font-bold text-center my-5'>Wellcome {Currentuser.displayName}!</p>
            <div className='md:flex justify-between items-center my-4 text-center'>
                <div className='space-y-4 text-left'>
                    <p className='text-2xl font-semibold'>User Name : {Currentuser.displayName} </p>
                    <p className='text-2xl'>Email : {Currentuser.email}</p>
                </div>
                <div className='flex justify-center'>
                    <img className='w-28' src={Currentuser.photoURL} alt="User Profile photo" />
                </div>

            </div>
            <div className='flex justify-between px-10 mx-auto mt-6'>
                <button className='btn btn-outline'><Link to='/updateprofile'>Update Profile</Link></button>
                
                    <button onClick={handlesingOut}  className="btn btn-outline">SingOut</button>
                
            </div>
        </div>
    );
};

export default Dashboard;