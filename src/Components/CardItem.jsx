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
                    <p className='font-bold text-xl text-blue-950'>{title}</p>
                    <p className='opacity-75 text-blue-950'>{description}</p>
                    <p className='font-medium text-blue-950'>Status : {status ? "Ongoing" : "Completed"}</p>
                    <p className='text-blue-900 opacity-80'>Contact Info : {contactInfo}</p>
                    <p className='text-blue-900'>Division : {division} </p>
                </div>
                <div className='my-2'>
                    {
                        status ? 
                        <button onClick={handleDonatebtn} id={id} className='btn btn-sm bg-blue-200 text-blue-950 font-bold '>Donate Now</button>
                        :
                        <button onClick={handleDonatebtn} id={id} className='btn btn-disabled btn-sm bg-blue-200 text-blue-950 font-bold '>Donate Now</button>
                    }
                    
                </div>
           </div>
        </div>
    );
};

export default CardItem;



{/* <button onClick={handleDonatebtn} id={id} className='btn btn-sm bg-blue-200 text-blue-950 font-bold '>Donate Now</button> */}