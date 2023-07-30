import React from 'react';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured">

            <div className="featuredItem">
                <img src="https://i.ibb.co/HHWrm1T/lake-mountains.jpg" className="featuredItem" alt="" />
                <div className="featuredTitle">
                   <h1>Dublin</h1>
                   <h2>123 Properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://i.ibb.co/HHWrm1T/lake-mountains.jpg" className="featuredItem" alt="" />
                <div className="featuredTitle">
                   <h1>Dublin</h1>
                   <h2>123 Properties</h2>
                </div>
            </div>
            
            <div className="featuredItem">
                <img src="https://i.ibb.co/HHWrm1T/lake-mountains.jpg" className="featuredItem" alt="" />
                <div className="featuredTitle">
                   <h1>Dublin</h1>
                   <h2>123 Properties</h2>
                </div>
            </div>

        </div>
    );
};

export default Featured;