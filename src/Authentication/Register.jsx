import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { Currentuser, setCurrentUser, singUP, updateUserProfile } = useContext(AuthContext);
    const [msg, setmsg] = useState();
    const [showpw, setshowpw] = useState(false);
    const navigate = useNavigate();


    const handleRegister = e => {

        setmsg('');
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const name = form.get('name');
        const password = form.get('password');
        const photoURL = form.get('photo');
        // for pw validation 
        const pwREGX = /^(?=.*[a-z])(?=.*[A-Z])(?!.* ).{6,}$/
        if (!pwREGX.test(password)) {
            setmsg('Must have an Uppercase letter,a Lowercase letter and the Length must be at least 6 character');
            return;
        }


        singUP(email, password)
            .then((res) => {
                const user = res.user;
                setCurrentUser(user);
                updateUserProfile({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        // console.log()
                        navigate('/')
                    })
                    .catch(err => { setmsg(err.message) })


                e.target.reset();
                // navigate('/login')    
            })
            .catch((err) => { setmsg(err.message) })




    }
    const handleRegisterbtn = () => {

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Here</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                {/* name */}
                                <input
                                    name='name'
                                    type="text" placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>

                                {/* photo */}
                                <input
                                    name='photo'
                                    type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                {/* Email */}
                                <input
                                    name='email'
                                    type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                {/* pw toggle */}
                                <button
                                    onClick={() => setshowpw(!showpw)}
                                    className='btn btn-xs absolute right-2 top-12'>{
                                        showpw ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }</button>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                {/* pw inout */}
                                <input
                                    name='password'
                                    type={!showpw ? "password" : "text"}
                                    placeholder="password" className="input input-bordered" required />
                                

                                {/* --------------------------------------------------- */}
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    onClick={handleRegisterbtn}
                                    className="btn btn-primary">Register</button>
                            </div>
                            <div className='flex  justify-start'>
                                <p>Allready have an account? <Link to='/login'>Login</Link></p>
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

export default Register;