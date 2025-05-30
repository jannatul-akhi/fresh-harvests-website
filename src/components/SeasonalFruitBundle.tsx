"use client";

import React, { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const SeasonalFruitBundle = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3); // Offer ends in 3 days

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(endDate) - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      <div className="z-10 text-center md:text-left mb-8 md:mb-0">
        <p className="text-green-600 font-semibold text-sm">Special Offer</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 my-2">
          Seasonal Fruit Bundle
        </h1>
        <p className="text-lg text-gray-700">
          Discount up to <span className="text-red-500 font-bold">80% OFF</span>
        </p>

        <div className="flex gap-2 mt-6 justify-center md:justify-start">
          {(["days", "hours", "minutes", "seconds"] as (keyof TimeLeft)[]).map(
            (unit, idx) => (
              <div
                key={idx}
                className="bg-gray-100 text-center p-3 rounded-md w-16"
              >
                <div className="text-xl font-semibold">
                  {String(timeLeft[unit]).padStart(2, "0")}
                </div>
                <div className="text-xs uppercase text-gray-600">{unit}</div>
              </div>
            )
          )}
        </div>

        <div className="mt-6">
          <span className="bg-green-600 text-white py-2 px-4 rounded-full font-semibold text-sm">
            CODE : FRESH28
          </span>
        </div>
      </div>

      <div className="z-10 relative w-60 h-60">
        <img
          src="/images/fruit-bundle.png"
          alt="Seasonal Fruits"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/images/leaf-bg.svg"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
    </div>
  );
};

export default SeasonalFruitBundle;
