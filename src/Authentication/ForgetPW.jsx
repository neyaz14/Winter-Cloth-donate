import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../Provider/Provider';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPW = () => {
    const location = useLocation();
    // console.log(location.state)
    const [eemail, seteemail] = useState(location.state?.eemail || '');
    const { Currentuser, loggedInUser, forgetPassword } = useContext(AuthContext);
    // console.log(location.state?.email)
    const navigate = useNavigate();
    const emailRef = useRef();
    // console.log(eemail);


    const handleforgetpw = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        if (!email) {
            toast('give a valid email')
            return;
        }
        forgetPassword(email)
            .then(res => { toast('msg sent') })
            .catch(err => { setmsg(err) })


    }
    const handleResetPW = () => {
        if (!emailRef.current.value) {
            toast('give a valid email')
            return;
        }
        window.open('https://mail.google.com/')
    }
    return (
        <div>
            <ToastContainer  />
            <div>
                <p className='font-semibold text-2xl text-center'>Forget Your Password ? </p>
            </div>
            <form onSubmit={handleforgetpw} className="card-body mx-auto  md:w-[500px]">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    {/* name */}
                    <input
                        name='email'
                        ref={emailRef}
                        type="email"
                        value={eemail}
                        onChange={(e) => {seteemail(e.target.value)
                            console.log(e.target.value)
                        }}
                        placeholder="email" className="input input-bordered" required />
                </div>


                <div className='mx-auto'>
                    <button onClick={handleResetPW} className='btn btn-outline w-full'>Reset Password</button>
                </div>

            </form>


            <div>
                <button></button>
            </div>

        </div>
    );
};

export default ForgetPW;