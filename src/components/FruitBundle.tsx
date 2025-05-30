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
  endDate.setDate(endDate.getDate() + 3); // Countdown target: 3 days from now

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
        className="absolute -top-60 -right-60 w-150 h-150 bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundImage: `url('/images/fruit-pattern.png')`,
          transform: "rotate(40deg)",
        }}
      ></div>

      {/* Bottom Left Fruit Pattern */}
      <div
        className="absolute -bottom-60 -left-60 w-150 h-150 bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundImage: `url('/images/fruit-pattern.png')`,
          transform: "rotate(40deg)",
        }}
      ></div>

      <div className="absolute inset-0 bg-gray-200/5 z-10 pointer-events-none"></div>

      <div className="w-11/12 mx-auto mt-40 relative z-50 flex flex-col lg:flex-row items-center justify-between">
        {/* Left: Content */}
        <div className="text-[#212337] flex flex-col justify-start">
          <p className="text-[#749B3F] text-[1.3rem] bg-[#749B3F1A] px-3 py-1 rounded-lg font-medium mb-2 w-fit">
            Special Offer
          </p>
          <h2 className="text-[2rem] md:text-[3rem] lg:text-[5rem] font-semibold text-gray-900 leading-tight">
            Seasonal Fruit Bundle
          </h2>
          <h3 className="text-[3rem] font-medium">
            Discount up to <span className="text-[#FF6A1A]">80% OFF</span>
          </h3>

          {/* Countdown Timer */}
          <div className="flex gap-4 mt-4">
            {(["days", "hours", "minutes", "seconds"] as (keyof TimeLeft)[]).map((unit, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white px-4 py-3 rounded-lg text-center"
              >
                <h3 className="text-[2.5rem] font-normal font-rubik">
                  {String(timeLeft[unit]).padStart(2, "0")}
                </h3>
                <p className="text-[#4A4A52] text-lg font-normal font-questrial">
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-[2rem] bg-[#176D38] text-white px-6 py-2 rounded-[6rem] w-fit mt-6 mb-16">
            CODE: <span className="text-[#FAC714]">FRESH25</span>
          </h3>
        </div>

        {/* Right: Image */}
        <div>
          <Image
            src="/images/fruit-images.png"
            alt="Happy man holding veggies"
            width={900}
            height={300}
            className="relative z-10 rounded-b-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FruitBundle;
