import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";

const SingleToolCard = ({data, duration}) => {

    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <Link to={data.url}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            ref={cardRef}
            data-aos="fade-up" data-aos-duration={duration}
            className='p-[20px] relative overflow-hidden hover:border-[#0FABCA] transition-all duration-300 cursor-pointer rounded-md dark:border-darkBorderColor border-[2px] border-dashed flex-col border-gray-200 flex items-center'>
            <h4 className='text-[1.3rem] font-semibold dark:text-darkTextColor text-gray-700'>{data.title}</h4>
            <p className='mt-[10px] text-[0.9rem] dark:text-darkSubTextColor text-gray-500 text-center'>{data.description}</p>

            {isHovering && (
                <div
                    className="absolute inset-0 pointer-events-none dark:blur-[50px] blur-[80px]"
                    style={{
                        background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, #DB06F9, transparent)`,
                    }}
                />
            )}
        </Link>
    );
};

export default SingleToolCard;
