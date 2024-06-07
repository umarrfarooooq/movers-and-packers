import React from "react";
import AboutImage from "./About.jpg";
import MissionImage from "./Mission.jpg";
import Image from "next/image";
import "@/app/globals.css";

const AboutComponent = () => {
  return (
    <section className="bg-white py-8 lg:py-16 flex flex-col gap-12">
      <div className="py-10 md:py-16 flex flex-col lg:flex-row gap-6 lg:items-start lg:justify-between container">
        <div className="lg:mt-0 w-full">
          <h1
            style={{ color: "#313131", lineHeight: "1.3" }}
            className="max-w-2xl mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-5xl font-bold tracking-tight leading-none md:text-5xl"
          >
            About Us
          </h1>
          <p
            style={{ color: "var(--neutral-700, #313131)" }}
            className="max-w-2xl mb-6 text-justify font-normal lg:mb-8 text-sm md:text-[1rem]"
          >
            Welcome to Stress Free Logistics, your trusted partner for all your moving and packing needs in Pakistan. Founded with a vision to revolutionize the moving industry, we specialize in providing comprehensive, reliable, and stress-free logistics services.
          </p>
          <ol className="flex flex-col gap-3">
            <li>
              <span className="text-lg font-semibold">
              Who We Are
              </span>{" "}
              Stress Free Logistics is a team of dedicated professionals committed to making your moving experience seamless and hassle-free. Our expertise spans across residential, commercial, and long-distance moves, ensuring that no matter the size or scope of your move, we have you covered.
            </li>
            <li>
              <span className="text-lg font-semibold">
              Residential Moves
              </span>{" "}
              Whether you are moving across the street or across the country, our team handles your belongings with the utmost care, ensuring they reach your new home safely and on time.
            </li>
            <li>
              <span className="text-lg font-semibold">
                Integrity and Trust:
              </span>{" "}
              Building lasting relationships based on trust, transparency, and
              honesty. We handle our clients belongings with the utmost care and
              respect, ensuring their safe and timely delivery.
            </li>
            <li>
              <span className="text-lg font-semibold">
              Commercial Moves:{" "}
              </span>
              We understand the complexities of relocating a business. Our efficient and organized approach minimizes downtime, helping your business get back on track quickly.
            </li>
            <li>
              <span className="text-lg font-semibold">Packing Services: </span>{" "}
              Our professional packers use high-quality materials and techniques to ensure your items are securely packed and protected during transit
            </li>
          </ol>
          <p className="mt-4">
          Thank you for considering Stress Free Logistics. We look forward to serving you and making your next move the best one yet.
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <Image
            alt="Courses"
            className="mx-auto aspect-auto overflow-hidden rounded-xl object-cover object-top sm:w-full"
            height="550"
            src={AboutImage}
            width="550"
          />
        </div>
      </div>
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
            At Stress Free Logistics, our mission is to transform the moving
            experience by providing exceptional, reliable, and hassle-free
            logistics services across Pakistan. We are dedicated to:
          </p>
          <ol className="flex flex-col gap-3">
            <li>
              <span className="text-lg font-semibold">
                Professional Excellence:
              </span>{" "}
              Delivering the highest standards of professionalism and expertise
              in every move, ensuring that each client receives the best
              possible service.
            </li>
            <li>
              <span className="text-lg font-semibold">
                Customer-Centric Approach:
              </span>{" "}
              Putting our customers at the heart of everything we do,
              understanding their unique needs, and providing tailored solutions
              to make their move smooth and stress-free.
            </li>
            <li>
              <span className="text-lg font-semibold">
                Integrity and Trust:
              </span>{" "}
              Building lasting relationships based on trust, transparency, and
              honesty. We handle our clients belongings with the utmost care and
              respect, ensuring their safe and timely delivery.
            </li>
            <li>
              <span className="text-lg font-semibold">
                Innovation and Improvement:{" "}
              </span>
              Continuously seeking innovative ways to enhance our services,
              streamline our processes, and exceed our clients expectations.
            </li>
            <li>
              <span className="text-lg font-semibold">Team Empowerment:</span>{" "}
              Fostering a supportive and inclusive work environment where our
              team members are empowered, trained, and motivated to deliver
              exceptional service.
            </li>
          </ol>
          <p className="mt-4">
            Our commitment is to make every move a positive and stress-free
            experience, ensuring that our clients can focus on the excitement of
            their new beginnings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
