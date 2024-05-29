import React from 'react';
import ServiceBox from './ServiceBox';
import Link from 'next/link';
import ServiceImg from "./servicee.png"
import servicesData from './services.json';

const AllServices = () => {
  return (
    <div className='py-10 md:py-16'>
      <div className='flex flex-col items-center my-6 container'>
        <div className='text-2xl md:text-3xl lg:text-5xl font-bold'>OUR SERVICES</div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container gap-4 mt-8 md:mt-16'>
        {servicesData.services.slice(0, 4).map((service, index) => (
          <ServiceBox
            key={index}
            catName={service.title}
            description={service.description.length > 200 ? `${service.description.slice(0, 200)}...` : service.description}
            image={service.imagePath}
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-center my-16">
        <button>
          <Link className="bg-[#05CDFF] hover:bg-[#38bfe0] transition-all text-gray-100 font-bold rounded-lg px-8 py-4" href="/">
            See All
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AllServices;
