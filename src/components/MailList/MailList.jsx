import React from 'react';
import './MailList.css';

const MailList = () => {
    return (
        <div className='w-full mt-12 bg-[#003580] text-white flex flex-col items-center gap-4 p-12'>
            <h1 className="text-4xl font-bold">Save time, save money!</h1>
            <span className="mailDesc">Sign up and we'll send the best deals to you</span>
            <div className="mailInputContainer">
                <input type="text" placeholder='Your Email' />
                <button className='hover:bg-[#0085c2]'>Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;