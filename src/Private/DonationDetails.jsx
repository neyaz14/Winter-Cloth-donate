import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
const DonationDetails = () => {


    const data = useLoaderData();
    const { campid } = useParams();
    const idnum = parseInt(campid);

    // console.log(idnum)
    // console.log(data)
    const campaign = data.find(campaign => campaign.id == campid)
    // console.log(campaign)

    const { id, title, image, description, status, contactInfo, division } = campaign;

    const handleDonateForm = e => {
        e.preventDefault();
        toast.success('Thank you ! We will reach your destination soon');

        e.target.reset();
    }
    return (
        <div>
            <h1 className='animate__animated animate__pulse font-bold text-blue-950 text-5xl text-center my-5'>Details About Campaigns</h1>
            {/*  */}

            <div className='bg-blue-50 p-5 md:p-10 rounded-2xl '>
                <figure>
                    <img src="" alt="" />
                </figure>
                <div className='text-center'>
                    <p className='text-3xl text-blue-900 font-bold'>{title}</p>
                    <img className='w-1/2 mx-auto rounded-2xl my-3' src={image} alt="" />
                    <p className=' text-blue-900 font-bold opacity-75'>{description}</p>
                    <p className=' font-semibold text-blue-900'>{status}</p>
                    <p className=' text-blue-900 opacity-80'>Contact Info : {contactInfo}</p>
                    <p>Division : {division} </p>
                </div>
            </div>

            <div className='mt-5 w-8/12 mx-auto'>
                <h1 className='text-blue-900 font-bold text-3xl text-center'>Fill up the form to donate </h1>
                <form onSubmit={handleDonateForm} className="card-body">
                    {/* Quantity of items */}
                    <div className="form-control">
                        <p></p>
                        <label className="label">
                            <span className="label-text">Quantity of items</span>
                        </label>
                        <input type="number" placeholder="Quantity of items" className="input input-bordered" required />
                    </div>

                    {/* Item type */}
                    <div className="form-control">
                        <p></p>
                        <label className="label">
                            <span className="label-text">Select What type of item you want to donate</span>
                        </label>
                        <select className="select select-info w-full ">
                            <option disabled selected>Select What type of item you want to donate</option>
                            <option>Blanket</option>
                            <option>Jacket</option>
                            <option>sweater</option>
                        </select>
                    </div>

                    {/* Pickup location */}
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Location of pickup</span>
                        </label>
                        <input type="text" placeholder="Location of pickup" className="input input-bordered" required />
                    </div>
                    <ToastContainer />
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-200 text-blue-950 font-bold text-xl">Donate to help</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default DonationDetails;