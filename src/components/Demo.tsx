"use client";

import Image from "next/image";

const ProductComponent = () => {
  return (
    // Leave section
    <div className="w-full mt-6">
      <section className="pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side - Image Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            {/* Background Shape */}
            <div className="absolute w-[300px] h-[300px] bottom-0 right-26 bg-[#749B3F] rounded-full z-0"></div>

            {/* Man Image */}
            <Image
              src="/images/about-us.png"
              alt="Happy man holding veggies"
              width={900}
              height={800}
              className="relative z-10 rounded-b-4xl"
            />

            {/* Logo & Product Card Container */}
            <div className="absolute  z-20 flex flex-col gap-3">
              <Image
                src="/images/full-logo.png"
                alt="Fresh Harvest logo"
                width={180}
                height={60}
                className="rounded-sm bg-white"
              />

              {/* Product Card */}
              <div className="w-40 rounded-[1.3rem] p-2 shadow hover:shadow-md bg-white transition duration-300 flex flex-col justify-between">
                <div className="relative w-full h-32 mb-2">
                  <Image
                    src="/images/latus.png"
                    alt="Lettuce"
                    fill
                    className="object-cover rounded-2xl bg-[#F4F6F6]"
                  />
                </div>
                <h2 className="text-[#212337] text-sm font-semibold font-rubik text-center">
                  Mushroom
                </h2>
                <p className="text-sm text-[#4A4A52] font-normal mb-2 font-questrial text-center">
                  $2.3/kg
                </p>
                <button className="bg-transparent border border-[#D9D9D9] text-[#212337] px-4 py-2 rounded-lg w-full font-normal text-sm hover:bg-[#FF6A1A] hover:text-white hover:border-[#FF6A1A] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Text Section */}
          <div className="w-full lg:w-1/2 text-start">
            <div className="lg:w-3/4">
              <p className="text-[#749B3F] text-[1.3rem] bg-[#749B3F1A] px-3 py-1 rounded-lg font-medium mb-2 inline-block">
                About us
              </p>
              <h2 className="text-[1rem] md:text-[2rem] lg:text-[3rem] font-semibold text-gray-900 leading-tight">
                About Fresh Harvest
              </h2>
              <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
                Welcome to Fresh Harvest, your premier destination for
                high-quality and fresh produce. We are passionate about
                providing you with the finest fruits, vegetables, and salad
                ingredients to nourish your body and delight your taste buds.
                With a commitment to excellence, sustainability, and customer
                satisfaction, Fresh Harvest is here to revolutionize your
                grocery shopping experience.
              </p>
              <button className="text-[#FF6A1A] border border-[#FF6A1A] px-4 py-2 rounded-lg font-semibold mt-6">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductComponent;
