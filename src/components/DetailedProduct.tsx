"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/react";

const DetailedProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://cdn.pixabay.com/photo/2016/09/29/08/33/apple-1702316_1280.jpg",
    "https://c8.alamy.com/comp/DJ011P/red-apple-and-dvd-on-books-DJ011P.jpg",
    "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdXB3azYyMDUyMTcxLXdpa2ltZWRpYS1pbWFnZS1qb2I2MjFfMi5wbmc.png",
  ];

  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    slideTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const clearAutoSlide = () => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearAutoSlide();
  }, []);

  const handleQuantity = (type: "inc" | "dec") => {
    setQuantity((prev) => (type === "inc" ? prev + 1 : Math.max(1, prev - 1)));
  };

  return (
    <div className="w-full px-4 py-10 max-w-7xl mx-auto">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl overflow-hidden border relative"
        >
          <div
            className="relative w-full aspect-square bg-white"
            onMouseEnter={clearAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="absolute inset-0 w-full h-full object-contain"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-4 pb-1">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-green-600 scale-110"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="space-y-4"
        >
          <span className="text-sm text-green-600 font-medium">Fruits</span>
          <h1 className="text-3xl font-bold text-[#191A1C]">Coconut</h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-500">5.0 (100 reviews)</span>
          </div>
          <p className="text-[#FF6A1A] text-xl font-semibold">$6.3/kg</p>
          <p className="text-sm text-gray-600">
            From our farm directly to your door, our fresh coconuts are
            harvested at the peak of ripeness, offering you a sweet, hydrating
            fruit full of flavor.
          </p>

          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Quantity</span>
            <button
              onClick={() => handleQuantity("dec")}
              className="px-2 border rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => handleQuantity("inc")}
              className="px-2 border rounded"
            >
              +
            </button>
            <span className="ml-2">kg</span>
          </div>

          <div className="flex items-center gap-4">
            <Button className="bg-gray-100 text-sm font-medium px-4 py-2 rounded-md shadow-sm">
              Save as favorite
            </Button>
            <Button className="bg-[#FF6A1A] text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-orange-500">
              Add to cart
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="mt-10">
        <div className="flex gap-4 mb-4">
          <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-md">
            Description
          </button>
          <button className="bg-gray-100 text-sm px-4 py-2 rounded-md">
            Reviews (1)
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-100 p-4 rounded-lg text-base text-gray-700"
        >
          Our coconuts are sustainably grown, ensuring the best quality and
          taste. Each coconut is handpicked and carefully prepared, offering you
          the freshest product possible. Rich in healthy fats, electrolytes, and
          essential nutrients, coconuts provide both hydration and nourishment.
          Whether you’re using the water, flesh, or milk, our coconuts bring
          versatility to your kitchen while supporting healthy living.
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-100 p-4 rounded-lg text-base text-gray-700"
        >
          Perfect for smoothies, desserts, curries, and more — let the natural
          sweetness of the coconut elevate your recipes. Enjoy the tropical
          goodness in its purest form, directly from nature.
        </motion.div>
      </div>

      {/* Related Products */}
      <div className="mt-16 text-center">
        <span className="text-sm text-green-600 font-medium">Our Products</span>
        <h2 className="text-2xl font-bold text-[#191A1C] mt-1 mb-6">
          Related products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Kiwi", price: "$5.3/kg", image: "/images/kiwi.png" },
            { name: "Orange", price: "$4.2/kg", image: "/images/orange.png" },
            { name: "Guava", price: "$2.1/kg", image: "/images/guava.png" },
            {
              name: "Eggplant",
              price: "$1.2/kg",
              image: "/images/eggplant.png",
            },
          ].map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow rounded-xl p-4 flex flex-col items-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="text-sm font-semibold text-[#191A1C] mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{item.price}</p>
              <Button className="text-sm border px-4 py-1 rounded-md">
                Add to cart
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
