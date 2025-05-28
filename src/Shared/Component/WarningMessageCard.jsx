import React from 'react';

// react icons
import {SlInfo} from "react-icons/sl";

const WarningMessageCard = ({children, text, width = 90}) => {
    return (
        <div className={`p-4 flex gap-2 w-full 425px:w-[${width}%] bg-[#d18f0011] border border-[#d18e00]  rounded mb-8`}>
            <p>
                <SlInfo className='text-[#d17d00] text-[1.2rem]'/>
            </p>
            <p className='text-[#d18e00] text-[0.9rem]'>
                {children ? children : text}
            </p>
        </div>
    );
};

export default WarningMessageCard;
