import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DonationDetails = () => {


    const data = useLoaderData();
    const { campid } = useParams();
    const idnum = parseInt(campid);

    console.log(idnum)
    console.log(data)
    const campaign = data.find(campaign => campaign.id == campid)
    console.log(campaign)

    const { id, title, image, description, status, contactInfo, division } = campaign;

    return (
        <div>
            <h1 className='font-bold text-blue-950 text-4xl text-center my-5'>Details About Campaigns</h1>
            {/*  */}

            <div className='bg-blue-50 p-5 md:p-10 rounded-2xl '>
                <figure>
                    <img src="" alt="" />
                </figure>
                <div className='text-center'>
                <p className='text-3xl text-blue-900 font-bold'>{title}</p>
                <p className=' text-blue-900 opacity-75'>{description}</p>
                <p className=' font-semibold text-blue-900'>{status}</p>
                <p className=' text-blue-900 opacity-80'>Contact Info : {contactInfo}</p>
                <p>Division : {division} </p>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default DonationDetails;