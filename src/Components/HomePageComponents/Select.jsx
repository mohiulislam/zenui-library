import React from 'react';

const SelectCard = () => {

    return (
        <label className="relative">
            <input
                type="text"
                name="name"
                id="name"
                className="peer dark:bg-transparent dark:text-darkSubTextColor border-border border rounded-md outline-none px-4 py-3 w-full dark:border-slate-500 focus:border-primary transition-colors duration-300"
            />
            <span
                className="absolute -top-0.5 left-5 peer-focus:-top-7 dark:peer-focus:bg-darkBgColor peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primary text-[#777777] dark:text-slate-400 peer-focus:px-1 transition-all duration-300 ">
                    Your name
                  </span>
        </label>
    );
};

export default SelectCard;
