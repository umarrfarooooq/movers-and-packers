import React from 'react'
import "@/app/globals.css"
import BreadCrumbBg from "./BreadCrumbBg.png"

const Breadcrumb = (props) => {
  return (
    <div className='text-white'>
      <div>
        <div className='py-3 bg-[#0095B5]'>
          <p className='py-3 container'>Home &gt; {props.pageName}</p>
        </div>
        <div 
          className='h-28 lg:h-56 flex flex-col items-start justify-center relative' 
          style={{
            backgroundImage: `url(${BreadCrumbBg.src})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
          }}
        >
          <div 
            className='absolute inset-0' 
            style={{background: 'rgba(5,205,255, 0.1)'}}
          ></div>
          <div className='relative z-10 container'>
            <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold'>{props.pageTitle} <span className='text-[#0095B5]'>{props.pageTitleHighlight}</span></h3>
            <div className='w-16 h-1 bg-[#05cdff] mt-3 rounded-xl'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
