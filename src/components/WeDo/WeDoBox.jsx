import React from 'react';
import Image from 'next/image';

const WeDoBox = ({ iconUrl, title, description }) => {
    return (
        <div>
          <div className='flex flex-col items-center gap-6 transition-all cursor-pointer bg-transparent text-white py-10 px-4 rounded'>
            <div>
                <span>
                    <Image src={iconUrl} height={50} width={62} alt='We Do Icon' className='h-[50px] w-[62px]'/>
                </span>
            </div>
            <div className='text-xl font-semibold'>
                {title}
            </div>
            <div className='text-center'>
                {description}
            </div>
          </div>
        </div>
      )
}

export default WeDoBox;
