"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ProcessCard = ({ title, iconPath, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='flex flex-col sm:items-center'>
      <div 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        className='relative rounded cursor-pointer transition-all bg-[#F5F5F5] hover:bg-[#3F51B5] flex items-center justify-center shadow-md p-12'
      >
        <span>
          <Image 
            style={{ filter: isHovered ? 'brightness(0) invert(1)' : 'none' }} 
            className='h-[50px] w-[62px]'
            src={iconPath} 
            width={49} 
            height={49} 
            alt='Process Icon'
          />
        </span>
        <span className='h-8 w-8 bg-[#3F51B5] shadow-sm absolute -top-4 -left-4 flex items-center justify-center font-medium text-white'>
          {index + 1}
        </span>
      </div>
      <div className='text-xl md:text-2xl font-semibold my-6'>{title}</div>
    </div>
  );
};

export default ProcessCard;
