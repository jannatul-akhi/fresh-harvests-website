import Image from "next/image";
import Navbar from "./shared/Navbar";
import { PiArrowBendDownRight } from "react-icons/pi";

const FreshHarvestHero = () => {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-white bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/images/bg.png')`,
      }}
    >
      {/* Right Side Pattern Background Layer */}
      <div className="hidden lg:block absolute  right-0 w-1/4 h-[calc(100%)] pointer-events-none z-0">
        <Image
          src="/images/pattern.jpg"
          alt="Green Pattern"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#749B3F]/90 z-10"></div>
      </div>

      {/* container  */}
      <div className="w-11/12 mx-auto max-w-[1920px]">
        {/* Top Navbar */}

        <Navbar></Navbar>

        {/* Main Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between pt-10 gap-10 relative z-10">
          {/* Left Side */}
          <div className="">
            <p className="w-fit text-[#749B3F] text-[1.3rem] bg-[#749B3F1A] px-3 py-1 rounded-[8px] font-medium mb-2">
              Welcome to Fresh Harvest
            </p>
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[5rem] font-semibold text-gray-900 leading-tight">
              Fresh Fruits and <br /> Vegetables
            </h2>
            <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
              At Fresh Harvests, we are passionate about providing you with the
              freshest <br /> and most flavorful fruits and vegetables.
            </p>
            <button className="mt-6 px-6 py-3 bg-[#FF6A1A] hover:bg-orange-500 text-white font-semibold rounded-lg">
              Shop Now
            </button>

            {/* Offer Card */}
            <div className="flex">
              <PiArrowBendDownRight className="text-[#749B3F] w-40 h-20 ml-10" />
              <div className="mt-8 flex items-center gap-5 bg-[#EBEBEB] p-4 rounded-lg w-fit">
                <div>
                  <p className="text-sm text-[#176D38] text-[.88rem] font-medium">
                    Special Offer
                  </p>
                  <p className="text-[1.75rem] font-medium text-[#212337]">
                    Fresh Salad
                  </p>
                  <p className="text-[1rem] font-medium text-[#176D38]">
                    Up to{" "}
                    <span className="text-[#212337] text-[1.5rem]">70%</span>{" "}
                    <span className="text-[#212337]">off</span>
                  </p>
                  <span className="text-xs bg-[#176D38] text-white px-3 py-1 rounded-[2.2rem] mt-1 inline-block">
                    CODE: <span className="text-[#FAC714]">FRESH25</span>
                  </span>
                </div>
                <Image
                  src="/images/vegetable-plate.png"
                  alt="Salad"
                  width={180}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            {/* Download App */}
            <div className="relative mt-8">
              <div className="bg-[url('/images/leaf1.png')] bg-no-repeat before:-z-10 before:rotate-45 ">
                <h3 className="text-[#4A4A52] text-[.88rem] font-normal mb-4">
                  DOWNLOAD APP:
                </h3>
                <div className=" flex gap-4 pb-8">
                  <Image
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                    width={135}
                    height={40}
                  />
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                    alt="Google Play"
                    width={135}
                    height={40}
                  />
                </div>
              </div>
            </div>

           
          </div>

          {/* Right Side - Girl Image */}
          <div className="relative z-10 pb-0">
            <Image
              src="/images/little-girl.png"
              alt="Girl with vegetables"
              width={770}
              height={880}
              className="object-cover rounded-lg  bottom-0 "
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshHarvestHero;
