import React, {useEffect} from 'react';

// import aos animation
import "aos/dist/aos.css";
import AOS from "aos";
import SingleToolCard from "./SingleToolCard.jsx";

const ZenUITools = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const cardData = [
        {
            title: "ShortKey",
            duration: '700',
            url: '/shortcut-generator',
            description: "Type your custom shortcut to instantly generate a function with conditions, enabling specific logic execution when the shortcut keys are pressed. Make Simplify your workflow!"
        },
        {
            title: "Icons",
            duration: '1000',
            url: '/icons',
            description: "Explore and enjoy ZenUI Library's collection of free icons, designed for customization and easy integration. Download and use them to enhance your projects."
        },
        {
            title: "Config AI",
            duration: '1000',
            url: '/config-generator',
            description: "Config AI will provide you with a ready-to-use configuration by generating a tailwind.config.js file with custom colors, fonts, and other settings tailored to your project needs."
        },
        {
            title: "Color Palette",
            duration: '1300',
            url: '/color-palette',
            description: "Customize your color shades! Paste a color code to explore shades, view hex, RGB, and HSL codes, and copy them instantly for seamless integration into your projects."
        }
    ];

    return (
        <section className='pb-5 max-w-[1700px] mx-auto mt-9 640px:mt-0'>
            <div data-aos="fade-zoom-in">
                <h1 className='text-[1.5rem] 425px:text-[2.2rem] dark:text-darkTextColor text-text font-[600] text-center px-8'>Introduce
                    With <span
                        className='heroText text-[#0FABCA] font-[500]'>ZenUI</span> Tools</h1>
                <p className='text-[0.9rem] dark:text-darkSubTextColor 640px:text-[1.1rem] text-center text-gray-500 px-8 w-full 1024px:w-[42%] mx-auto'>Streamline
                    your workflow with a versatile color palette, an extensive icon library, and a dynamic keyboard
                    shortcut generator.</p>
            </div>

            <div className='w-full px-8 425px:px-10 py-8 grid grid-cols-1 640px:grid-cols-2 1024px:grid-cols-4 gap-[20px] 1024px:mt-[1rem] mx-auto'>
                {
                    cardData.map((card, index) => (
                        <SingleToolCard duration={card.duration} key={index} data={card}/>
                    ))
                }
            </div>
        </section>
    );
};

export default ZenUITools;
