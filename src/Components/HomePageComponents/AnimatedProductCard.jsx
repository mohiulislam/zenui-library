import React, {useState} from 'react';
import {IoIosHeart, IoMdHeartEmpty} from "react-icons/io";
import {HiArrowsUpDown} from "react-icons/hi2";
import {IoBagHandleOutline, IoCartOutline, IoEyeOutline} from "react-icons/io5";
import {FiMinus, FiPlus} from "react-icons/fi";
import {FaStar} from "react-icons/fa";

const AnimatedProductCard = () => {

    const [rating, setRating] = useState(5);
    const [count, setCount] = useState(0);

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className='dark:border-slate-700 border border-gray-300 rounded-xl p-2 w-[70%]'>

            {/* product image */}
            <div className='relative'>
                <img alt='product/image' src='https://i.ibb.co.com/cTTfNRw/Link-1.png'
                     className='w-full'/>

                {/* favorite icon */}
                <div className='p-2 rounded-full bg-gray-600 absolute top-2 right-2'>
                    {
                        isFavorite ? (
                            <IoIosHeart onClick={() => setIsFavorite(false)}
                                        className={`text-[#0FABCA] text-[1.2rem] cursor-pointer`}/>
                        ) : (
                            <IoMdHeartEmpty onClick={() => setIsFavorite(true)}
                                            className={` text-white text-[1.2rem] cursor-pointer`}/>
                        )
                    }

                </div>
            </div>

            {/* product details */}
            <div className='mt-2 pt-0 p-1'>
                <h3 className='text-[1.1rem] dark:text-darkSubTextColor font-medium line-clamp-1'>Criphin - Contemporary
                    Business Keynote</h3>

                {/* authors & reviews */}
                <div className='flex items-center justify-between mt-1'>
                    <p className='text-gray-400 dark:text-slate-400 text-[0.9rem]'>by <span
                        className='text-black dark:text-slate-300'>Criphin</span> in <span
                        className='text-black dark:text-slate-300'>Graphics</span></p>

                    {/* review area */}
                    <div className='flex items-center gap-[10px]'>
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, index) => {
                                const starRating = index + 1;
                                return (
                                    <FaStar
                                        key={starRating}
                                        className={`cursor-pointer ${
                                            starRating <= rating ? "text-yellow-400" : "text-gray-300"
                                        }`}
                                        size={15}
                                        onClick={() => setRating(starRating)}
                                    />
                                );
                            })}
                        </div>
                        <span className='text-[0.8rem] dark:text-darkSubTextColor text-gray-500'>(4.8)</span>
                    </div>
                </div>

                {/* price and action btn */}
                <div className='flex items-end justify-between mt-5'>
                    <div>
                        <span className='text-gray-400 text-[0.9rem] dark:text-darkSubTextColor'>168 Sales</span>
                        <p className='text-[1.150rem] font-semibold text-[#0FABCA]'>$52.00</p>
                    </div>

                    <div className='flex items-center gap-[10px]'>
                        <button
                            className='py-2 px-4 border border-[#0FABCA] text-white rounded-md flex items-center group gap-[0.5rem] text-[0.9rem] hover:bg-[#0FABCA] transition-all duration-200'>
                            <IoCartOutline
                                className='text-[1.3rem] group-hover:text-white text-[#0FABCA]'/>
                        </button>

                        <button
                            className='py-2 px-4 border border-[#0FABCA] text-[#0FABCA] hover:text-white rounded-md flex items-center gap-[0.5rem] text-[0.9rem] hover:bg-[#0FABCA] transition-all duration-200'>
                            Preview
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedProductCard;
