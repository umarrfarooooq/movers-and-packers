import React from 'react'
import ProcessCard from './ProcessCard'
import processData from './processData.json';
const Process = () => {
  return (
    <div className='py-10 md:py-16 bg-[#0095B5] bg-opacity-5'>
    <div className='flex flex-col items-center my-6 container'>
        <div className='text-2xl md:text-3xl lg:text-5xl font-bold'>OUR PROCESS</div>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container gap-4 mt-8 md:mt-16'>
        {processData.processSteps.map((step, index) => (
          <ProcessCard
            key={index}
            title={step.title}
            iconPath={step.iconPath}
            index={index}
          />
        ))}
    </div>
    </div>
  )
}

export default Process
