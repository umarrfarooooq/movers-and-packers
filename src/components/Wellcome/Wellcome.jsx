import React from 'react'
import WellcomeBox from './WellcomeBox'
import wellcomeData from "./wellcomeData.json"
import Link from 'next/link'

const Wellcome = () => {
  return (
    <div className='py-10 md:py-16'>
    <div className='flex items-center justify-center mb-6'><button>
          <Link className="bg-[#05CDFF] hover:bg-[#38bfe0] transition-all text-gray-100 font-bold rounded-lg px-8 py-4" href="/contact">
            Contact Us
          </Link>
        </button></div>
    <div className='flex flex-col items-center my-6 container'>
        <div className='text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center'>WELLCOME TO STRESS FREE LOGISTICS</div>
        <div className='md:w-3/4 mx-auto text-center'>We make your move stress-free and efficient. From packing to unpacking, our professional team handles it all with care. Trust Stress free Movers & Packers for a seamless moving experience.</div>
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
