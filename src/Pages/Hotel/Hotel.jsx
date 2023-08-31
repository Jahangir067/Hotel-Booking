import React, { useState } from 'react';
import './Hotel.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import MailList from '../../components/MailList/MailList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const photos = [
        {
            src: "https://i.ibb.co/wg7thP8/modern-studio-apartment-design-with-bedroom-living-space.jpg"
        },
        {
            src: "https://i.ibb.co/qBZ6h1n/hammocks-with-palm-trees.jpg"
        },
        {
            src: "https://i.ibb.co/zbhLPkd/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg"
        },
        {
            src: "https://i.ibb.co/qBZ6h1n/hammocks-with-palm-trees.jpg"

        },
        {
            src: "https://i.ibb.co/kXYYD5d/spa-salon-with-beach-view.jpg"
        },
        {
            src: "https://i.ibb.co/F4V1Yqf/light-garden-luxury-pool-nature.jpg"
        },
    ];

    const handleOpen = (index) => {
        setSlideNumber(index);
        setOpen(true);

    }

    const handleMove = (direction) => {
        let newSlideNumber;
        if(direction === 'L'){
            newSlideNumber = slideNumber === 0 ? 5: slideNumber - 1;
        }
        else{
            newSlideNumber = slideNumber === 5 ? 0: slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)}/>
                        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('L')}/>
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('R')}/>
                </div>}
                <div className="hotelWrapper">
                    <button className='bookNow'>Reserve or Book Now!</button>
                    <h1 className="text-2xl font-bold">Grand Hotel</h1>
                    <div className="hotelAddres">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className='hotelDistance'>Excellent location 500m from center</span>
                    <span className="hotelPriceHighLight">Book a stay over $114 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        {
                            photos.map((photo, index) => (
                                <div className="hotelImgWrapper">
                                    <img onClick={() => handleOpen(index)} src={photo.src} alt="" className="hotelImg" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailTexts">
                            <h1 className="hotelTitle text-2xl font-bold">Stay in the heart of CoxsBazar</h1>
                            <p className="text-[16px] mt-5">Located in Cox's Bazar, a few steps from Cox's Bazar Sea Beach, Seagull Hotels Ltd. Has accommodations with an outdoor swimming pool, free private parking, a garden and a shared lounge. This 5-star hotel offers a private beach area and room service. The property provides a 24-hour front desk, airport transportation, a kids' club and free WiFi throughout the property. The nearest airport is Cox's Bazar Airport, 5 miles from Seagull Hotels Ltd..</p>
                        </div>
                        <div className="hotelDetailPrice">
                            <h1 className='text-[16px] font-bold text-[#555]'>Perfect for a 9-night stay</h1>
                            <span>This property has taken 17 steps to make your stay more sustainable.
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                                </h2>
                                <button className='bookBtn'>Reserve or Book Now</button>
                        </div>
                    </div>
                
                </div>
            </div>
            <MailList></MailList>
            <Footer></Footer>
        </div>
    );
};

export default Hotel;