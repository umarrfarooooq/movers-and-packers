import React from "react";
import MainImage from "@public/Main/background.png";
import truckImage from "@public/Main/truckk.png";
import "./Main.css";
import Image from "next/image";

const Main = () => {
  return (
    <div className="py-4">
      <div className="md:px-4">
        <div className="relative mainImage max-h-[11rem] min-h-[11rem] sm:min-h-[32rem] md:min-h-[42rem] lg:min-h-[52rem] max-w-full w-full md:rounded-lg">
          <Image
            src={MainImage}
            alt="Main Background Image"
            fill
            style={{ objectFit: 'cover' }}
            className="bg-no-repeat bg-center bg-cover md:rounded-2xl"
          />
          <div className="plane">
            <Image src={truckImage} alt="truck Image" width={200} className="h-[6rem] w-[6rem] md:w-auto md:h-auto"/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Main;