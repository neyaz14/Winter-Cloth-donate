import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';
import { toast } from 'react-toastify';

const Register = () => {
    const { Currentuser, setCurrentUser, singUP, updateUserProfile } = useContext(AuthContext);
    const [msg, setmsg] = useState();
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const name = form.get('name');
        const password = form.get('password');
        const photoURL = form.get('photo');
        singUP(email, password)
            .then((res) => {
                const user = res.user;
                // console.log(user)
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                {/* Password */}
                                <input
                                    name='password'
                                    type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
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