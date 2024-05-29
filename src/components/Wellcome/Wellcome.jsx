import React from 'react'
import WellcomeBox from './WellcomeBox'
import wellcomeData from "./wellcomeData.json"

const Wellcome = () => {
  return (
    <div className='py-10 md:py-16'>
    <div className='flex flex-col items-center my-6 container'>
        <div className='text-2xl md:text-3xl lg:text-5xl font-bold'>WELLCOME TO MOVERS</div>
        <div className='md:w-3/4 mx-auto text-center'>We make your move stress-free and efficient. From packing to unpacking, our professional team handles it all with care. Trust Smooth Movers & Packers for a seamless moving experience.</div>
        <div></div>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container gap-4 mt-8 md:mt-16'>
        {wellcomeData.welcomeSection.map(item => (
          <WellcomeBox
            key={item.id}
            iconUrl={item.iconUrl}
            title={item.title}
            description={item.description}
          />
        ))}
    </div>
    </div>
  )
}

export default Wellcome
