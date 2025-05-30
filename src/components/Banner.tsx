import Image from "next/image";
import Navbar from "./shared/Navbar";
import { PiArrowBendDownRight } from "react-icons/pi";

const FreshHarvestHero = () => {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-white bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/images/bg.png')`,
        backgroundPosition: "center",
      }}
    >
      {/* Right Side Pattern Background Layer */}
      <div className="hidden lg:block absolute right-0 w-1/4 h-full pointer-events-none z-0">
        <Image
          src="/images/pattern.jpg"
          alt="Green Pattern"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#749B3F]/90 z-10"></div>
      </div>

      {/* Container */}
      <div className="w-11/12 mx-auto max-w-[1920px]">
        <Navbar />

        {/* Main Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between pt-10 gap-10 relative z-10">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="mx-auto lg:mx-0 w-fit text-[#749B3F] text-base sm:text-lg md:text-xl bg-[#749B3F1A] px-3 py-1 rounded-[8px] font-medium mb-2">
              Welcome to Fresh Harvest
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-snug">
              Fresh Fruits and <br className="hidden sm:block" /> Vegetables
            </h2>
            <p className="text-[#4A4A52] text-sm sm:text-base font-normal mt-4 max-w-md mx-auto lg:mx-0">
              At Fresh Harvests, we are passionate about providing you with the
              freshest and most flavorful fruits and vegetables.
            </p>
            <button className="mt-6 px-6 py-3 bg-[#FF6A1A] hover:bg-orange-500 text-white font-semibold rounded-lg">
              Shop Now
            </button>

            {/* Offer Card */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mt-8">
              <PiArrowBendDownRight className="text-[#749B3F] w-20 h-10 sm:w-32 sm:h-14 lg:w-40 lg:h-20" />
              <div className="flex items-center gap-3 bg-[#EBEBEB] p-4 rounded-lg w-full sm:w-fit">
                <div>
                  <p className="text-xs sm:text-sm text-[#176D38] font-medium">
                    Special Offer
                  </p>
                  <p className="text-xl sm:text-2xl font-medium text-[#212337]">
                    Fresh Salad
                  </p>
                  <p className="text-sm font-medium text-[#176D38]">
                    Up to{" "}
                    <span className="text-[#212337] text-lg sm:text-xl">70%</span>{" "}
                    <span className="text-[#212337]">off</span>
                  </p>
                  <span className="text-xs bg-[#176D38] text-white px-3 py-1 rounded-full mt-1 inline-block">
                    CODE: <span className="text-[#FAC714]">FRESH25</span>
                  </span>
                </div>
                <Image
                  src="/images/vegetable-plate.png"
                  alt="Salad"
                  width={100}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            {/* Download App */}
            <div className="relative mt-8">
              <div className="bg-[url('/images/leaf1.png')] bg-no-repeat bg-contain">
                <h3 className="text-[#4A4A52] text-sm sm:text-base font-normal mb-4">
                  Download App:
                </h3>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 pb-8">
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
          <div className="relative z-10 w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/little-girl.png"
              alt="Girl with vegetables"
              width={400}
              height={500}
              className="object-contain rounded-lg w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshHarvestHero;
