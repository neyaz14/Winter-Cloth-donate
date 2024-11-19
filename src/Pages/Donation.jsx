import React from 'react';
import Navbar from '../Components/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';
import CardItem from '../Components/CardItem';
const DonationCampaigns = () => {
    const alldata = useLoaderData();
    return (
        <div>
           <div>
                <h1 className='font-bold text-blue-950 text-3xl text-center my-5'>Our Campaigns</h1>
           </div>
            <div className='grid grid-cols-2'>

                {
                    alldata.map(item =>
                        <CardItem key={item.id} item={item}>

                        </CardItem>)
                }
            </div>


            
        </div>
    );
};

export default DonationCampaigns;