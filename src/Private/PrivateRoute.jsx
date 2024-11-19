import React, {  useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const disiredLocation = location.pathname;
    const {Currentuser,loggedInUser, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-ball loading-lg"></span>
    }
    else if(loggedInUser){
        return children;
        
    }
    return (
       <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;