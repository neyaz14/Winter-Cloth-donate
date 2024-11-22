import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import lebanon from '../assets/lebanon.jpg'
import yemen from '../assets/yemen.jpg'
import bng from '../assets/bng.jpg'
import doante from '../assets/donate.jpg'
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
// import slider3 from '../assets/slider3.jpg'
// import slider4 from '../assets/slider4.jpg'
import Aos from 'aos';
import "aos/dist/aos.css"

const Banner = () => {
    useEffect(() => {
        Aos.init({duration:1200});
    }, [])
   
    return (
        <>
       <div className='-z-20 ' data-aos="fade-down">
       <Swiper className="mySwiper">
        <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
        {/* <SwiperSlide><img src={slider3} alt="" /></SwiperSlide> */}
        {/* <SwiperSlide><img src={slider4} alt="" /></SwiperSlide> */}
        {/* <SwiperSlide><img src={bng} alt="" /></SwiperSlide>
        <SwiperSlide><img src={doante} alt="" /></SwiperSlide> */}
        {/* <SwiperSlide><img src={lebanon} alt="" /></SwiperSlide>
        <SwiperSlide><img src={lebanon} alt="" /></SwiperSlide>
        <SwiperSlide><img src={lebanon} alt="" /></SwiperSlide> */}
       
      </Swiper>
       </div>
        
        </>
    );
};

export default Banner;















// <div className='mx-auto flex flex-col items-center'>
//             <div className="carousel   w-[1200px]">
//                 <div id="item1" className="carousel-item w-full">
//                     <img
//                         src={lebanon}
//                         className="w-full" />
//                 </div>
//                 <div id="item2" className="carousel-item w-full">
//                     <img
//                         src={yemen}
//                         className="w-full" />
//                 </div>
//                 <div id="item3" className="carousel-item w-full">
//                     <img
//                         src={bng}
//                         className="w-full" />
//                 </div>
//                 <div id="item4" className="carousel-item w-full">
//                     <img
                    
//                         src={doante}
//                         className="w-full object-cover" />
//                 </div>
                
//             </div>
//             <div className="flex w-full justify-center gap-2 py-2">
//                 <a href="#item1" className="btn btn-xs">1</a>
//                 <a href="#item2" className="btn btn-xs">2</a>
//                 <a href="#item3" className="btn btn-xs">3</a>
//                 <a href="#item4" className="btn btn-xs">4</a>
                
//             </div>


//         </div>