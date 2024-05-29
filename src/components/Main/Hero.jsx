import Link from "next/link";
import HeroSectionImage from "./hero.png"
import React from "react";
import Image from "next/image";

const Hero = () =>{
    const imageStyle = {
        height:"fit-content",
        width:"100%"
    }
    return(
        <>
            <section className="bg-[#0095B5]">
                <div className="grid py-8 lg:gap-6 lg:py-16 lg:grid-cols-12 container mx-auto">
                    <div className="mainCont mr-auto place-self-center lg:col-span-7">
                    <h1 style={{color: "#fff", lineHeight:"1.3"}} className="max-w-2xl mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-5xl font-bold tracking-tight leading-none md:text-5xl">
                    Smooth <span className="text-[#fff]"> Moving,</span> <br></br><span style={{color: "#fff"}}> <span className="text-white">Stress Free </span> <br></br> Movers & Packers</span>
                    </h1>
                    
                    <p style={{color: "var(--neutral-700, #fff)"}} className="max-w-2xl mb-6 text-justify font-normal lg:mb-8 text-sm md:text-[1rem]">
                    Your Trusted Partner for Local and Long-Distance Moves
                    </p>
                    <span  className="hidden lg:inline-block">
                    <Link className="bg-[#05CDFF] hover:bg-[#38bfe0] transition-all text-gray-200 font-bold rounded-lg px-8 py-4" href="/contact">
                        Contact Us
                    </Link>
                    </span>
                    
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 lg:flex justify-end">
                    
                    <Image loading="lazy" width={500} height={300} style={imageStyle} src={HeroSectionImage} alt="Hero Section." />
                    <span className="inline-block lg:hidden mt-6 w-full">
                    <Link className="bg-[#05CDFF] hover:bg-[#38bfe0] w-full inline-block text-center text-gray-200 font-bold rounded-lg px-8 py-4" href="/contact">
                        Contact Us
                    </Link>
                    </span>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero;