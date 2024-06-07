import React from 'react'
import loaderImg from "@public/loading-spinner.gif"
import Image from 'next/image';
const Loading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Image src={loaderImg} width={50} height={50} alt='spinner' unoptimized/>
    </div>
  )
}

export default Loading
