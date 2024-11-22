import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const { Currentuser, loggedInUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleUpdateinfo = (e)=>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photoURL = form.get('photo');
        updateUserProfile({displayName: name, photoURL: photoURL})
        .then(()=>{
            // console.log()
            navigate('/dashboard')
        })
        .catch(err=>{console.log(err.message)})
    }
    return (
        <div className='md:w-8/12 mx-auto'>
            <div>
                <p className='font-semibold text-2xl text-center'>Update Your Profile</p>
            </div>
            <form onSubmit={handleUpdateinfo} className="card-body">
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
                <div className='mx-auto'>
                    <button className='btn hover:text-blue-50 hover:bg-blue-950 btn-wide'>Update Info</button>
                </div>

            </form>


            
        </div>
    );
};

export default UpdateProfile;