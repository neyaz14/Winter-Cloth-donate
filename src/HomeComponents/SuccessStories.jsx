import React from 'react';
import winterPIC1 from '../assets/winter_clothing_gallery_7.jpg';
import winterPIC2 from '../assets/winter_clothing_gallery_6.jpg';
import winterPIC3 from '../assets/winter_clothing_gallery_2.jpg';
import './SuccessStore.css';
import 'animate.css';
const SuccessStories = () => {
    return (
        <div>
            <h1 className='text-blue-950 font-bold text-5xl text-center my-10 animate__animated animate__pulse'>Our Success Stories</h1>


            <div className='animate__animated animate__pulse md:grid lg:grid-cols-3 justify-center items-stretch gap-6 card-container  py-3 mx-auto'>

                <div className="card-item my-4 card bg-blue-900 text-primary-content w-96">
                    <div className="card-body">
                        <h2 className=" text-2xl my-2 font-semibold ">Helping the Elderly in Rangpur</h2>
                        <p>Helping the Elderly in Rangpur</p>
                        <div className="card-actions justify-end">
                            {/* modal and btn */}
                            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Know more</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-3xl text-center text-blue-950 my-4">Helping the Elderly in Rangpur</h3>
                                    <figure>
                                        <img src={winterPIC1} alt="" />
                                    </figure>
                                    <p className="py-4 text-blue-950 font-medium opacity-80">Winter can be especially harsh for the elderly in Rangpur, many of whom lack proper clothing to stay warm. With limited resources and declining health, they are among the most vulnerable during this season. Our initiative aims to provide warm clothing and blankets to elderly individuals in rural Rangpur, ensuring their comfort and safety. By donating or volunteering, you can help protect these senior citizens from the cold and bring warmth to their lives. Together, we can make a difference and show our gratitude to a generation that has given so much. Let’s spread warmth and care this winter.</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>

                <div className="card-item my-4 card bg-blue-900 text-primary-content w-96">
                    <div className="card-body">
                        <h2 className="text-2xl my-2 font-semibold card-title">Blanket Drive for Sylhet Villages</h2>
                        <p>Blanket Drive for Sylhet Villages</p>
                        <div className="card-actions justify-end">
                            <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Know more</button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-center text-3xl text-blue-950 my-4">Blanket Drive for Sylhet Villages </h3>
                                    <img src={winterPIC2} alt="" />
                                    <p className="py-4  text-blue-950 font-medium opacity-80">As winter approaches, many vulnerable families in the remote villages of Sylhet face harsh cold nights without proper clothing. Our Blanket Drive aims to bring warmth and comfort to those in need. With your generous contributions, we can distribute warm blankets to underprivileged communities, ensuring they stay safe during the cold months. Join us in making a difference—donate today and help us spread warmth and hope across Sylhet's rural areas. Together, we can make this winter a little easier for those who need it the most. Every contribution counts!                                        </p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>

                <div className="card-item my-4 card bg-blue-900 text-primary-content w-96">
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold my-2 card-title">Warm Clothes for Rohinga Refugees </h2>
                        <p>Warm Clothes for Rohinga Refugees</p>
                        <div className="card-actions justify-end">
                            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Know more</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-center text-3xl text-blue-950 my-4">Warm Clothes for Rohinga Refugees</h3>
                                    <img src={winterPIC3} alt="" />
                                    <p className="py-4  text-blue-950 font-medium opacity-80"> As winter approaches, the Rohingya refugees in Bangladesh face immense challenges in the harsh weather. Living in makeshift shelters with limited resources, they struggle to stay warm. Thousands of children, women, and elderly individuals are at risk of hypothermia and other cold-related illnesses. Donating warm clothes such as sweaters, shawls, blankets, and socks can bring comfort and protection to these vulnerable communities. Your small act of kindness can make a significant difference. Together, let’s ensure no one is left to battle the cold alone. Extend your support today and help bring warmth to those in need.</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SuccessStories;