import React from 'react';
import './FeaturedProperty.css';

const FeaturedProperty = () => {
    return (
        <div className='w-full max-w-7xl flex flex-col md:flex-row justify-between gap-4'>

            <div className="fpItem">
                <img src="https://i.ibb.co/zbhLPkd/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg" className='fpImg' alt="" />
                <span className='font-bold'>Long Beach Hotel</span>
                <span className='font-semibold'>Cox's Bazar</span>
                <span className='font-semibold'>Starting from $120</span>
                <div className='font-bold'>
                    <button className='px-2 bg-[#003580] text-white rounded-sm border-none mr-2'>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className="fpItem">
                <img src="https://i.ibb.co/zbhLPkd/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg" className='fpImg' alt="" />
                <span className='font-bold'>Long Beach Hotel</span>
                <span className='font-semibold'>Cox's Bazar</span>
                <span className='font-semibold'>Starting from $120</span>
                <div className='font-bold'>
                    <button className='px-2 bg-[#003580] text-white rounded-sm border-none mr-2'>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className="fpItem">
                <img src="https://i.ibb.co/zbhLPkd/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg" className='fpImg' alt="" />
                <span className='font-bold'>Long Beach Hotel</span>
                <span className='font-semibold'>Cox's Bazar</span>
                <span className='font-semibold'>Starting from $120</span>
                <div className='font-bold'>
                    <button className='px-2 bg-[#003580] text-white rounded-sm border-none mr-2'>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className="fpItem">
                <img src="https://i.ibb.co/zbhLPkd/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg" className='fpImg' alt="" />
                <span className='font-bold'>Long Beach Hotel</span>
                <span className='font-semibold'>Cox's Bazar</span>
                <span className='font-semibold'>Starting from $120</span>
                <div className='font-bold'>
                    <button className='px-2 bg-[#003580] text-white rounded-sm border-none mr-2'>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

        </div>
    );
};

export default FeaturedProperty;