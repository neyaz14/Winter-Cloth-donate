import React, { useContext, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
// import ''


const Login = () => {
    const [msg, setmsg] = useState();

    const [eemail, seteemail] = useState('');

    const [showpw, setshowpw] = useState(false);
    const emailRef = useRef();
    const { Currentuser,registerWithGoogle,  loggedInUser, forgetPassword, singIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handlelogin = e => {
        e.preventDefault();
        setmsg('');
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        singIn(email, password)
            .then((res) => {
                console.log('Successfully ', res.user)
                e.target.reset();
                navigate(location?.state ? location.state : "/")
            })
            .catch((err) => {
                setmsg(err.message)

            })
        // e.target.reset();
    }

    const handleForgetPW = () => {
      
        navigate('/forgetpw', { state: { eemail } });
    }
    const handleRegisterGOOGLE = () => {
        registerWithGoogle()
        .then(res=>{setmsg(res.user)
            navigate('/')
        })
        .catch(err=>{setmsg(err.message)})
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen " >
                <ToastContainer />
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
                                    ref={emailRef}
                                    value={eemail}
                                    onChange={(e) => {
                                        seteemail(e.target.value)
                                        console.log(e.target.value)
                                    }}
                                    type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                {/* pw toggle */}
                                {/* <button 
                                onClick={()=>setshowpw(!showpw)}
                                className='btn btn-xs absolute right-2 top-12'>{
                                    showpw ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }</button> */}
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                {/* pw inout */}
                                <input
                                    name='password'
                                    type={!showpw ? "password" : "text"}
                                    placeholder="password" className="input input-bordered" required />
                                {/* forget pw */}
                                <label className="label">
                                    <p onClick={handleForgetPW} className="label-text-alt link link-hover">Forgot password?</p>
                                </label>

                                {/* --------------------------------------------------- */}
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    // onClick={handleLoginbtn}
                                    className="btn btn-primary">Login</button>
                            </div>
                            <div className='flex  justify-start'>
                                <p>New here ? <Link to='/register'>Register</Link></p>
                            </div>
                            <div>
                                <p className='text-red-500 font-semibold text-sm'>{msg}</p>
                            </div>
                        </form>
                        <button
                            onClick={() => setshowpw(!showpw)}
                            className='btn btn-xs absolute right-10 top-44'>{
                                showpw ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }</button>
                        <div className='mx-auto'>
                            <button
                                onClick={handleRegisterGOOGLE}
                                className='btn btn-wide mb-6 bg-blue-200 text-blue-950 font-bold'> Login with Google </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;