import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className='flex justify-between items-center text-white container mx-auto pl-4 flex-col-reverse md:flex-row'>
            <div className='text-2xl md:text-4xl font-bold leading-12 md:leading-20 w-full md:w-1/2 text-center md:text-left'><h1>Assalamu Alaikum / Hi... <br /> I am Naeem Haider, a <br />
                <TypeAnimation
                    sequence={['Full Stack Developer', 1000, 'Mern Stack Developer', 1000, 'Freelancer', 1000]}
                    speed={50}
                    deletionSpeed={80}
                    repeat={Infinity}
                    className='text-[#f306f3] text-3xl md:text-5xl'
                />
            </h1>
                <p className='text-lg font-normal mt-6'>
                    "I am a full-stack web developer with a passion for building robust and user-friendly applications. I specialize in React, Node.js, Tailwind, MUI, MongoDB and deliver efficient, scalable solutions."
                </p>
            </div>
            <div className='w-full md:w-1/2'>
                <figure className='flex justify-center md:justify-end'>
                    <img className='w-2/3 pr-4 md:pr-0' src="20250403_223802-Photoroom (1).png" alt="" />
                </figure>
            </div>
        </div>
    );
};

export default Banner;