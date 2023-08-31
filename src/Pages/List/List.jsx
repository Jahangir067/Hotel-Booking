import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import './List.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem';

const List = () => {

    const location = useLocation();

    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className='text-2xl font-bold text-gray-600 mb-2'>Search</h1>
                        <div className="lsItem">
                            <label className=' text-lg font-semibold'>Destination</label>
                            <input className='h-8 border-none p-1' placeholder={destination} type="text" />
                        </div>
                        <div className="lsItem">
                            <label className='text-lg font-semibold'>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)} className='font-semibold h-8 p-1 bg-white flex items-center cursor-pointer'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange 
                            onChange={item => setDate([item.selection])}
                            minDate={new Date()}
                            ranges={date}
                            />}    
                        </div>
                        <div className="lsItem">
                            <label className='text-lg font-semibold'>Options</label>
                            <div className='lsOptions'>
                            <div className="lsOptionItem">
                                <span className=' text-sm font-semibold'>Min Price <small>per night</small></span>
                                <input type="number" className="lsOptionInput" />
                            </div>

                            <div className="lsOptionItem">
                                <span className=' text-sm font-semibold' >Max Price <small>per night</small></span>
                                <input type="number" className="lsOptionInput" />
                            </div>

                            <div className="lsOptionItem">
                                <span className=' text-sm font-semibold'>Adult</span>
                                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                            </div>

                            <div className="lsOptionItem">
                                <span className=' text-sm font-semibold'>Children</span>
                                <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
                            </div>

                            <div className="lsOptionItem">
                                <span className=' text-sm font-semibold'>Room</span>
                                <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
                            </div>
                          </div>
                        </div>
                        <button className='lsButton'>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;