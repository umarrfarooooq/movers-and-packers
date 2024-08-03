import Image from 'next/image'
import React from 'react'

const ServiceBox = (props) => {
  return (
    <div>
      <div className="rounded-3xl bg-[#F5F5F5] md:my-0 md:min-h-[23.438rem] cursor-pointer relative overflow-hidden hover:shadow-md p-6 hover:outline hover:outline-[#107243] outline-1 transition-all">
        <div className="overflow-hidden rounded-md w-full max-h-[17rem] md:max-h-[13rem]">
          <Image
            loading="lazy"
            width={1000}
            height={1000}
            className="w-full h-full object-top object-cover"
            src={props.image}
            alt={props.imageAlt || "Service Detail"}
          />
        </div>
        <div className="service-detail mt-2 md:text-start flex flex-col justify-between">
          <h3 className="text-xs sm:text-xl font-bold" style={{ color: "#1A1A1A" }}>
            {props.catName.slice(0, 25)}{props.catName.length > 25 ? "..." : ""}
          </h3>
          <p className="text-sm sm:text-base leading-4">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceBox
