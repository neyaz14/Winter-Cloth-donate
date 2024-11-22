import React from 'react';
import HomeLayout from '../Pages/HomeLayout';
import { createBrowserRouter } from 'react-router-dom';

import HowToHelp from '../Pages/HowToHelp';
import Donation from '../Pages/Donation';
import HomePage from '../Pages/HomePage';
import Dashboard from '../Private/Dashboard';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import PrivateRoute from '../Private/PrivateRoute';
import UpdateProfile from '../Private/UpdateProfile';
import DonationDetails from '../Private/DonationDetails';
import ForgetPW from '../Authentication/ForgetPW';
import Error from '../Pages/Error';
const Route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement:<Error></Error>,
      children:[{
        path:'/',
        element: <HomePage></HomePage>
      },
      {
        path: "/howToHelp",
        element: <HowToHelp></HowToHelp>,
        
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: ()=>fetch('/data.json')
      },{
          path: '/dashboard',
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path:'/donation/:campid',
        element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
        loader :()=>fetch('/data.json')
      },
      {
        path:'/login',
        element: <Login></Login>
      },{
        path: '/forgetpw',
        element:<ForgetPW></ForgetPW>
      },{
        path:'/register',
        element: <Register></Register>
      },{
        path:'/updateprofile',
        element: <UpdateProfile></UpdateProfile>
      }
    ]
    }
  ]);
  
  export default Route;
  