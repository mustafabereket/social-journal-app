import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-around p-8 lg:p-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="max-w-lg lg:w-1/2 space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Welcome to Social Journey
        </h1>
        <h2 className="text-lg lg:text-xl font-light">
          Write your daily adventures, reflections, and thoughts. <br /> Reflect
          on them later or share them with the rest of the world...
        </h2>
        <Link href="/sign-up">
          <span className="inline-block mt-4 px-4 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition">
            Get Started
          </span>
        </Link>
      </div>
      <div className="flex justify-center align-middle items-center lg:w-1/2 lg:mb-0">
        <Image
          src="/social-journal-hero-image.jpg"
          alt="hero-image"
          width={600} // Example width value, change as per your requirements
          height={400} // Example height value, change as per your requirements
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
