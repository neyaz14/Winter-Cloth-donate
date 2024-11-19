import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardItem = ({item}) => {
    const {id, title, image,description,status, contactInfo, division} = item;
    const navigate = useNavigate();



    const handleDonatebtn =()=>{
        navigate(`/donation/${id}`)
    }

    return (
        <div>
           <div className='bg-blue-50 p-5 m-4 rounded-xl  '>
                <img src={image} alt="" />
                <div className='space-y-1'>
                    <p className='font-bold'>{title}</p>
                    <p className='opacity-75'>{description}</p>
                    <p className='font-semibold text-blue-950'>{status}</p>
                    <p className='opacity-80'>Contact Info : {contactInfo}</p>
                    <p>Division : {division} </p>
                </div>
                <div className='my-2'>
                    <button onClick={handleDonatebtn} id={id} className='btn btn-sm bg-blue-300 text-blue-900 font-bold '>Donate Now</button>
                </div>
           </div>
        </div>
    );
};

export default CardItem;