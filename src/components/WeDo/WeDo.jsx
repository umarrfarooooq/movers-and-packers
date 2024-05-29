import React from 'react'
import WeDoBox from './WeDoBox'
import weDoData from "./weDoData.json"

const WeDo = () => {
  return (
    <div className='py-10 md:py-16 bg-[#05CDFF]'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container gap-4 mt-8 md:mt-16'>
      {weDoData.weDoSection.map(item => (
          <WeDoBox key={item.id} iconUrl={item.iconUrl} title={item.title} description={item.description} />
        ))}
    </div>
    </div>
  )
}

export default WeDo
