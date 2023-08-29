import React from 'react';
import './Featured.css';

const Featured = () => {
    return (
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between gap-4 newItems">

            <div className="featuredItem">
                <img src="https://i.ibb.co/HHWrm1T/lake-mountains.jpg" className="featuredImg" alt="" />
                <div className="featuredTitle">
                   <h1 className='text-2xl font-semibold'>Dublin</h1>
                   <h2 className='text-xl font-semibold'>123 Properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://i.ibb.co/HHWrm1T/lake-mountains.jpg" className="featuredImg" alt="" />
                <div className="featuredTitle">
                   <h1 className='text-2xl font-semibold'>London</h1>
                   <h2 className='text-xl font-semibold'>123 Properties</h2>
                </div>
            </div>
            
            <div className="featuredItem">
                <img src="https://i.ibb.co/HHWrm1T/lake-mountains.jpg" className="featuredImg" alt="" />
                <div className="featuredTitle">
                   <h1 className='text-2xl font-semibold'>Berlin</h1>
                   <h2 className='text-xl font-semibold'>123 Properties</h2>
                </div>
            </div>

        </div>
    );
};

export default Featured;