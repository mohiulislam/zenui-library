import React, {useEffect, useState} from 'react';

const TooltipCard = () => {

    const [topClicked, setTopClicked] = useState(false);

    useEffect(() => {
        const handleClick = (event) => {
            if (!event.target.closest('.top_button')) {
                setTopClicked(false)
            }
        }
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <>
            {/*  top  */}
            <div className='relative'>
                <button onClick={() => setTopClicked(true)}
                        className='top_button py-2 px-6 dark:border-slate-600 dark:text-darkSubTextColor border rounded-md border-gray-300 text-[1rem] font-[500] text-gray-500'>Click Tooltip
                </button>

                {/* tooltip */}
                <p className={`${topClicked ? 'opacity-100 z-[100] translate-y-0' : 'opacity-0 z-[-1] translate-y-[20px]'} absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] dark:bg-slate-800 transition-all duration-200`}>
                    Top Tooltip

                    {/* arrow */}
                    <span
                        className='w-[8px] h-[8px] bg-gray-800 dark:bg-slate-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]'></span>
                </p>
            </div>
        </>
    );
};

export default TooltipCard;
