import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';
import { toast } from 'react-toastify';

const Login = () => {
    const [msg, setmsg] = useState();
    const { Currentuser,loggedInUser , singIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handlelogin=e =>{  
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        singIn(email, password)
        .then((res)=>{
            console.log('Successfully ', res.user)
            
            // toast('User Successfully login') 
            e.target.reset();
            navigate(location?.state ? location.state : "/")    
        })
        .catch((err)=>{
            setmsg(err.message)
            // console.log(err.message)
        })
        
    }
    const handleLoginbtn=() =>{
        
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                name='email'
                                type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                name='password'
                                type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button 
                                onClick={handleLoginbtn}
                                className="btn btn-primary">Login</button>
                            </div>
                            <div className='flex  justify-start'>
                               <p>New here ? <Link to='/register'>Register</Link></p> 
                            </div>
                            <div>
                                <p className='text-red-500 font-semibold text-sm'>{msg}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;