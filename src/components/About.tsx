import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-11/12 mx-auto max-w-[1920px] py-10">
      <div className="flex flex-col lg:flex-row items-center gap-10 relative">
        {/* Left Side - Image with Overlays */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/images/about-us.png"
            alt="Happy farmer"
            width={770}
            height={880}
            className="w-full h-auto object-contain"
          />

          {/* Logo overlay */}
          <div className="absolute top-[15%] left-[10%] bg-white px-3 py-2 rounded-md shadow-md flex items-center gap-2 z-10">
            <Image
              src="/images/full-logo.png"
              alt="Fresh Harvest logo"
              width={30}
              height={30}
              className="object-contain rounded"
            />
            <p className="text-sm font-semibold text-[#212337]">Fresh Harvests</p>
          </div>

          {/* Product card overlay */}
          <div className="absolute bottom-[8%] left-[25%] w-40 sm:w-48 rounded-2xl bg-white p-3 shadow-lg z-10">
            <div className="relative w-full h-28 mb-2">
              <Image
                src="/images/latus.png"
                alt="Mushroom"
                fill
                className="object-cover rounded-2xl bg-[#F4F6F6]"
              />
            </div>
            <div className="text-center">
              <h2 className="text-[#212337] text-sm font-semibold font-rubik">
                Mushroom
              </h2>
              <p className="text-sm text-[#4A4A52] font-questrial mb-3">$2.3/kg</p>
              <button className="bg-transparent border border-[#D9D9D9] text-[#212337] text-sm px-4 py-1.5 rounded-lg w-full hover:bg-[#FF6A1A] hover:text-white hover:border-[#FF6A1A] transition">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <p className="text-[#749B3F] text-lg bg-[#749B3F1A] px-3 py-1 rounded-lg font-medium mb-2 inline-block">
            About us
          </p>
          <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight">
            About Fresh Harvest
          </h2>
          <p className="text-[#4A4A52] text-sm sm:text-base mt-4 max-w-[90%] lg:max-w-full lg:mx-0">
            Welcome to Fresh Harvest, your premier destination for high-quality and
            fresh produce. We are passionate about providing you with the finest fruits,
            vegetables, and salad ingredients to nourish your body and delight your
            taste buds. With a commitment to excellence, sustainability, and customer
            satisfaction, Fresh Harvest is here to revolutionize your grocery shopping
            experience.
          </p>
          <button className="text-[#FF6A1A] border border-[#FF6A1A] px-6 py-2 rounded-lg font-semibold mt-6 hover:bg-[#FF6A1A] hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
