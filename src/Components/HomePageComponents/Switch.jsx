import React, {useState, useEffect} from 'react';
import useZenuiStore from "../../Store/Index.js";

const SwitchCard = () => {
    const [animatedSwitch, setAnimatedSwitch] = useState(false);
    const [widthIncrease, setWidthIncrease] = useState(false);

    const {theme, toggleTheme} = useZenuiStore();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        if(theme == 'dark'){
            setWidthIncrease(true)
            setTimeout(()=> {
                setWidthIncrease(false)
                setAnimatedSwitch(true)
            }, 300)
        }else {
            setWidthIncrease(true)
            setTimeout(()=> {
                setWidthIncrease(false)
                setAnimatedSwitch(false)
            }, 300)
        }
    }, [theme]);

    const handleAnimatedSwitch = () => {
        setWidthIncrease(true)

        toggleTheme()

        setTimeout(()=> {
            setWidthIncrease(false)
            setAnimatedSwitch(!animatedSwitch);
        }, 300)
    }

    return (
        <div className={`${animatedSwitch ? 'bg-primary border-primary' : 'bg-[#f0f0f0] dark:bg-slate-800 dark:border-darkBorderColor border-gray-200'} border relative p-1 rounded-full w-[60px] cursor-pointer transition-all h-[33px] duration-200`} onClick={handleAnimatedSwitch}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className={`${animatedSwitch ? 'translate-x-[13px] !bg-white' : 'translate-x-[-13px]'} ${widthIncrease ? '!w-[29px]' : '!w-[25px]'} w-[25px] h-[25px] rounded-full dark:bg-slate-400 bg-white transition-all duration-200`}>
                </div>
            </div>
        </div>
    );
};

export default SwitchCard;
