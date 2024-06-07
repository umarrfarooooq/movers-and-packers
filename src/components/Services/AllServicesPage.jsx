import React from 'react';
import ServiceBox from './ServiceBox';
import servicesData from './services.json';

const AllServicesPage = () => {
  return (
    <div className='py-10 md:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container gap-4 mt-8 md:mt-16'>
        {servicesData.services.map((service, index) => (
          <ServiceBox
            key={index}
            catName={service.title}
            description={service.description.length > 200 ? `${service.description.slice(0, 200)}...` : service.description}
            image={service.imagePath}
          />
        ))}
      </div>
    </div>
  );
};

export default AllServicesPage;
