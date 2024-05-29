"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const WellcomeBox = ({ iconUrl, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='min-h-[270px]'>
      <div
        className='flex flex-col items-center gap-6 transition-all cursor-pointer bg-[#F5F5F5] hover:bg-[#3F51B5] hover:text-white py-10 px-4 rounded'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <span>
            <Image style={{ filter: isHovered ? 'brightness(0) invert(1)' : 'none' }} src={iconUrl} height={50} width={62} alt='Wellcome Icon' className='h-[50px] w-[62px]' />
          </span>
        </div>
        <div className='text-xl font-semibold'>
          {title}
        </div>
        <div className='text-center'>
          {description.length > 150 ? `${description.slice(0, 150)}...` : description}
        </div>
      </div>
    </div>
  );
}

export default WellcomeBox;
