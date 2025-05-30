import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      {/* About Us section  */}
      <section>
        <div className="flex items-center gap-10">
          <div className="w-1/2 ">
            <Image
              src="/images/about-us.png"
              alt=""
              width={770}
              height={880}
              className=""
            />
            <div>
              <Image
                src="/images/full-logo.png"
                alt=""
                width={200}
                height={100}
                className="rounded-sm"
              />
              <div className="w-1/4 rounded-[1.3rem] p-2 shadow hover:shadow-md transition duration-300 flex flex-col justify-between">
                <div className="relative w-full h-48 mb-2">
                  <Image
                    src="/images/latus.png"
                    alt="latus"
                    fill
                    className="object-cover rounded-2xl bg-[#F4F6F6]"
                  />
                </div>
                <div className="flex-1 justify-center">
                  <h2 className="text-[#212337] text-sm font-semibold font-rubik text-center">
                    Mushroom
                  </h2>

                  <p className="text-sm text-[#4A4A52] font-normal mb-4 font-questrial text-center">
                    $2.3/kg
                  </p>
                </div>
                <button className="bg-transparent border-1 border-[#D9D9D9] text-[#212337] px-4 py-2 rounded-lg w-full font-normal text-sm hover:bg-[#FF6A1A] hover:text-white hover:border-[#FF6A1A] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="w-1/2 text-start">
            <p className="   text-[#749B3F] text-[1.3rem] bg-[#749B3F1A] px-3 py-1 rounded-lg font-medium mb-2 inline-block">
              About us
            </p>
            <h2 className="text-[1rem] md:text-[2rem] lg:text-[3rem] font-semibold text-gray-900 leading-tight">
              About Fresh Harvest
            </h2>
            <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
              At Fresh Harvests, we are passionate about providing you with the
              freshest and most flavorful fruits and vegetables.At Fresh
              Harvests, we are passionate about providing you with the freshest
              and most flavorful fruits and vegetables.At Fresh Harvests, we are
              passionate about providing you with the freshest and most
              flavorful fruits and vegetables.
            </p>
            <button className="text-[#FF6A1A] border-1 border-[#FF6A1A] px-4 py-2 rounded-lg font-semibold mt-6">
              {" "}
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
