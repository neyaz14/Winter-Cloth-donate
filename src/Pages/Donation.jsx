import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';
import CardItem from '../Components/CardItem';
import 'animate.css';
import Aos from 'aos';
import "aos/dist/aos.css"
const DonationCampaigns = () => {

    const alldata = useLoaderData();

    useEffect(() => {
        Aos.init({duration:1200});
    }, [])
    return (
        <div >
            <div>
                <h1 className=' font-bold text-blue-950 text-5xl text-center my-5'>Our Campaigns</h1>
            </div>
            <div className='md:grid grid-cols-2' data-aos="fade-right">

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