"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const FruitBundle = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(endDate) - +new Date();
    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-white bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('/images/bg.png')` }}
    >
      {/* Top Right Fruit Pattern */}
      <div
        className="absolute -top-80 -right-80 w-150 h-150 bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundImage: `url('/images/fruit-pattern.png')`,
          transform: "rotate(40deg)",
        }}
      ></div>

      {/* Bottom Left Fruit Pattern */}
      <div
        className="absolute -bottom-80 -left-80 w-150 h-150 bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundImage: `url('/images/fruit-pattern.png')`,
          transform: "rotate(40deg)",
        }}
      ></div>

        <div
        className="absolute -bottom-60 -left-60 w-150 h-150 bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundImage: `url('/images/')`,
          transform: "rotate(40deg)",
        }}
      ></div>

      <div className="absolute inset-0 bg-gray-200/5 z-10 pointer-events-none"></div>

      {/* Blur effect  */}
      <div className="absolute bottom-0 left-0 w-50 h-30 z-15 rounded-tr-full  blur-sm opacity-100 bg-gradient-to-tr from-[#749B3F] to-[#749B3F] pointer-events-none" />

      {/* leaf */}
      <div className="flex justify-center -mr-50 mt-16">
        <Image
          src="/images/leaf1.png"
          alt="Leaf"
          width={80}
          height={20}
          className="rounded-full object-cover -rotate-90"
        />
      </div>

      <div className="w-11/12 mx-auto  mb-10 relative z-50 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Content */}
        <div className="text-[#212337] flex flex-col justify-start text-center lg:text-left items-center lg:items-start w-full lg:w-1/2">
          <p className="text-[#749B3F] text-lg sm:text-xl bg-[#749B3F1A] px-4 py-1 rounded-lg font-medium mb-2 w-fit">
            Special Offer
          </p>

          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem] font-semibold text-gray-900 leading-tight">
            Seasonal Fruit Bundle
          </h2>

          <h3 className="text-[2rem] sm:text-[2.5rem] font-medium">
            Discount up to <span className="text-[#FF6A1A]">80% OFF</span>
          </h3>

          {/* Countdown Timer */}
          <div className="flex gap-2 sm:gap-4 mt-4 flex-wrap justify-center lg:justify-start">
            {(
              ["days", "hours", "minutes", "seconds"] as (keyof TimeLeft)[]
            ).map((unit, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-center w-20 sm:w-24"
              >
                <h3 className="text-2xl sm:text-[2.5rem] font-normal font-rubik">
                  {String(timeLeft[unit]).padStart(2, "0")}
                </h3>
                <p className="text-[#4A4A52] text-sm sm:text-lg font-normal font-questrial">
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-xl sm:text-2xl bg-[#176D38] text-white px-6 py-2 rounded-[6rem] w-fit mt-6 mb-12">
            CODE: <span className="text-[#FAC714]">FRESH25</span>
          </h3>
        </div>

        {/* Right: Image */}
        {/* Right: Image (Hide space on small screens, show only on lg) */}
        <div className="lg:flex hidden w-0 lg:w-1/2 justify-center">
          <Image
            src="/images/seasonal.png"
            alt="Happy man holding veggies"
            width={900}
            height={300}
            className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-[900px] h-auto relative z-10 rounded-b-4xl"
          />
          
        </div>
      </div>
      {/* leaf */}
      <div className="flex justify-end -mt-30 -mr-20">
        <Image
          src="/images/leaf1.png"
          alt="Leaf"
          width={200}
          height={60}
          className="rounded-full object-cover -rotate-90"
        />
      </div>
    </div>
  );
};

export default FruitBundle;
