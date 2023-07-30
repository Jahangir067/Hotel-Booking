import React from 'react';

const Navbar = () => {
    return (
        <div className='h-12 bg-[#003580] flex justify-center'>
            <div className="w-full max-w-5xl text-white flex justify-between items-center">
                <span className='font-medium'>BoiToron</span>
                <div>
                    <button className='ms-5 border-none btn btn-accent btn-sm '>Register</button>
                    <button className='ms-5 border-none btn btn-accent btn-sm'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;