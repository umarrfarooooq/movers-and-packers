import Link from "next/link";
import HeroSectionImage from "./hero2.jpg";
import React from "react";
import Image from "next/image";
import backgroundImage from './main-bg.jpg';

const Hero = () => {
  const imageStyle = {
    height: "fit-content",
    width: "100%",
  };

  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
      className="w-full h-auto bg-cover bg-center relative"
    >
      <div className="bg-black/30 absolute inset-0"></div>
      <div className="grid py-8 lg:gap-6 lg:py-16 lg:grid-cols-12 container mx-auto relative z-10 min-h-[20rem] md:min-h-[35rem]">
        <div className="mainCont mr-auto place-self-center lg:col-span-7 hidden md:inline-block">
          <h1 className="max-w-2xl mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-5xl font-bold tracking-tight leading-none md:text-5xl text-white">
            Smooth <span className="text-white"> Moving,</span> <br />
            <span className="text-white">Stress Free </span> <br /> Movers & Packers
          </h1>

          <p className="max-w-2xl mb-6 text-justify font-normal lg:mb-8 text-sm md:text-[1rem] text-white">
            Your Trusted Partner for Local and Long-Distance Moves
          </p>
          <span className="hidden lg:inline-block">
            <Link
              className="bg-[#05CDFF] hover:bg-[#38bfe0] transition-all text-gray-200 font-bold rounded-lg px-8 py-4"
              href="/contact"
            >
              Contact Us
            </Link>
          </span>
        </div>
        <div className="lg:mt-0 lg:col-span-5 flex items-center justify-center">
          <span className="inline-block lg:hidden mt-6 w-full">
            <Link
              className="bg-[#05CDFF] hover:bg-[#38bfe0] w-full inline-block text-center text-gray-200 font-bold rounded-lg px-8 py-4"
              href="/contact"
            >
              Contact Us
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;