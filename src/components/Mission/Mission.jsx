import React from "react";
import MissionImage from "../AboutPage/Mission.jpg";
import Image from "next/image";

const Mission = () => {
  return (
    <div>
      <div className="py-10 md:py-16 flex flex-col lg:flex-row gap-6 lg:items-start lg:justify-between container">
        <div className="flex items-center justify-center w-full">
          <Image
            alt="Courses"
            className="mx-auto aspect-auto overflow-hidden rounded-xl object-cover object-top sm:w-full"
            height="550"
            src={MissionImage}
            width="550"
          />
        </div>
        <div className="lg:mt-0 w-full">
          <h1
            style={{ color: "#313131", lineHeight: "1.3" }}
            className="max-w-2xl mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-5xl font-bold tracking-tight leading-none md:text-5xl"
          >
            Our Mission
          </h1>
          <p
            style={{ color: "var(--neutral-700, #313131)" }}
            className="max-w-2xl mb-6 text-justify font-normal lg:mb-8 text-sm md:text-[1rem]"
          >
            At Stress Free Logistics, our mission is to transform the moving experience by providing exceptional, reliable, and hassle-free logistics services across Pakistan.
            We are dedicated to:
          </p>
            <ol className="flex flex-col gap-3">
              <li><span className="text-lg font-semibold">Professional Excellence:</span> Delivering the highest standards of professionalism and expertise in every move, ensuring that each client receives the best possible service.</li>
              <li><span className="text-lg font-semibold">Customer-Centric Approach:</span> Putting our customers at the heart of everything we do, understanding their unique needs, and providing tailored solutions to make their move smooth and stress-free.</li>
              <li><span className="text-lg font-semibold">Integrity and Trust:</span> Building lasting relationships based on trust, transparency, and honesty. We handle our clients belongings with the utmost care and respect, ensuring their safe and timely delivery.</li>
              <li><span className="text-lg font-semibold">Innovation and Improvement: </span>Continuously seeking innovative ways to enhance our services, streamline our processes, and exceed our clients expectations.</li>
              <li><span className="text-lg font-semibold">Team Empowerment:</span> Fostering a supportive and inclusive work environment where our team members are empowered, trained, and motivated to deliver exceptional service.</li>
            </ol>
            <p className="mt-4">
            Our commitment is to make every move a positive and stress-free experience, ensuring that our clients can focus on the excitement of their new beginnings.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
