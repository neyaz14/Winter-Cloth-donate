import React from 'react';
import { FaHandsHelping } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className=" bg-blue-950  text-neutral-content py-8">
                <div>
                    <a className=" mb-10 text-4xl flex gap-3 items-center justify-center">
                        <FaHandsHelping />
                        <span className='font-bold'>Cloth Donate</span></a>
                </div>
                <div className='text-neutral-content footer mx-auto py-10 flex justify-evenly' >
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;