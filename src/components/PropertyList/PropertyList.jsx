import React from 'react';
import './PropertyList.css';

const PropertyList = () => {
    return (
        <div className='w-full max-w-7xl flex flex-col md:flex-row justify-between gap-4'>

            <div className="pListItem">
                <img src="https://i.ibb.co/HHWrm1T/lake-mountains.jpg" className='pListImg' alt="" />
                <div className="pListTitle">
                    <h1 className='text-xl font-bold'>Hotels</h1>
                    <h2 className='text-md font-semibold'>233 hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="https://i.ibb.co/HHWrm1T/lake-mountains.jpg" className='pListImg' alt="" />
                <div className="pListTitle">
                    <h1 className='text-xl font-bold'>Apartment</h1>
                    <h2 className='text-md font-semibold'>2331 hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="https://i.ibb.co/HHWrm1T/lake-mountains.jpg" className='pListImg' alt="" />
                <div className="pListTitle">
                    <h1 className='text-xl font-bold'>Ressort</h1>
                    <h2 className='text-md font-semibold'>2331 hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="https://i.ibb.co/HHWrm1T/lake-mountains.jpg" className='pListImg' alt="" />
                <div className="pListTitle">
                    <h1 className='text-xl font-bold'>Villas</h1>
                    <h2 className='text-md font-semibold'>2331 hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="https://i.ibb.co/HHWrm1T/lake-mountains.jpg" className='pListImg' alt="" />
                <div className="pListTitle">
                    <h1 className='text-xl font-bold'>Cabins</h1>
                    <h2 className='text-md font-semibold'>2331 hotels</h2>
                </div>
            </div>

        </div>
    );
};

export default PropertyList;